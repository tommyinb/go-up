import { Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { Button } from "./Button";
import { useOnePressed } from "./useOnePressed";

export function OnePressButton({ width, depth, position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const pressed = useOnePressed(ref, width, depth);

  useEffect(() => {
    if (pressed) {
      onPress();
    }
  }, [onPress, pressed]);

  return (
    <Button
      boxRef={ref}
      width={width}
      depth={depth}
      position={position}
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
