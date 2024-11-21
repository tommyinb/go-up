import { useCallback, useState } from "react";
import { Coin } from "./Coin";
import { CountDownButton } from "./CountDownButton";
import { Floor } from "./Floor";
import { OnePressButton } from "./OnePressButton";

export function Level8({ next }: Props) {
  const [completed, setCompleted] = useState(false);

  return (
    <Floor width={10} depth={10}>
      <CountDownButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 0]}
        count={30}
        onComplete={useCallback(() => setCompleted(true), [])}
      />

      {completed && (
        <>
          <OnePressButton
            width={1.1}
            depth={1.1}
            position={[0, 0, 3]}
            onPress={next}
          />

          {Array.from({ length: 3 }).flatMap((_, i) =>
            Array.from({ length: 3 }).map((_, j) =>
              !((i === 1 && j === 1) || (i === 1 && j === 2)) ? (
                <Coin
                  key={`${i}-${j}`}
                  position={[(i - 1) * 3, 0, (j - 1) * 3]}
                />
              ) : undefined
            )
          )}
        </>
      )}
    </Floor>
  );
}

interface Props {
  next: () => void;
}
