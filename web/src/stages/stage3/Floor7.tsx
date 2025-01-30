import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Floor6Part } from "./Floor6Part";

export function Floor7({ index, active, setActive }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[-4, 0, -4]} onPress={nextLevel} />

      <Floor6Part active={active} setActive={setActive} />
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
  setActive: (active: boolean) => void;
}
