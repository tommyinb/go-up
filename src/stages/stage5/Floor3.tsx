import { useCallback, useEffect, useState } from "react";
import { Coin } from "../stage1/Coin";
import { CountButton } from "../stage1/CountButton";
import { Floor } from "../stage1/Floor";
import { useNextLevel } from "../stage1/useNextLevel";
import { NearButton } from "../stage2/NearButton";

export function Floor3({ index, complete }: Props) {
  const [count1, setCount1] = useState(0);
  const addCount1 = useCallback(() => setCount1((count) => count + 1), []);

  const [count2, setCount2] = useState(0);
  const addCount2 = useCallback(() => setCount2((count) => count + 1), []);

  useEffect(() => {
    if (count2 >= 12) {
      complete();
    }
  }, [complete, count2]);

  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <NearButton position={[-2, 0, -2]} onPress={addCount1} />
      <NearButton position={[-2, 0, 2]} onPress={addCount1} />
      <NearButton position={[2, 0, -2]} onPress={addCount1} />
      <NearButton position={[2, 0, 2]} onPress={addCount1} />

      {count1 >= 4 && (
        <>
          <CountButton position={[0, 0, 0]} count={10} onComplete={nextLevel} />

          <Coin position={[0, 0, -2]} />
          <Coin position={[0, 0, 2]} />
          <Coin position={[-2, 0, 0]} />
          <Coin position={[2, 0, 0]} />

          <NearButton position={[-4, 0, -4]} onPress={addCount2} />
          <NearButton position={[-4, 0, -2]} onPress={addCount2} />
          <NearButton position={[-2, 0, -4]} onPress={addCount2} />

          <NearButton position={[-4, 0, 4]} onPress={addCount2} />
          <NearButton position={[-4, 0, 2]} onPress={addCount2} />
          <NearButton position={[-2, 0, 4]} onPress={addCount2} />

          <NearButton position={[4, 0, -4]} onPress={addCount2} />
          <NearButton position={[4, 0, -2]} onPress={addCount2} />
          <NearButton position={[2, 0, -4]} onPress={addCount2} />

          <NearButton position={[4, 0, 4]} onPress={addCount2} />
          <NearButton position={[4, 0, 2]} onPress={addCount2} />
          <NearButton position={[2, 0, 4]} onPress={addCount2} />
        </>
      )}

      {count2 >= 12 && (
        <>
          <Coin position={[0, 0, -4]} />
          <Coin position={[0, 0, 4]} />
          <Coin position={[-4, 0, 0]} />
          <Coin position={[4, 0, 0]} />
        </>
      )}
    </Floor>
  );
}

interface Props {
  index: number;

  complete: () => void;
}
