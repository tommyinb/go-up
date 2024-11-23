import { useCallback, useEffect, useState } from "react";
import { CountDownButton } from "./CountDownButton";
import { Floor } from "./Floor";

export function Floor9({ index, setLevel }: Props) {
  const [active, setActive] = useState(false);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  useEffect(() => {
    if (count >= 8) {
      setLevel(index + 1);
    }
  }, [count, index, setLevel]);

  return (
    <Floor index={index} width={10} depth={10}>
      <CountDownButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 0]}
        count={30}
        onComplete={useCallback(() => setActive(true), [])}
      />

      {active && (
        <>
          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[-3, 0, -3]}
            count={30}
            onComplete={addCount}
          />

          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[0, 0, -3]}
            count={30}
            onComplete={addCount}
          />

          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[3, 0, -3]}
            count={30}
            onComplete={addCount}
          />

          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[-3, 0, 0]}
            count={30}
            onComplete={addCount}
          />

          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[3, 0, 0]}
            count={30}
            onComplete={addCount}
          />

          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[-3, 0, 3]}
            count={30}
            onComplete={addCount}
          />

          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[0, 0, 3]}
            count={30}
            onComplete={addCount}
          />

          <CountDownButton
            width={1.1}
            depth={1.1}
            position={[3, 0, 3]}
            count={30}
            onComplete={addCount}
          />
        </>
      )}
    </Floor>
  );
}

interface Props {
  index: number;

  setLevel: (index: number) => void;
}
