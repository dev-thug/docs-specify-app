import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const css = read('src/app/pretendard-variable-dynamic-subset.css') + read('src/app/globals.css');
const points = (text) => {
  const result = new Set();
  for (const match of text.matchAll(/U\+([0-9a-f]+)(?:-([0-9a-f]+))?/gi)) {
    const start = parseInt(match[1], 16);
    const end = parseInt(match[2] ?? match[1], 16);
    for (let point = start; point <= end; point++) result.add(point);
  }
  return result;
};
const ranges = [...css.matchAll(/unicode-range:\s*([^;]+);/g)].map((match) => match[1]).join(',');
const covered = points(ranges);
for (const point of points(read('scripts/test-fixtures/pretendard-v1.3.9-full-cmap-ranges.txt'))) {
  assert(covered.has(point), `Missing original glyph U+${point.toString(16)}`);
}
const checksums = read('public/fonts/pretendard/SHA256SUMS').trim().split('\n');
assert.equal(checksums.length, 95);
for (const entry of checksums) {
  const [expected, path] = entry.trim().split(/\s+/);
  const bytes = readFileSync(new URL(`../public/fonts/pretendard/${path}`, import.meta.url));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, path);
  assert(css.includes(`/fonts/pretendard/${path}`), `Unreferenced font ${path}`);
}
assert(!css.includes('/fonts/PretendardVariable.woff2'));
assert.match(read('public/fonts/pretendard/OFL.txt'), /SIL OPEN FONT LICENSE/);
console.log('Original font glyph coverage, 95 asset checksums, local URLs and license verified.');
