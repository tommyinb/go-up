import { useCallback } from "react";
import { Coin } from "../stage1/Coin";
import { CountButton } from "../stage1/CountButton";
import { Floor } from "../stage1/Floor";
import { useNextLevel } from "../stage1/useNextLevel";
import { NearButton } from "./NearButton";

export function Floor4({ index, active, setActive }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <CountButton
        position={[0, 0, -3]}
        count={10}
        onComplete={useCallback(() => setActive(true), [setActive])}
      />

      {active && <Coin position={[0, 0, 0]} />}

      <NearButton position={[4, 0, 4]} onPress={nextLevel} />
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
  setActive: (active: boolean) => void;
}
