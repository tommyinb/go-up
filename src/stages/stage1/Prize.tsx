import { useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { DebugContext } from "../../debugs/DebugContext";
import { useNode } from "../../players/useNode";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import prizeFile from "./prize.glb";
import { PrizeConfetti } from "./PrizeConfetti";
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

  const prizeGltf = useGLTF(prizeFile);
  const prizeDiamond = useNode(prizeGltf, "diamond");

  const { debug } = useContext(DebugContext);

  return (
    <group ref={ref} position={position}>
      {pressed ? (
        <PrizeConfetti />
      ) : (
        <>
          <primitive object={prizeDiamond} />

          <mesh position={[0, 0.35, 0]} visible={debug}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />

            <meshStandardMaterial color="#0ff" wireframe={true} />
          </mesh>
        </>
      )}
    </group>
  );
}

interface Props {
  position: Vector3;
}
