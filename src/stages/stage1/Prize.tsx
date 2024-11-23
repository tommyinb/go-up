import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { FloorContext } from "./FloorContext";
import { usePressed } from "./usePressed";
import { useSetScore } from "./useSetScore";

export function Prize({ position }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, 0.3, 0.3);

  const setScore = useSetScore();
  useEffect(() => {
    if (pressed) {
      setScore((score) => ({ ...score, prize: score.prize + 1 }));
    }
  }, [pressed, setScore]);

  const { visiting } = useContext(FloorContext);

  return (
    <group ref={ref} position={position}>
      {!pressed && (
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />

          <meshStandardMaterial
            color="#0ff"
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
