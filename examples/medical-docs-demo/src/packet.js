import { z } from 'zod';

// 문서화용 합성 패킷만 받는다. 임상 범위나 생리학적 임계값을 정의하지 않는다.
export const packetSchema = z.object({
  deviceId: z.string().regex(/^[A-Z0-9-]{1,32}$/),
  recordedAt: z.string().datetime(),
  sequence: z.number().int().nonnegative().safe(),
  samples: z.array(z.number().finite()).min(1).max(256),
}).strict();

export function parsePacket(input) {
  return packetSchema.parse(input);
}
