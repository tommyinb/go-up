import { Vector3 } from "@react-three/fiber";
import { useCallback, useState } from "react";
import {} from "three";
import { Button } from "./Button";

export function OnePressButton({ width, depth, position, onPress }: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <Button
      width={width}
      depth={depth}
      position={position}
      pressed={pressed}
      setPressing={useCallback(
        (pressing) => {
          if (pressing) {
            setPressed(true);

            onPress();
          }
        },
        [onPress]
      )}
    />
  );
}

interface Props {
  width: number;
  depth: number;
  position: Vector3;

  onPress: () => void;
}
