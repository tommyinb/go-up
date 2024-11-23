import { useCallback } from "react";
import { Floor } from "./Floor";
import { Prize } from "./Prize";

export function Floor10({ index }: Props) {
  return (
    <Floor index={index} width={10} depth={10}>
      <Prize position={[0, 0, 0]} complete={useCallback(() => {}, [])} />
    </Floor>
  );
}

interface Props {
  index: number;
}
