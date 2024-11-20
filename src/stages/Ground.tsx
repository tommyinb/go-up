import { Outlines } from "@react-three/drei";
import { Vector3 } from "three";
import { useGround } from "../games/useGround";

export function Ground({ width, depth, position }: Props) {
  useGround(width, depth, position);

  return (
    <group position={position}>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color="#DCCFBC" />

        <Outlines />
      </mesh>
    </group>
  );
}

interface Props {
  width: number;
  depth: number;

  position: Vector3;
}
