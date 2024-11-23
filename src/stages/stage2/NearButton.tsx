import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "../stage1/ButtonBox";
import { usePressed } from "../stage1/usePressed";
import { useNear } from "./useNear";

export function NearButton({ width, depth, position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, width, depth);

  const shakeCamera = useShakeCamera();
  useEffect(() => {
    if (pressed) {
      onPress();

      shakeCamera();
    }
  }, [onPress, pressed, shakeCamera]);

  const near = useNear(ref, width * 3, depth * 3, !pressed);

  return (
    <ButtonBox
      boxRef={ref}
      width={width}
      depth={depth}
      position={position}
      opacity={pressed || near ? 1 : 0}
      pressed={pressed}
    />
  );
}

interface Props {
  width: number;
  depth: number;
  position: Vector3;

  onPress: () => void;
}
