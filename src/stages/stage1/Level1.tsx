import { Floor } from "./Floor";
import { OnePressButton } from "./OnePressButton";

export function Level1({ next }: Props) {
  return (
    <Floor width={10} depth={10}>
      <OnePressButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 3]}
        onPress={next}
      />
    </Floor>
  );
}

interface Props {
  next: () => void;
}
