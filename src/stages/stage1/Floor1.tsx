import { Floor } from "./Floor";
import { PressedButton } from "./PressedButton";
import { useNextLevel } from "./useNextLevel";

export function Floor1({ index }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[0, 0, 3]} onPress={nextLevel} />
    </Floor>
  );
}

interface Props {
  index: number;
}
