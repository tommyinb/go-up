import { Floor } from "../stage1/Floor";
import { useNextLevel } from "../stage1/useNextLevel";
import { Floor2Question } from "./Floor2Question";

export function Floor3({ index }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <Floor2Question
        targetText="(0,1)(0,2)(1,2)"
        buttonPosition={[-4, 0, 4]}
        buttonAdvance={nextLevel}
      />
    </Floor>
  );
}

interface Props {
  index: number;
}
