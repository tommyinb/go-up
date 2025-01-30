import { PropsWithChildren, useEffect, useState } from "react";
import { DebugContext } from "./DebugContext";

export function DebugProvider({ children }: PropsWithChildren) {
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    Object.assign(window, { setDebug });

    return () => {
      Object.assign(window, { setDebug: undefined });
    };
  }, []);

  return (
    <DebugContext.Provider value={{ debug, setDebug }}>
      {children}
    </DebugContext.Provider>
  );
}
