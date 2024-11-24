import { Coin } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor1({ index }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[4, 0, 4]} onPress={nextLevel} />

      <Coin position={[3, 0, 0]} />
    </Floor>
  );
}

interface Props {
  index: number;
}
