import { useSound } from "../../audios/useSound";
import buttonSound from "./button.mp3";

export function usePressedButtonSound() {
  return useSound(buttonSound);
}
