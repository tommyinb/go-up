import { Dispatch, SetStateAction, useCallback } from "react";
import { Coin } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor7({ index, answer, setAnswer }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton
        width={1.1}
        depth={1.1}
        position={[-3, 0, -3]}
        onPress={useCallback(
          () => setAnswer((answer) => answer + "A"),
          [setAnswer]
        )}
      />

      <PressedButton
        width={1.1}
        depth={1.1}
        position={[-3, 0, 3]}
        onPress={useCallback(
          () => setAnswer((answer) => answer + "B"),
          [setAnswer]
        )}
      />

      <PressedButton
        width={1.1}
        depth={1.1}
        position={[3, 0, -3]}
        onPress={useCallback(
          () => setAnswer((answer) => answer + "C"),
          [setAnswer]
        )}
      />

      <PressedButton
        width={1.1}
        depth={1.1}
        position={[3, 0, 3]}
        onPress={useCallback(
          () => setAnswer((answer) => answer + "D"),
          [setAnswer]
        )}
      />

      {answer.length >= 4 && (
        <PressedButton
          width={1.1}
          depth={1.1}
          position={[0, 0, 0]}
          onPress={nextLevel}
        />
      )}

      {answer.includes("AB") && (
        <>
          <Coin position={[-3, 0, 0]} />
          <Coin position={[3, 0, 0]} />
        </>
      )}

      {answer.includes("CD") && (
        <>
          <Coin position={[0, 0, -3]} />
          <Coin position={[0, 0, 3]} />
        </>
      )}
    </Floor>
  );
}

interface Props {
  index: number;

  answer: string;
  setAnswer: Dispatch<SetStateAction<string>>;
}
