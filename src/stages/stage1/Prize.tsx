import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import { usePressing } from "./usePressing";

export function Prize({ position, complete }: Props) {
  const ref = useRef<Group>(null);
  const pressing = usePressing(ref, 0.3, 0.3);
  useEffect(() => {
    if (pressing) {
      setPressed(true);
    }
  }, [pressing]);

  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    if (pressed) {
      complete();
    }
  }, [complete, pressed]);

  return (
    <group ref={ref} position={position}>
      {!pressed && (
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color="#0ff" />
        </mesh>
      )}
    </group>
  );
}

interface Props {
  position: Vector3;
  complete: () => void;
}
