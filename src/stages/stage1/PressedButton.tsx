import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "./ButtonBox";
import { usePressed } from "./usePressed";
import { usePressedButtonSound } from "./usePressedButtonSound";

export function PressedButton({ position, onPress }: Props) {
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

  usePressedButtonSound(pressed);

  return (
    <ButtonBox
      boxRef={ref}
      width={size}
      depth={size}
      position={position}
      color={pressed ? "#eee" : "#c00"}
      visible={true}
      pressed={pressed}
    />
  );
}

interface Props {
  position: Vector3;

  onPress: () => void;
}
