import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "./ButtonBox";
import { FloorContext } from "./FloorContext";
import { usePressed } from "./usePressed";

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

  const { visiting } = useContext(FloorContext);

  return (
    <ButtonBox
      boxRef={ref}
      width={size}
      depth={size}
      position={position}
      opacity={visiting ? 1 : 0.6}
      pressed={pressed}
    />
  );
}

interface Props {
  position: Vector3;

  onPress: () => void;
}
