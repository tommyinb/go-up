import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { ButtonBox } from "./ButtonBox";
import { usePressing } from "./usePressing";

export function Button({
  width,
  depth,
  position,
  pressed,
  setPressing,
}: Props) {
  const boxRef = useRef<Group>(null);
  const pressing = usePressing(boxRef, width, depth);

  useEffect(() => setPressing(pressing), [pressing, setPressing]);

  return (
    <ButtonBox
      boxRef={boxRef}
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
