import { Vector3 } from "@react-three/fiber";
import { useContext } from "react";
import { ButtonBox } from "../stage1/ButtonBox";
import { FloorContext } from "../stage1/FloorContext";

export function FakeButton({ width, depth, position }: Props) {
  const { visiting } = useContext(FloorContext);

  return (
    <ButtonBox
      width={width}
      depth={depth}
      position={position}
      opacity={visiting ? 1 : 0.6}
      pressed={false}
    />
  );
}

interface Props {
  width: number;
  depth: number;
  position: Vector3;
}
