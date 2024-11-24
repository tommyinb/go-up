import { useCallback, useState } from "react";
import { Floor } from "../stage1/Floor";
import { useNextLevel } from "../stage1/useNextLevel";
import { Coin } from "../stage2/Coin";
import { Floor2Question } from "./Floor2Question";

export function Floor4({ index }: Props) {
  const [active, setActive] = useState(false);
  const activate = useCallback(() => setActive(true), []);

  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      {!active && <Coin position={[-4, 0, 4]} onPress={activate} />}

      {active && (
        <Floor2Question
          targetText="(0,0)(0,1)(1,0)"
          buttonPosition={[-4, 0, -4]}
          buttonAdvance={nextLevel}
        />
      )}
    </Floor>
  );
}

interface Props {
  index: number;
}
