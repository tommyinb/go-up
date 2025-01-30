import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Floor2Part } from "./Floor2Part";

export function Floor2({ index, active, setActive }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[4, 0, -4]} onPress={nextLevel} />

      <Floor2Part active={active} setActive={setActive} />
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
  setActive: (active: boolean) => void;
}
