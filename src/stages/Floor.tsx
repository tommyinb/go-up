import { Outlines } from "@react-three/drei";
import { PropsWithChildren } from "react";
import { Vector3 } from "three";
import { useGround } from "../games/useGround";

export function Floor({ width, depth, position, children }: Props) {
  useGround(width, depth, position);

  return (
    <group position={position}>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color="#ffffff" />

        <Outlines color="#888888" thickness={2} />
      </mesh>

      {children}
    </group>
  );
}

interface Props extends PropsWithChildren {
  width: number;
  depth: number;

  position: Vector3;
}
