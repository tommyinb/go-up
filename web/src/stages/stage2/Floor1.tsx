import { useCallback, useState } from "react";
import { Coin } from "../stage1/Coin";
import { CountButton } from "../stage1/CountButton";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor1({ index }: Props) {
  const nextLevel = useNextLevel(index);

  const [active, setActive] = useState(false);

  return (
    <Floor index={index} width={10} depth={10}>
      <CountButton
        position={[-3, 0, 3]}
        count={10}
        onComplete={useCallback(() => setActive(true), [])}
      />

      <Coin position={[-3, 0, -3]} />
      <Coin position={[3, 0, 3]} />

      {active && <PressedButton position={[3, 0, -3]} onPress={nextLevel} />}
    </Floor>
  );
}

interface Props {
  index: number;
}
