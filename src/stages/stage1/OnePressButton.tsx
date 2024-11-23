import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Group } from "three";
import { SceneContext } from "../../scenes/SceneContext";
import { Button } from "./Button";
import { useOnePressed } from "./useOnePressed";

export function OnePressButton({ width, depth, position, onPress }: Props) {
  const ref = useRef<Group>(null);
  const pressed = useOnePressed(ref, width, depth);

  const { setCameraShake } = useContext(SceneContext);

  useEffect(() => {
    if (pressed) {
      onPress();

      setCameraShake((shake) => shake + 1);
    }
  }, [onPress, pressed, setCameraShake]);

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
