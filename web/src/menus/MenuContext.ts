import { createContext, Dispatch, SetStateAction } from "react";
import { Mode } from "./mode";
import { Stage } from "./stage";

export const MenuContext = createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;

  run: number;
  setRun: Dispatch<SetStateAction<number>>;

  stages: Stage[];
  setStages: Dispatch<SetStateAction<Stage[]>>;

  selected: number;
  setSelected: (selected: number) => void;
}>({
  mode: Mode.Game,
  setMode: () => {},

  run: 0,
  setRun: () => {},

  stages: [],
  setStages: () => {},

  selected: 0,
  setSelected: () => {},
});
