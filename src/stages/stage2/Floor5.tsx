import { useCallback, useState } from "react";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Coin } from "./Coin";

export function Floor5({ index }: Props) {
  const nextLevel = useNextLevel(index);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  return (
    <Floor index={index} width={10} depth={10}>
      {Array.from({ length: 5 }).flatMap((_, i) =>
        Array.from({ length: 5 }).map((_, j) => (
          <Coin
            key={`${i}-${j}`}
            position={[(i - 2) * 2, 0, (j - 2) * 2]}
            onPress={addCount}
          />
        ))
      )}

      {count >= 25 && (
        <PressedButton
          width={1.1}
          depth={1.1}
          position={[0, 0, 0]}
          onPress={nextLevel}
        />
      )}
    </Floor>
  );
}

interface Props {
  index: number;
}
