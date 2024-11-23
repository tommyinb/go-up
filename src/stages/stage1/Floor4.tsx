import { useCallback, useState } from "react";
import { Coin } from "./Coin";
import { CountDownButton } from "./CountDownButton";
import { Floor } from "./Floor";
import { OnePressButton } from "./OnePressButton";

export function Floor4({ index, setLevel }: Props) {
  const [completed, setCompleted] = useState(false);

  const nextLevel = useCallback(() => setLevel(index + 1), [index, setLevel]);

  return (
    <Floor index={index} width={10} depth={10}>
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
            onPress={nextLevel}
          />

          <Coin position={[0, 0, -3]} />
        </>
      )}
    </Floor>
  );
}

interface Props {
  index: number;

  setLevel: (index: number) => void;
}
