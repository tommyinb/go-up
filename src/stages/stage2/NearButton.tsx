import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "../stage1/ButtonBox";
import { usePressed } from "../stage1/usePressed";
import { usePressedButtonSound } from "../stage1/usePressedButtonSound";
import { useNear } from "./useNear";

export function NearButton({ position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const size = 1.1;
  const pressed = usePressed(ref, size, size);

  const shakeCamera = useShakeCamera(CameraShakeSize.Small);
  useEffect(() => {
    if (pressed) {
      onPress();

      shakeCamera();
    }
  }, [onPress, pressed, shakeCamera]);

  const near = useNear(ref, size * 3, size * 3, !pressed);

  usePressedButtonSound(pressed);

  return (
    <ButtonBox
      boxRef={ref}
      width={size}
      depth={size}
      position={position}
      color={pressed ? "#eee" : "#c00"}
      visible={pressed || near}
      pressed={pressed}
    />
  );
}

interface Props {
  position: Vector3;

  onPress: () => void;
}
