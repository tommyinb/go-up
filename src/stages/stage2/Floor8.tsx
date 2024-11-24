import { useCallback, useState } from "react";
import { Coin } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { NearButton } from "./NearButton";

export function Floor8({ index }: Props) {
  const nextLevel = useNextLevel(index);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton
        position={[0, 0, 0]}
        onPress={useCallback(() => {
          nextLevel();

          addCount();
        }, [addCount, nextLevel])}
      />

      <NearButton position={[-6, 0, -3]} onPress={addCount} />

      <NearButton position={[6, 0, 3]} onPress={addCount} />

      <NearButton position={[-3, 0, -6]} onPress={addCount} />

      <NearButton position={[3, 0, 6]} onPress={addCount} />

      {count >= 5 && <Coin position={[0, 0, 0]} />}
    </Floor>
  );
}

interface Props {
  index: number;
}
