import test from 'node:test';
import assert from 'node:assert/strict';
import { exportTasks } from '../src/export-tasks.js';

const task = { id: 'DEMO-01', title: '샘플 업무', status: 'open' };

test('소유자와 편집자는 내보낼 수 있고 뷰어는 거부된다', () => {
  for (const role of ['owner', 'editor']) assert.match(exportTasks({ role, tasks: [task] }), /DEMO-01/);
  assert.throws(() => exportTasks({ role: 'viewer', tasks: [task] }), /ACCESS_DENIED/);
});

test('1,000건은 허용하고 초과하면 잘라내지 않고 거부한다', () => {
  assert.equal(exportTasks({ role: 'owner', tasks: Array(1000).fill(task) }).split('\n').length, 1001);
  assert.throws(() => exportTasks({ role: 'owner', tasks: Array(1001).fill(task) }), /EXPORT_LIMIT_EXCEEDED/);
});

test('쉼표와 따옴표를 CSV 셀 형식으로 이스케이프한다', () => {
  assert.equal(exportTasks({ role: 'editor', tasks: [{ ...task, title: '회의, "검토"' }] }), 'id,title,status\n"DEMO-01","회의, ""검토""","open"');
});

test('수식 접두사와 앞 공백을 포함한 입력을 문자열로 내보낸다', () => {
  assert.match(exportTasks({ role: 'owner', tasks: [{ ...task, title: ' =1+1' }] }), /"' =1\+1"/);
});

test('정의하지 않은 상태와 누락된 필드를 거부한다', () => {
  assert.throws(() => exportTasks({ role: 'editor', tasks: [{ ...task, status: 'unknown' }] }), /INVALID_TASK/);
  assert.throws(() => exportTasks({ role: 'editor', tasks: [{}] }), /INVALID_TASK/);
});
