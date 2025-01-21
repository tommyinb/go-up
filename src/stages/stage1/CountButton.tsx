import { useFrame, Vector3 } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import { CameraShakeSize } from "../../scenes/cameraShakeSize";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "./ButtonBox";
import { useGetPressers } from "./useGetPressers";
import { usePressingButtonSound } from "./usePressingButtonSound";

export function CountButton({
  position,
  count: targetCount,
  onComplete,
}: Props) {
  const [pressing, setPressing] = useState(false);

  const buttonRef = useRef<Group>(null);
  const size = 1.1;
  const getPressers = useGetPressers(buttonRef, size, size);
  const pressersRef = useRef(new Set<number>());
  useFrame(() => {
    const currentPressers = getPressers();
    setPressing(currentPressers.length > 0);

    for (const presser of currentPressers) {
      if (!pressersRef.current.has(presser)) {
        setPressedDown((down) => down + 1);
      }
    }

    pressersRef.current = new Set(currentPressers);
  });

  const [pressedCount, setPressedDown] = useState(0);

  const shakeCamera = useShakeCamera(CameraShakeSize.Small);
  useEffect(() => {
    if (pressedCount > 0 && pressedCount <= targetCount) {
      shakeCamera();
    }
  }, [pressedCount, shakeCamera, targetCount]);

  usePressingButtonSound(pressing && pressedCount <= targetCount);

  const completed = pressedCount >= targetCount;
  useEffect(() => {
    if (completed) {
      onComplete();
    }
  }, [completed, onComplete]);

  return (
    <ButtonBox
      boxRef={buttonRef}
      width={size}
      depth={size}
      position={position}
      color={pressedCount >= targetCount ? "#eee" : pressing ? "#c44" : "#c00"}
      visible={true}
      pressed={pressing || pressedCount >= targetCount}
    />
  );
}

interface Props {
  position: Vector3;

  count: number;
  onComplete: () => void;
}
