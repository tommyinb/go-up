import { useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import { Group } from "three";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useGetPressers } from "../stage1/useGetPressers";
import { useNextLevel } from "../stage1/useNextLevel";
import { FakeButton } from "./FakeButton";

export function Floor9({ index }: Props) {
  const refA = useRef<Group>(null);
  const getPressersA = useGetPressers(refA, 3, 3);
  const [presserA, setPresserA] = useState<number>();

  const refB = useRef<Group>(null);
  const getPressersB = useGetPressers(refB, 3, 3);
  const [presserB, setPresserB] = useState<number>();

  const refC = useRef<Group>(null);
  const getPressersC = useGetPressers(refC, 3, 3);
  const [presserC, setPresserC] = useState<number>();

  const refD = useRef<Group>(null);
  const getPressersD = useGetPressers(refD, 3, 3);
  const [presserD, setPresserD] = useState<number>();

  const active =
    presserA !== undefined &&
    presserB !== undefined &&
    presserC !== undefined &&
    presserD !== undefined;

  const [answer, setAnswer] = useState<"A" | "B" | "C" | "D">();

  useFrame(() => {
    if (answer) {
      return;
    }

    const pressersA = getPressersA();
    setPresserA(pressersA.length > 0 ? Math.min(...pressersA) : undefined);

    const pressersB = getPressersB();
    setPresserB(pressersB.length > 0 ? Math.min(...pressersB) : undefined);

    const pressersC = getPressersC();
    setPresserC(pressersC.length > 0 ? Math.min(...pressersC) : undefined);

    const pressersD = getPressersD();
    setPresserD(pressersD.length > 0 ? Math.min(...pressersD) : undefined);
  });

  const nextLevel = useNextLevel(index);

  const answerA = useCallback(() => {
    setAnswer("A");
    nextLevel();
  }, [nextLevel]);

  const nextB = useCallback(() => {
    setAnswer("B");
    nextLevel();
  }, [nextLevel]);

  const nextC = useCallback(() => {
    setAnswer("C");
    nextLevel();
  }, [nextLevel]);

  const nextD = useCallback(() => {
    setAnswer("D");
    nextLevel();
  }, [nextLevel]);

  return (
    <Floor index={index} width={10} depth={10}>
      <group ref={refA} position={[-2, 0, -2]}>
        {((active && presserA === 0) || answer === "A") && (
          <PressedButton
            width={1.1}
            depth={1.1}
            position={[0, 0, 0]}
            onPress={answerA}
          />
        )}

        {presserA === undefined && (
          <FakeButton width={1.1} depth={1.1} position={[0, 0, 0]} />
        )}
      </group>

      <group ref={refB} position={[-2, 0, 2]}>
        {((active && presserB === 0) || answer === "B") && (
          <PressedButton
            width={1.1}
            depth={1.1}
            position={[0, 0, 0]}
            onPress={nextB}
          />
        )}

        {presserA !== undefined && presserB === undefined && (
          <FakeButton width={1.1} depth={1.1} position={[0, 0, 0]} />
        )}
      </group>

      <group ref={refC} position={[2, 0, -2]}>
        {((active && presserC === 0) || answer === "C") && (
          <PressedButton
            width={1.1}
            depth={1.1}
            position={[0, 0, 0]}
            onPress={nextC}
          />
        )}

        {presserA !== undefined &&
          presserB !== undefined &&
          presserC === undefined && (
            <FakeButton width={1.1} depth={1.1} position={[0, 0, 0]} />
          )}
      </group>

      <group ref={refD} position={[2, 0, 2]}>
        {((active && presserD === 0) || answer === "D") && (
          <PressedButton
            width={1.1}
            depth={1.1}
            position={[0, 0, 0]}
            onPress={nextD}
          />
        )}

        {presserA !== undefined &&
          presserB !== undefined &&
          presserC !== undefined &&
          presserD === undefined && (
            <FakeButton width={1.1} depth={1.1} position={[0, 0, 0]} />
          )}
      </group>
    </Floor>
  );
}

interface Props {
  index: number;
}
