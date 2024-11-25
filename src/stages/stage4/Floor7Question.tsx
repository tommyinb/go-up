import { useEffect, useMemo, useState } from "react";
import { Floor7QuestionButton } from "./Floor7QuestionButton";

export function Floor7Question({ targetText, complete }: Props) {
  const [answers, setAnswers] = useState<string[]>([]);
  const answerText = useMemo(() => [...answers].sort().join(""), [answers]);

  useEffect(() => {
    if (answerText === targetText) {
      complete();
    }
  }, [answerText, complete, targetText]);

  return (
    <>
      {Array.from({ length: 3 }).flatMap((_, i) =>
        Array.from({ length: 3 }).map((_, j) => (
          <Floor7QuestionButton
            key={`${i}-${j}`}
            position={[(i - 1) * 2, 0, (j - 1) * 2]}
            value={`(${i},${j})`}
            answers={answers}
            setAnswers={setAnswers}
          />
        ))
      )}
    </>
  );
}

interface Props {
  targetText: string;

  complete: () => void;
}
