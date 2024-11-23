import { createContext } from "react";

export const FloorContext = createContext<{
  visiting: boolean;
}>({
  visiting: false,
});
