import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { CoinBox } from "./CoinBox";
import { FloorContext } from "./FloorContext";
import { usePressed } from "./usePressed";
import { useSetScore } from "./useSetScore";

export function Coin({ position }: Props) {
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

  const { visiting } = useContext(FloorContext);

  return (
    <CoinBox
      boxRef={ref}
      position={position}
      opacity={visiting ? 1 : 0.6}
      pressed={pressed}
    />
  );
}

interface Props {
  position: Vector3;
}
