import { useCallback, useState } from "react";
import { CoinRing } from "../stage1/CoinRing";
import { CountButton } from "../stage1/CountButton";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Coin } from "../stage2/Coin";

export function Floor5({ index }: Props) {
  const [active1, setActive1] = useState(false);

  const [count2, setCount2] = useState(0);
  const addCount2 = useCallback(() => setCount2((count) => count + 1), []);

  const [active3, setActive3] = useState(false);
  const activate3 = useCallback(() => setActive3(true), []);

  const [active4, setActive4] = useState(false);
  const activate4 = useCallback(() => setActive4(true), []);

  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton
        position={[-2, 0, -4]}
        onPress={useCallback(() => setActive1(true), [])}
      />

      <Coin position={[2, 0, 4]} onPress={addCount2} />

      {active1 && (
        <>
          <PressedButton position={[-1, 0, 4]} onPress={activate3} />

          <Coin position={[-3, 0, 1]} onPress={addCount2} />
        </>
      )}

      {active3 && (
        <>
          <CountButton position={[-4, 0, 1]} count={5} onComplete={activate4} />

          <Coin position={[-3, 0, -1]} onPress={addCount2} />
        </>
      )}

      {active4 && (
        <>
          <CountButton position={[4, 0, -3]} count={5} onComplete={nextLevel} />

          <Coin position={[0, 0, 0]} onPress={addCount2} />
        </>
      )}

      {count2 >= 4 && <CoinRing width={4} depth={4} />}
    </Floor>
  );
}

interface Props {
  index: number;
}
