import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useSound } from "../../audios/useSound";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import buttonSound from "../stage1/button.mp3";
import { ButtonBox } from "../stage1/ButtonBox";
import { usePressed } from "../stage1/usePressed";
import { useNear } from "./useNear";

export function NearButton({ position, onPress }: Props) {
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

  const near = useNear(ref, size * 3, size * 3, !pressed);

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
