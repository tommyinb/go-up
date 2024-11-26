import { CoinRing } from "./CoinRing";
import { Floor } from "./Floor";
import { PressedButton } from "./PressedButton";
import { useNextLevel } from "./useNextLevel";

export function Floor5({ index }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <PressedButton position={[0, 0, 0]} onPress={nextLevel} />

      <CoinRing width={5} depth={5} />
    </Floor>
  );
}

interface Props {
  index: number;
}