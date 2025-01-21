import { useEffect } from "react";
import { useTrack } from "../../audios/useTrack";
import buttonSound from "./button.mp3";

export function usePressedButtonSound(pressed: boolean) {
  const track = useTrack(buttonSound);

  useEffect(() => {
    if (pressed) {
      track.current?.play();
    }
  }, [pressed, track]);
}
