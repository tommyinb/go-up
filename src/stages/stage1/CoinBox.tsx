import { Vector3 } from "@react-three/fiber";
import { RefObject } from "react";
import { Group } from "three";

export function CoinBox({ boxRef, position, opacity, pressed }: Props) {
  return (
    <group ref={boxRef} position={position}>
      {!pressed && (
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />

          <meshStandardMaterial
            color="#cc0"
            transparent={opacity < 1}
            opacity={opacity}
          />
        </mesh>
      )}
    </group>
  );
}

interface Props {
  boxRef: RefObject<Group>;

  position: Vector3;

  opacity: number;

  pressed: boolean;
}
