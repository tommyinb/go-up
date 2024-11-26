import { useThree } from "@react-three/fiber";
import { useCallback, useContext } from "react";
import { SceneContext } from "./SceneContext";
import { CameraShakeSize } from "./cameraShakeSize";

export function useShakeCamera(size: CameraShakeSize) {
  const { setCameraShakes } = useContext(SceneContext);
  const { clock } = useThree();

  return useCallback(
    () =>
      setCameraShakes((shakes) => [
        ...shakes,
        {
          size,
          time: clock.getElapsedTime(),
        },
      ]),
    [clock, setCameraShakes, size]
  );
}
