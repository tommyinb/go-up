import { Vector3 } from "@react-three/fiber";
import { useCallback, useEffect, useState } from "react";
import {} from "three";
import { Button } from "./Button";

export function CountDownButton({
  width,
  depth,
  position,
  count: targetCount,
  onComplete,
}: Props) {
  const [pressing, setPressing] = useState(false);

  const [countDown, setCountDown] = useState(0);
  useEffect(() => {
    if (countDown >= targetCount) {
      onComplete();
    }
  }, [countDown, onComplete, targetCount]);

  return (
    <Button
      width={width}
      depth={depth}
      position={position}
      pressed={pressing || countDown >= targetCount}
      setPressing={useCallback(
        (pressing) => {
          setPressing(pressing);

          if (pressing) {
            setCountDown((countDown) => Math.min(countDown + 1, targetCount));
          }
        },
        [targetCount]
      )}
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
