import { useCallback, useEffect, useState } from "react";
import { Coin as Coin1 } from "../stage1/Coin";
import { CountButton } from "../stage1/CountButton";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor2({ index, complete }: Props) {
  const nextLevel = useNextLevel(index);

  const [active1, setActive1] = useState(false);

  const start = useCallback(() => {
    nextLevel();

    setActive1(true);
  }, [nextLevel]);

  const [count2, setCount2] = useState(0);
  const addCount2 = () => setCount2(count2 + 1);

  const [active3, setActive3] = useState(false);
  const activate3 = useCallback(() => setActive3(true), []);

  useEffect(() => {
    if (active3) {
      complete();
    }
  }, [active3, complete]);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[0, 0, -3]} onPress={start} />

      {active1 && !active3 && (
        <>
          <CountButton
            position={[-3, 0, 0]}
            count={10}
            onComplete={addCount2}
          />

          <CountButton position={[3, 0, 0]} count={10} onComplete={addCount2} />

          <CountButton position={[0, 0, 3]} count={10} onComplete={addCount2} />
        </>
      )}

      {count2 >= 3 && (
        <CountButton position={[0, 0, 0]} count={10} onComplete={activate3} />
      )}

      {active3 && (
        <>
          <Coin1 position={[-3, 0, 0]} />
          <Coin1 position={[3, 0, 0]} />
          <Coin1 position={[0, 0, -3]} />
        </>
      )}
    </Floor>
  );
}

interface Props {
  index: number;

  complete: () => void;
}
