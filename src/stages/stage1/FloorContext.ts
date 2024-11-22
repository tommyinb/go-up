import { createContext } from "react";

export const FloorContext = createContext<{
  visited: boolean;
}>({
  visited: false,
});
