import { createContext } from "react";

export const DebugContext = createContext<{
  debug: boolean;
  setDebug: (debug: boolean) => void;
}>({
  debug: false,
  setDebug: () => {},
});
