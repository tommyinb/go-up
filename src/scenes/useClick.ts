import { MouseEventHandler, useContext, useEffect } from "react";
import { SceneContext } from "./SceneContext";

export function useClick(handler: MouseEventHandler) {
  const { setClickHandlers } = useContext(SceneContext);

  useEffect(() => {
    setClickHandlers((handlers) => [...handlers, handler]);

    return () =>
      setClickHandlers((handlers) =>
        handlers.filter((currentHandler) => currentHandler !== handler)
      );
  }, [handler, setClickHandlers]);
}
