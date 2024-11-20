import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { SceneContext } from "./SceneContext";

export function SceneProvider({ children }: PropsWithChildren) {
  const [clickHandlers, setClickHandlers] = useState<
    MouseEventHandler<HTMLDivElement>[]
  >([]);

  return (
    <SceneContext.Provider value={{ clickHandlers, setClickHandlers }}>
      {children}
    </SceneContext.Provider>
  );
}
