import { useCallback } from "react";
import { Floor } from "./Floor";
import { OnePressButton } from "./OnePressButton";

export function Floor1({ index, setLevel }: Props) {
  return (
    <Floor index={index} width={10} depth={10}>
      <OnePressButton
        width={1.1}
        depth={1.1}
        position={[0, 0, 3]}
        onPress={useCallback(() => setLevel(index + 1), [index, setLevel])}
      />
    </Floor>
  );
}

interface Props {
  index: number;

  setLevel: (index: number) => void;
}
