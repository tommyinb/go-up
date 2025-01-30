import { Coin } from "./Coin";
import { Floor } from "./Floor";
import { Prize } from "./Prize";

export function Floor10({ index }: Props) {
  return (
    <Floor index={index} width={10} depth={10}>
      <Coin position={[-3, 0, 0]} />
      <Coin position={[3, 0, 0]} />
      <Coin position={[0, 0, -3]} />
      <Coin position={[0, 0, 3]} />

      <Prize position={[0, 0, 0]} />
    </Floor>
  );
}

interface Props {
  index: number;
}
