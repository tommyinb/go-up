import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { GameContext } from "../../games/GameContext";
import { FloorContext } from "./FloorContext";
import { useOnePressed } from "./useOnePressed";

export function Prize({ position }: Props) {
  const ref = useRef<Group>(null);
  const pressed = useOnePressed(ref, 0.3, 0.3);

  const { setScore } = useContext(GameContext);
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
