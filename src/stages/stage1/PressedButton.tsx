import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useSound } from "../../audios/useSound";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import buttonSound from "./button.mp3";
import { ButtonBox } from "./ButtonBox";
import { usePressed } from "./usePressed";

export function PressedButton({ position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const size = 1.1;
  const pressed = usePressed(ref, size, size);

  const shakeCamera = useShakeCamera(CameraShakeSize.Small);
  const soundPress = useSound(buttonSound);
  useEffect(() => {
    if (pressed) {
      onPress();

      shakeCamera();
      soundPress();
    }
  }, [onPress, pressed, shakeCamera, soundPress]);

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
