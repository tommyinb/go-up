import { Text } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { DebugContext } from "../../debugs/DebugContext";
import { PressingButton } from "../stage2/PressingButton";

export function Floor2QuestionButton({
  position,
  value,
  answers,
  setAnswers,
}: Props) {
  const { debug } = useContext(DebugContext);

  return (
    <>
      <PressingButton
        position={position}
        pressing={useMemo(() => answers.includes(value), [answers, value])}
        setPressing={useCallback(
          (pressing) => {
            if (pressing) {
              setAnswers((answers) =>
                answers.includes(value) ? answers : [...answers, value]
              );
            }
          },
          [setAnswers, value]
        )}
        disabled={false}
      />

      {debug && (
        <group position={position}>
          <Text
            color="#ccc"
            position={[0, 0.5, 0]}
            scale={[0.3, 0.3, 0.3]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            {value}
          </Text>
        </group>
      )}
    </>
  );
}

interface Props {
  position: Vector3;

  value: string;

  answers: string[];
  setAnswers: Dispatch<SetStateAction<string[]>>;
}
