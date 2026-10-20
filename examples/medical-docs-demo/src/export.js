// 스키마에서 제한한 필드만 내보내며 원시 신호와 수신 시각은 제외한다.
export function exportCsv(recorder) {
  const rows = recorder.packets().map(p => [p.deviceId, p.recordedAt, p.sequence, p.samples.length].join(','));
  return ['device_id,recorded_at,sequence,sample_count', ...rows].join('\n');
}
