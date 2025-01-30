import { Vector3 } from "@react-three/fiber";
import { useCallback, useMemo, useState } from "react";
import { PressedButton } from "../stage1/PressedButton";
import { Floor2QuestionButton } from "./Floor2QuestionButton";

export function Floor2Question({
  targetText,
  buttonPosition,
  buttonAdvance,
}: Props) {
  const [answers, setAnswers] = useState<string[]>([]);
  const answerText = useMemo(() => [...answers].sort().join(""), [answers]);

  const reset = useCallback(() => setAnswers([]), []);

  return (
    <>
      {Array.from({ length: 3 }).flatMap((_, i) =>
        Array.from({ length: 3 }).map((_, j) => (
          <Floor2QuestionButton
            key={`${i}-${j}`}
            position={[(i - 1) * 2, 0, (j - 1) * 2]}
            value={`(${i},${j})`}
            answers={answers}
            setAnswers={setAnswers}
          />
        ))
      )}

      {answerText === targetText && (
        <PressedButton position={buttonPosition} onPress={buttonAdvance} />
      )}

      {answers.length >= 3 && answerText !== targetText && (
        <PressedButton position={[4, 0, 0]} onPress={reset} />
      )}
    </>
  );
}

interface Props {
  targetText: string;

  buttonPosition: Vector3;
  buttonAdvance: () => void;
}
