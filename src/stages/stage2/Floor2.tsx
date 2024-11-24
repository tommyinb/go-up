import { useCallback, useEffect, useState } from "react";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor2({ index }: Props) {
  const nextLevel = useNextLevel(index);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  useEffect(() => {
    if (count >= 25) {
      nextLevel();
    }
  }, [count, nextLevel]);

  return (
    <Floor index={index} width={10} depth={10}>
      {Array.from({ length: 5 }).flatMap((_, i) =>
        Array.from({ length: 5 }).map((_, j) => (
          <PressedButton
            key={`${i}, ${j}`}
            position={[(i - 2) * 1.5, 0, (j - 2) * 1.5]}
            onPress={addCount}
          />
        ))
      )}
    </Floor>
  );
}

interface Props {
  index: number;
}
