import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Floor9Ring } from "./Floor9Ring";

export function Floor9({ index, active }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[0, 0, 0]} onPress={nextLevel} />

      {active && <Floor9Ring />}
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
}
