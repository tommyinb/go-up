import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "../stage1/ButtonBox";
import { usePressed } from "../stage1/usePressed";
import { useNear } from "./useNear";

export function NearButton({ position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const size = 1.1;
  const pressed = usePressed(ref, size, size);

  const shakeCamera = useShakeCamera();
  useEffect(() => {
    if (pressed) {
      onPress();

      shakeCamera();
    }
  }, [onPress, pressed, shakeCamera]);

  const near = useNear(ref, size * 3, size * 3, !pressed);

  return (
    <ButtonBox
      boxRef={ref}
      width={size}
      depth={size}
      position={position}
      opacity={pressed || near ? 1 : 0}
      pressed={pressed}
    />
  );
}

interface Props {
  position: Vector3;

  onPress: () => void;
}
