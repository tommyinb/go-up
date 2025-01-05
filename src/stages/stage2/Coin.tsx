import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { CoinBox } from "../stage1/CoinBox";
import { usePressed } from "../stage1/usePressed";
import { useSetScore } from "../stage1/useSetScore";

export function Coin({ position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, 0.3, 0.3);

  const setScore = useSetScore();
  const shakeCamera = useShakeCamera(CameraShakeSize.Small);
  useEffect(() => {
    if (pressed) {
      setScore((score) => ({ ...score, coin: score.coin + 1 }));

      shakeCamera();
    }
  }, [pressed, setScore, shakeCamera]);

  useEffect(() => {
    if (pressed) {
      onPress();
    }
  }, [onPress, pressed]);

  return <CoinBox boxRef={ref} position={position} pressed={pressed} />;
}

interface Props {
  position: Vector3;

  onPress: () => void;
}
