import { useCallback, useEffect, useState } from "react";
import { Coin } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { PressingButton } from "./PressingButton";

export function Floor6({ index, answer7 }: Props) {
  const [pressing, setPressing] = useState(false);

  const [completed, setCompleted] = useState(false);
  const complete = useCallback(() => setCompleted(true), []);

  const nextLevel = useNextLevel(index);
  useEffect(() => {
    if (completed) {
      nextLevel();
    }
  }, [completed, nextLevel]);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressingButton
        position={[-3, 0, 0]}
        pressing={pressing}
        setPressing={setPressing}
        disabled={completed}
      />

      {(pressing || completed) && (
        <PressedButton position={[3, 0, 0]} onPress={complete} />
      )}

      {answer7.startsWith("A") && <Coin position={[0, 0, -3]} />}
      {answer7.endsWith("D") && <Coin position={[0, 0, 3]} />}
    </Floor>
  );
}

interface Props {
  index: number;

  answer7: string;
}
