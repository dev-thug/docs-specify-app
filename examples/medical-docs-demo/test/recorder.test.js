import test from 'node:test';
import assert from 'node:assert/strict';
import { Recorder, MAX_RETAINED_PACKETS, STALE_AFTER_MS } from '../src/recorder.js';
import { exportCsv } from '../src/export.js';

const packet = (sequence = 1) => ({ deviceId: 'DEMO-01', recordedAt: '2026-10-01T09:00:00Z', sequence, samples: [0.1, 0.2] });

test('검증되지 않은 입력과 추가 필드는 저장하지 않는다', () => {
  const r = new Recorder();
  assert.throws(() => r.accept({ ...packet(), samples: [Infinity] }));
  assert.throws(() => r.accept({ ...packet(), patientName: 'not-allowed' }));
  assert.equal(r.snapshot().retainedCount, 0);
});

test('중복·역순 일련번호는 거부하고 기기별 순서는 독립적으로 관리한다', () => {
  const r = new Recorder();
  r.accept(packet(2));
  assert.throws(() => r.accept(packet(2)), /PACKET_OUT_OF_ORDER/);
  assert.throws(() => r.accept(packet(1)), /PACKET_OUT_OF_ORDER/);
  r.accept({ ...packet(1), deviceId: 'DEMO-02' });
  assert.equal(r.snapshot().receivedCount, 2);
});

test('보관 한도를 초과하면 가장 오래된 패킷을 제거한다', () => {
  const r = new Recorder();
  for (let i = 0; i <= MAX_RETAINED_PACKETS; i++) r.accept(packet(i));
  assert.equal(r.snapshot().retainedCount, MAX_RETAINED_PACKETS);
  assert.equal(r.packets()[0].sequence, 1);
});

test('수신 전 상태와 신선도 경계 조건을 구분한다', () => {
  const r = new Recorder();
  assert.equal(r.snapshot(0).connection, 'no-data');
  r.accept(packet(), 0);
  assert.equal(r.snapshot(STALE_AFTER_MS).connection, 'recent');
  assert.equal(r.snapshot(STALE_AFTER_MS + 1).connection, 'stale');
});

test('내보내기는 메타데이터만 포함하며 조회 결과로 내부 상태를 바꿀 수 없다', () => {
  const r = new Recorder();
  r.accept(packet(), 0);
  r.packets()[0].samples[0] = 99;
  assert.equal(r.packets()[0].samples[0], 0.1);
  assert.equal(exportCsv(r), 'device_id,recorded_at,sequence,sample_count\nDEMO-01,2026-10-01T09:00:00Z,1,2');
});
