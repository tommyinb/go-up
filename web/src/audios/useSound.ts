import { useCallback, useContext } from "react";
import { AudioContext } from "./AudioContext";
import { useTrack } from "./useTrack";

export function useSound(url: string) {
  const track = useTrack(url);

  const { disabled } = useContext(AudioContext);

  return useCallback(() => {
    if (!disabled) {
      track.current?.play();
    }
  }, [disabled, track]);
}
