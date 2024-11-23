import { useFrame, Vector3 } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import { Button } from "./Button";
import { useGetPressers } from "./useGetPressers";

export function CountDownButton({
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

  const completed = pressedCount >= targetCount;
  useEffect(() => {
    if (completed) {
      onComplete();
    }
  }, [completed, onComplete]);

  return (
    <Button
      boxRef={buttonRef}
      width={width}
      depth={depth}
      position={position}
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
