import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useSound } from "../../audios/useSound";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import coinSound from "./coin.mp3";
import { CoinBox } from "./CoinBox";
import { usePressed } from "./usePressed";
import { useSetScore } from "./useSetScore";

export function Coin({ position }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, 0.3, 0.3);

  const setScore = useSetScore();

  const shakeCamera = useShakeCamera(CameraShakeSize.Small);
  const soundPick = useSound(coinSound);

  useEffect(() => {
    if (pressed) {
      setScore((score) => ({ ...score, coin: score.coin + 1 }));

      shakeCamera();
      soundPick();
    }
  }, [pressed, setScore, shakeCamera, soundPick]);

  return <CoinBox boxRef={ref} position={position} pressed={pressed} />;
}

interface Props {
  position: Vector3;
}
