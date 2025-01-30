import { useCallback, useState } from "react";
import { Coin } from "../stage1/Coin";
import { CountButton } from "../stage1/CountButton";
import { Floor } from "../stage1/Floor";
import { useNextLevel } from "../stage1/useNextLevel";
import { MovingButton } from "./MovingButton";

export function Floor8({ index, active }: Props) {
  const nextLevel = useNextLevel(index);

  const [count, setCount] = useState(0);
  const addCount = useCallback(() => setCount((count) => count + 1), []);

  return (
    <Floor index={index} width={10} depth={10}>
      <Coin position={[-4, 0, 0]} />
      <Coin position={[4, 0, 0]} />

      {active && (
        <>
          <Coin position={[-3, 0, 0]} />
          <Coin position={[3, 0, 0]} />

          <MovingButton
            left={[-4, 0, -4]}
            right={[4, 0, -4]}
            duration={5}
            onPress={addCount}
          />

          <MovingButton
            left={[-4, 0, -2]}
            right={[4, 0, -2]}
            duration={4}
            onPress={addCount}
          />

          <MovingButton
            left={[-4, 0, 2]}
            right={[4, 0, 2]}
            duration={3}
            onPress={addCount}
          />

          <MovingButton
            left={[-4, 0, 4]}
            right={[4, 0, 4]}
            duration={2}
            onPress={addCount}
          />
        </>
      )}

      {count >= 4 && (
        <>
          <Coin position={[-2, 0, 0]} />
          <Coin position={[2, 0, 0]} />

          <CountButton position={[0, 0, 0]} count={5} onComplete={nextLevel} />
        </>
      )}
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
}
