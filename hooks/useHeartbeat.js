import { useEffect } from 'react';
export function useHeartbeat(src = '/public/avantasommer_subtle_heartbeat.wav', volume = 0.2) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof Audio !== 'function') return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.loop = true;
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.currentTime = 0; };
  }, [src, volume]);
}
