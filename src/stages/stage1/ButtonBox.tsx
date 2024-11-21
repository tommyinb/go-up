import { Vector3 } from "@react-three/fiber";
import { RefObject } from "react";
import { Group } from "three";

export function ButtonBox({ boxRef, width, depth, position, pressed }: Props) {
  return (
    <group ref={boxRef} position={position}>
      <mesh position={[0, pressed ? 0.005 : 0.15, 0]}>
        <boxGeometry args={[width, pressed ? 0.01 : 0.3, depth]} />
        <meshStandardMaterial color={pressed ? "#eee" : "#c00"} />
      </mesh>
    </group>
  );
}

interface Props {
  boxRef: RefObject<Group>;

  width: number;
  depth: number;
  position: Vector3;

  pressed: boolean;
}
