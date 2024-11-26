import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { FloorContext } from "./FloorContext";
import { PrizeConfettiBox } from "./PrizeConfettiBox";
import { PrizeConfettiRing } from "./PrizeConfettiRing";
import { usePressed } from "./usePressed";
import { useSetScore } from "./useSetScore";

export function Prize({ position }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, 0.3, 0.3);

  const setScore = useSetScore();
  const shakeCamera = useShakeCamera(CameraShakeSize.Large);
  useEffect(() => {
    if (pressed) {
      setScore((score) => ({ ...score, prize: score.prize + 1 }));

      shakeCamera();
    }
  }, [pressed, setScore, shakeCamera]);

  const { visiting } = useContext(FloorContext);

  return (
    <group ref={ref} position={position}>
      {pressed ? (
        <>
          <PrizeConfettiBox
            count={300}
            boxSize={[1, 1, 1]}
            maxVelocity={[3, 2, 3]}
          />

          <PrizeConfettiRing
            count={300}
            ringWidth={2}
            ringHeight={1}
            velocity={8}
          />
        </>
      ) : (
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
