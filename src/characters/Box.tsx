import { Vector3 } from "three";

export function Box({ position, opacity }: Props) {
  console.log("Box", opacity);

  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial
          color="#D91656"
          transparent={true}
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

interface Props {
  position: Vector3;
  opacity: number;
}
