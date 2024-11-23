import { useCallback, useEffect, useState } from "react";
import { CountButton } from "./CountButton";
import { Floor } from "./Floor";
import { useNextLevel } from "./useNextLevel";

export function Floor9({ index }: Props) {
  const [active, setActive] = useState(false);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  const nextLevel = useNextLevel(index);
  useEffect(() => {
    if (count >= 8) {
      nextLevel();
    }
  }, [count, nextLevel]);

  return (
    <Floor index={index} width={10} depth={10}>
      <CountButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 0]}
        count={30}
        onComplete={useCallback(() => setActive(true), [])}
      />

      {active && (
        <>
          <CountButton
            width={1.1}
            depth={1.1}
            position={[-3, 0, -3]}
            count={15}
            onComplete={addCount}
          />

          <CountButton
            width={1.1}
            depth={1.1}
            position={[0, 0, -3]}
            count={15}
            onComplete={addCount}
          />

          <CountButton
            width={1.1}
            depth={1.1}
            position={[3, 0, -3]}
            count={15}
            onComplete={addCount}
          />

          <CountButton
            width={1.1}
            depth={1.1}
            position={[-3, 0, 0]}
            count={15}
            onComplete={addCount}
          />

          <CountButton
            width={1.1}
            depth={1.1}
            position={[3, 0, 0]}
            count={15}
            onComplete={addCount}
          />

          <CountButton
            width={1.1}
            depth={1.1}
            position={[-3, 0, 3]}
            count={15}
            onComplete={addCount}
          />

          <CountButton
            width={1.1}
            depth={1.1}
            position={[0, 0, 3]}
            count={15}
            onComplete={addCount}
          />

          <CountButton
            width={1.1}
            depth={1.1}
            position={[3, 0, 3]}
            count={15}
            onComplete={addCount}
          />
        </>
      )}
    </Floor>
  );
}

interface Props {
  index: number;
}
