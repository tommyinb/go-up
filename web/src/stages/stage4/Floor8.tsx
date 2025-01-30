import { useCallback, useEffect, useState } from "react";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Coin } from "../stage2/Coin";

export function Floor8({ index, complete }: Props) {
  const nextLevel = useNextLevel(index);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  useEffect(() => {
    if (count >= 3) {
      complete();
    }
  }, [complete, count]);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[0, 0, 0]} onPress={nextLevel} />

      <Coin position={[0, 0, -3]} onPress={addCount} />
      <Coin position={[-3, 0, 3]} onPress={addCount} />
      <Coin position={[3, 0, 3]} onPress={addCount} />
    </Floor>
  );
}

interface Props {
  index: number;

  complete: () => void;
}
