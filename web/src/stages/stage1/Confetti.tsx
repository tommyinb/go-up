import { useEffect } from "react";
import { useSound } from "../../audios/useSound";
import { ConfettiBox } from "./ConfettiBox";
import { ConfettiRing } from "./ConfettiRing";
import confettiSound from "./confetti.mp3";

export function Confetti({ active }: Props) {
  const sound = useSound(confettiSound);
  useEffect(() => {
    if (active) {
      sound();
    }
  }, [active, sound]);

  return (
    <>
      {active && (
        <>
          <ConfettiBox
            count={300}
            boxSize={[1, 1, 1]}
            maxVelocity={[3, 2, 3]}
          />

          <ConfettiRing count={300} ringWidth={2} ringHeight={1} velocity={8} />
        </>
      )}
    </>
  );
}

interface Props {
  active: boolean;
}
