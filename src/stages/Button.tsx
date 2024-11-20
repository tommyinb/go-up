import { useEffect } from "react";
import { Vector3 } from "three";
import { ButtonBox } from "./ButtonBox";
import { usePressing } from "./usePressing";

export function Button({
  width,
  depth,
  position,
  pressed,
  setPressing,
}: Props) {
  const pressing = usePressing(width, depth, position);

  useEffect(() => setPressing(pressing), [pressing, setPressing]);

  return (
    <ButtonBox
      width={width}
      depth={depth}
      position={position}
      pressed={pressed}
    />
  );
}

interface Props {
  width: number;
  depth: number;
  position: Vector3;

  pressed: boolean;
  setPressing: (pressing: boolean) => void;
}
