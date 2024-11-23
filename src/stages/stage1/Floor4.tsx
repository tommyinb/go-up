import { useCallback, useState } from "react";
import { Coin } from "./Coin";
import { CountButton } from "./CountButton";
import { Floor } from "./Floor";
import { PressedButton } from "./PressedButton";
import { useNextLevel } from "./useNextLevel";

export function Floor4({ index }: Props) {
  const [completed, setCompleted] = useState(false);

  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <CountButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 0]}
        count={10}
        onComplete={useCallback(() => setCompleted(true), [])}
      />

      {completed && (
        <>
          <PressedButton
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
}
