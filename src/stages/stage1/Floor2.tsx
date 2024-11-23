import { useCallback, useEffect, useState } from "react";
import { Coin } from "./Coin";
import { Floor } from "./Floor";
import { PressedButton } from "./PressedButton";
import { useNextLevel } from "./useNextLevel";

export function Floor2({ index, active }: Props) {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);

  const nextLevel = useNextLevel(index);
  useEffect(() => {
    if (pressed1 && pressed2) {
      nextLevel();
    }
  }, [nextLevel, pressed1, pressed2]);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton
        width={1.1}
        depth={1.1}
        position={[0, 0, -3]}
        onPress={useCallback(() => setPressed1(true), [])}
      />

      <Coin position={[3, 0, 0]} />

      <PressedButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 3]}
        onPress={useCallback(() => setPressed2(true), [])}
      />

      {active && <Coin position={[-3, 0, 0]} />}
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
}
