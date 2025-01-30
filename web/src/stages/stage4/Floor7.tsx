import { useCallback, useState } from "react";
import { Coin as Coin1 } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Coin as Coin2 } from "../stage2/Coin";
import { Floor7Question } from "./Floor7Question";

export function Floor7({ index }: Props) {
  const [completed1, setCompleted1] = useState(false);
  const complete1 = useCallback(() => setCompleted1(true), []);

  const [completed2, setCompleted2] = useState(false);
  const complete2 = useCallback(() => setCompleted2(true), []);

  const [count3, setCount3] = useState(0);
  const addCount3 = useCallback(() => setCount3((count) => count + 1), []);

  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      {!completed1 && (
        <Floor7Question targetText="(0,0)(1,1)(2,2)" complete={complete1} />
      )}

      {completed1 && !completed2 && (
        <>
          <Coin1 position={[-4, 0, 0]} />
          <Coin1 position={[4, 0, 0]} />
          <Coin1 position={[0, 0, -4]} />
          <Coin1 position={[0, 0, 4]} />

          <Floor7Question targetText="(0,2)(1,1)(2,0)" complete={complete2} />
        </>
      )}

      {completed2 && (
        <>
          <Coin2 position={[-4, 0, 0]} onPress={addCount3} />
          <Coin2 position={[4, 0, 0]} onPress={addCount3} />
          <Coin2 position={[0, 0, -4]} onPress={addCount3} />
          <Coin2 position={[0, 0, 4]} onPress={addCount3} />
        </>
      )}

      {count3 >= 4 && (
        <PressedButton position={[0, 0, 0]} onPress={nextLevel} />
      )}
    </Floor>
  );
}

interface Props {
  index: number;
}
