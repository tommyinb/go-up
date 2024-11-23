import { Vector3 } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { Group } from "three";
import { FloorContext } from "./FloorContext";
import { useOnePressed } from "./useOnePressed";

export function Coin({ position }: Props) {
  const ref = useRef<Group>(null);
  const pressed = useOnePressed(ref, 0.3, 0.3);

  const { visiting } = useContext(FloorContext);

  return (
    <group ref={ref} position={position}>
      {!pressed && (
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />

          <meshStandardMaterial
            color="#cc0"
            transparent={!visiting}
            opacity={visiting ? 1 : 0.6}
          />
        </mesh>
      )}
    </group>
  );
}

interface Props {
  position: Vector3;
}
