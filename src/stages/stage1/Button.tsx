import { Vector3 } from "@react-three/fiber";
import { RefObject, useContext } from "react";
import { Group } from "three";
import { FloorContext } from "./FloorContext";

export function Button({ boxRef, width, depth, position, pressed }: Props) {
  const { visiting } = useContext(FloorContext);

  return (
    <group ref={boxRef} position={position}>
      <mesh position={[0, pressed ? 0.005 : 0.15, 0]}>
        <boxGeometry args={[width, pressed ? 0.01 : 0.3, depth]} />

        <meshStandardMaterial
          color={pressed ? "#eee" : "#c00"}
          transparent={!visiting}
          opacity={visiting ? 1 : 0.6}
        />
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
