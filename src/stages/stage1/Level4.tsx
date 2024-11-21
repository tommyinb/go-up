import { useCallback, useState } from "react";
import { Coin } from "./Coin";
import { CountDownButton } from "./CountDownButton";
import { Floor } from "./Floor";
import { OnePressButton } from "./OnePressButton";

export function Level4({ next }: Props) {
  const [completed, setCompleted] = useState(false);

  return (
    <Floor width={10} depth={10}>
      <CountDownButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 0]}
        count={10}
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

          <Coin position={[0, 0, -3]} />
        </>
      )}
    </Floor>
  );
}

interface Props {
  next: () => void;
}
