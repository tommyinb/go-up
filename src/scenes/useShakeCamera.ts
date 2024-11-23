import { useCallback, useContext } from "react";
import { SceneContext } from "./SceneContext";

export function useShakeCamera() {
  const { setCameraShake } = useContext(SceneContext);

  return useCallback(
    () => setCameraShake((shake) => shake + 1),
    [setCameraShake]
  );
}
