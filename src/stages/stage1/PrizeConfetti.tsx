import { PrizeConfettiBox } from "./PrizeConfettiBox";
import { PrizeConfettiRing } from "./PrizeConfettiRing";

export function PrizeConfetti() {
  return (
    <>
      <PrizeConfettiBox
        count={300}
        boxSize={[1, 1, 1]}
        maxVelocity={[3, 2, 3]}
      />

      <PrizeConfettiRing
        count={300}
        ringWidth={2}
        ringHeight={1}
        velocity={8}
      />
    </>
  );
}
