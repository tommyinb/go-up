import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { Vector3 } from "three";
import { SceneContext } from "./SceneContext";

export function SceneProvider({ children }: PropsWithChildren) {
  const [cameraTarget, setCameraTarget] = useState(new Vector3());

  const [cameraShake, setCameraShake] = useState(0);

  const [clickHandlers, setClickHandlers] = useState<
    MouseEventHandler<HTMLDivElement>[]
  >([]);

  return (
    <SceneContext.Provider
      value={{
        cameraTarget,
        setCameraTarget,
        cameraShake,
        setCameraShake,
        clickHandlers,
        setClickHandlers,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}
