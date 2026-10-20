import { Recorder } from './recorder.js';
import { exportCsv } from './export.js';

const recorder = new Recorder();
const now = Date.parse('2026-10-01T09:00:00Z');
recorder.accept({ deviceId: 'DEMO-01', recordedAt: '2026-10-01T09:00:00Z', sequence: 1, samples: [0.1, 0.2, 0.1] }, now);
console.log(JSON.stringify(recorder.snapshot(now), null, 2));
console.log(exportCsv(recorder));
