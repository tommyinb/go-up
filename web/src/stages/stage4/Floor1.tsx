import { Coin } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";
import { Floor9Ring } from "./Floor9Ring";

export function Floor1({ index, active }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[-3, 0, 0]} onPress={nextLevel} />

      <Coin position={[0, 0, 2]} />
      <Coin position={[2, 0, 0]} />
      <Coin position={[2, 0, 2]} />

      {active && <Floor9Ring />}
    </Floor>
  );
}

interface Props {
  index: number;

  active: boolean;
}
