import { Vector3 } from "three";

export function ButtonBox({ width, depth, position, pressed }: Props) {
  return (
    <group position={position}>
      <mesh position={[0, pressed ? -0.14 : 0.15, 0]}>
        <boxGeometry args={[width, 0.3, depth]} />
        <meshStandardMaterial color="#FFF4B7" />
      </mesh>
    </group>
  );
}

interface Props {
  width: number;
  depth: number;
  position: Vector3;

  pressed: boolean;
}
