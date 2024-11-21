import { Floor } from "./Floor";
import { Prize } from "./Prize";

export function Level10({ complete }: Props) {
  return (
    <Floor width={10} depth={10}>
      <Prize position={[0, 0, 0]} complete={complete} />
    </Floor>
  );
}

interface Props {
  complete: () => void;
}
