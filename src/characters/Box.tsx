import { RefObject } from "react";
import { Group } from "three";

export function Box({ characterRef, opacity, onClick }: Props) {
  return (
    <group ref={characterRef}>
      <mesh position={[0, 0.5, 0]} onClick={onClick}>
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial
          color="#444444"
          transparent={true}
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

interface Props {
  characterRef: RefObject<Group>;

  opacity: number;

  onClick: () => void;
}
