import { useCallback } from "react";
import { useSound } from "../../audios/useSound";
import buttonSound from "../stage1/button.mp3";

export function usePressingButtonSound() {
  const sound1 = useSound(buttonSound);
  const sound2 = useSound(buttonSound);
  const sound3 = useSound(buttonSound);
  const sound4 = useSound(buttonSound);
  const sound5 = useSound(buttonSound);
  const sound6 = useSound(buttonSound);
  const sound7 = useSound(buttonSound);
  const sound8 = useSound(buttonSound);
  const sound9 = useSound(buttonSound);

  return useCallback(
    (index: number) => {
      const sounds = [
        sound1,
        sound2,
        sound3,
        sound4,
        sound5,
        sound6,
        sound7,
        sound8,
        sound9,
      ];

      const sound = sounds[index % sounds.length];

      sound();
    },
    [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9]
  );
}
