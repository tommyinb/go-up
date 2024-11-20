import {
  createContext,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";

export const SceneContext = createContext<{
  clickHandlers: MouseEventHandler<HTMLDivElement>[];
  setClickHandlers: Dispatch<
    SetStateAction<MouseEventHandler<HTMLDivElement>[]>
  >;
}>({
  clickHandlers: [],
  setClickHandlers: () => {},
});
