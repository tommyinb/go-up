import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { Vector3 } from "three";
import { SceneContext } from "./SceneContext";
import { CameraShake } from "./cameraShake";

export function SceneProvider({ children }: PropsWithChildren) {
  const [cameraTarget, setCameraTarget] = useState(new Vector3());
  const [cameraDistance, setCameraDistance] = useState(new Vector3(2, 4, 6));

  const [cameraShakes, setCameraShakes] = useState<CameraShake[]>([]);

  const [clickHandlers, setClickHandlers] = useState<
    MouseEventHandler<HTMLDivElement>[]
  >([]);

  return (
    <SceneContext.Provider
      value={{
        cameraTarget,
        setCameraTarget,
        cameraDistance,
        setCameraDistance,
        cameraShakes,
        setCameraShakes,
        clickHandlers,
        setClickHandlers,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}
