import { useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { useSound } from "../../audios/useSound";
import { DebugContext } from "../../debugs/DebugContext";
import { useNode } from "../../players/useNode";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { Confetti } from "./Confetti";
import prizeFile from "./prize.glb";
import prizeSound from "./prize.mp3";
import { usePressed } from "./usePressed";
import { useSetScore } from "./useSetScore";

export function Prize({ position }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, 0.3, 0.3);

  const setScore = useSetScore();

  const shakeCamera = useShakeCamera(CameraShakeSize.Large);
  const soundPick = useSound(prizeSound);

  useEffect(() => {
    if (pressed) {
      setScore((score) => ({ ...score, prize: score.prize + 1 }));

      shakeCamera();
      soundPick();
    }
  }, [pressed, setScore, shakeCamera, soundPick]);

  const prizeGltf = useGLTF(prizeFile);
  const prizeDiamond = useNode(prizeGltf, "diamond");

  const { debug } = useContext(DebugContext);

  return (
    <group ref={ref} position={position}>
      {!pressed && (
        <>
          <primitive object={prizeDiamond} />

          <mesh position={[0, 0.35, 0]} visible={debug}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />

            <meshStandardMaterial color="#0ff" wireframe={true} />
          </mesh>
        </>
      )}

      <Confetti active={pressed} />
    </group>
  );
}

interface Props {
  position: Vector3;
}
