import { parsePacket } from './packet.js';

export const MAX_RETAINED_PACKETS = 1000;
export const STALE_AFTER_MS = 30_000;

export class Recorder {
  #packets = [];
  #lastSequence = new Map();
  #receivedCount = 0;

  accept(input, receivedAt = Date.now()) {
    const packet = parsePacket(input);
    const previous = this.#lastSequence.get(packet.deviceId);
    if (previous !== undefined && packet.sequence <= previous) {
      throw new Error('PACKET_OUT_OF_ORDER');
    }
    this.#lastSequence.set(packet.deviceId, packet.sequence);
    this.#packets.push({ ...packet, receivedAt });
    this.#receivedCount += 1;
    if (this.#packets.length > MAX_RETAINED_PACKETS) this.#packets.shift();
    return packet;
  }

  snapshot(now = Date.now()) {
    const latest = this.#packets.at(-1);
    return {
      receivedCount: this.#receivedCount,
      retainedCount: this.#packets.length,
      latestSequence: latest?.sequence ?? null,
      connection: !latest ? 'no-data' : now - latest.receivedAt > STALE_AFTER_MS ? 'stale' : 'recent',
    };
  }

  packets() {
    return structuredClone(this.#packets);
  }
}
