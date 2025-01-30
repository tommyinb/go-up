import { Coin } from "../stage1/Coin";
import { CountButton } from "../stage1/CountButton";
import { Floor } from "../stage1/Floor";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor3({ index, active }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <CountButton position={[0, 0, 0]} count={10} onComplete={nextLevel} />

      {active && <Coin position={[0, 0, 3]} />}
    </Floor>
  );
}

interface Props {
  index: number;
  active: boolean;
}
