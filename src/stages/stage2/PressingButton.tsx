import { useFrame, Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "../stage1/ButtonBox";
import { FloorContext } from "../stage1/FloorContext";
import { useGetPressers } from "../stage1/useGetPressers";

export function PressingButton({
  width,
  depth,
  position,
  pressing,
  setPressing,
}: Props) {
  const buttonRef = useRef<Group>(null);
  const getPressers = useGetPressers(buttonRef, width, depth);
  useFrame(() => {
    const currentPressers = getPressers();
    setPressing(currentPressers.length > 0);
  });

  const shakeCamera = useShakeCamera();
  useEffect(() => {
    if (pressing) {
      shakeCamera();
    }
  }, [pressing, shakeCamera]);

  const { visiting } = useContext(FloorContext);

  return (
    <ButtonBox
      boxRef={buttonRef}
      width={width}
      depth={depth}
      position={position}
      opacity={visiting ? 1 : 0.6}
      pressed={pressing}
    />
  );
}

interface Props {
  width: number;
  depth: number;
  position: Vector3;
  pressing: boolean;
  setPressing: (pressing: boolean) => void;
}
