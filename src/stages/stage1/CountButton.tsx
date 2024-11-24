import { useFrame, Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { Group } from "three";
import { useShakeCamera } from "../../scenes/useShakeCamera";
import { ButtonBox } from "./ButtonBox";
import { FloorContext } from "./FloorContext";
import { useGetPressers } from "./useGetPressers";

export function CountButton({
  width,
  depth,
  position,
  count: targetCount,
  onComplete,
}: Props) {
  const [pressing, setPressing] = useState(false);

  const buttonRef = useRef<Group>(null);
  const getPressers = useGetPressers(buttonRef, width, depth);
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

  const shakeCamera = useShakeCamera();
  useEffect(() => {
    if (pressedCount > 0 && pressedCount <= targetCount) {
      shakeCamera();
    }
  }, [pressedCount, shakeCamera, targetCount]);

  const completed = pressedCount >= targetCount;
  useEffect(() => {
    if (completed) {
      onComplete();
    }
  }, [completed, onComplete]);

  const { visiting } = useContext(FloorContext);

  return (
    <ButtonBox
      boxRef={buttonRef}
      width={width}
      depth={depth}
      position={position}
      opacity={visiting ? 1 : 0.6}
      pressed={pressing || pressedCount >= targetCount}
    />
  );
}

interface Props {
  width: number;
  depth: number;
  position: Vector3;

  count: number;
  onComplete: () => void;
}