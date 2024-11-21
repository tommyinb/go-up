import { RefObject } from "react";
import { Group, Vector3 } from "three";

export function ButtonBox({ boxRef, width, depth, position, pressed }: Props) {
  return (
    <group ref={boxRef} position={position}>
      <mesh position={[0, pressed ? -0.14 : 0.15, 0]}>
        <boxGeometry args={[width, 0.3, depth]} />
        <meshStandardMaterial color="#eeeeee" />
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
