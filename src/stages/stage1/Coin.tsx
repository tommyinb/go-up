import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";
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

  return (
    <group ref={ref} position={position}>
      {!pressed && (
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#cc0" />
        </mesh>
      )}
    </group>
  );
}

interface Props {
  position: Vector3;
}
