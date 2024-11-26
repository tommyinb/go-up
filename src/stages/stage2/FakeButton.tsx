import { Vector3 } from "@react-three/fiber";
import { useContext } from "react";
import { ButtonBox } from "../stage1/ButtonBox";
import { FloorContext } from "../stage1/FloorContext";

export function FakeButton({ position }: Props) {
  const { visiting } = useContext(FloorContext);

  const size = 1.1;

  return (
    <ButtonBox
      width={size}
      depth={size}
      position={position}
      color="#c00"
      opacity={visiting ? 1 : 0.6}
      pressed={false}
    />
  );
}

interface Props {
  position: Vector3;
}
