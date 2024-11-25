import { Coin } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor4({ index }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[2, 0, 4]} onPress={nextLevel} />

      <Coin position={[3, 0, 1]} />
      <Coin position={[-2, 0, -4]} />
    </Floor>
  );
}

interface Props {
  index: number;
}
