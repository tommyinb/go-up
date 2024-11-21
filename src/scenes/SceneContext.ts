import {
  createContext,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { Vector3 } from "three";

export const SceneContext = createContext<{
  cameraTarget: Vector3;
  setCameraTarget: Dispatch<SetStateAction<Vector3>>;

  clickHandlers: MouseEventHandler<HTMLDivElement>[];
  setClickHandlers: Dispatch<
    SetStateAction<MouseEventHandler<HTMLDivElement>[]>
  >;
}>({
  cameraTarget: new Vector3(),
  setCameraTarget: () => {},

  clickHandlers: [],
  setClickHandlers: () => {},
});
