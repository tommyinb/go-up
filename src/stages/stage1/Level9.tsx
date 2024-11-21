import { useCallback, useEffect, useState } from "react";
import { CountDownButton } from "./CountDownButton";
import { Floor } from "./Floor";

export function Level9({ next }: Props) {
  const [active, setActive] = useState(false);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  useEffect(() => {
    if (count >= 8) {
      next();
    }
  }, [count, next]);

  return (
    <Floor width={10} depth={10}>
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
  next: () => void;
}
