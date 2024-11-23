import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "./ButtonBox";
import { FloorContext } from "./FloorContext";
import { usePressed } from "./usePressed";

export function PressedButton({ width, depth, position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const pressed = usePressed(ref, width, depth);

  const shakeCamera = useShakeCamera();
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
      width={width}
      depth={depth}
      position={position}
      opacity={visiting ? 1 : 0.6}
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
