import { useFrame, Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "../stage1/ButtonBox";
import { useGetPressers } from "../stage1/useGetPressers";
import { useSoundPressing } from "../stage1/useSoundPressing";

export function PressingButton({
  position,
  pressing,
  setPressing,
  disabled,
}: Props) {
  const buttonRef = useRef<Group>(null);
  const size = 1.1;
  const getPressers = useGetPressers(buttonRef, size, size);
  useFrame(() => {
    const currentPressers = getPressers();
    setPressing(currentPressers.length > 0);
  });

  const shakeCamera = useShakeCamera(CameraShakeSize.Small);
  useEffect(() => {
    if (pressing) {
      shakeCamera();
    }
  }, [pressing, shakeCamera]);

  const soundPress = useSoundPressing();
  const soundCount = useRef(0);
  useEffect(() => {
    if (pressing) {
      soundPress(++soundCount.current);
    }
  }, [pressing, soundPress]);

  return (
    <ButtonBox
      boxRef={buttonRef}
      width={size}
      depth={size}
      position={position}
      color={disabled ? "#eee" : pressing ? "#c44" : "#c00"}
      visible={true}
      pressed={pressing || disabled}
    />
  );
}

interface Props {
  position: Vector3;
  pressing: boolean;
  setPressing: (pressing: boolean) => void;
  disabled: boolean;
}
