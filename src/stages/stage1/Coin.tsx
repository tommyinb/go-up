import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { Group } from "three";
import { FloorContext } from "./FloorContext";
import { usePressing } from "./usePressing";

export function Coin({ position }: Props) {
  const [pressed, setPressed] = useState(false);

  const ref = useRef<Group>(null);
  const pressing = usePressing(ref, 0.3, 0.3);
  useEffect(() => {
    if (pressing) {
      setPressed(true);
    }
  }, [pressing]);

  const { visited } = useContext(FloorContext);

  return (
    <group ref={ref} position={position}>
      {!pressed && (
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />

          <meshStandardMaterial
            color="#cc0"
            transparent={!visited}
            opacity={visited ? 1 : 0.6}
          />
        </mesh>
      )}
    </group>
  );
}

interface Props {
  position: Vector3;
}
