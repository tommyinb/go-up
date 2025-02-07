import {
  createContext,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { Vector3 } from "three";
import { CameraShake } from "./cameraShake";

export const SceneContext = createContext<{
  cameraTarget: Vector3;
  setCameraTarget: Dispatch<SetStateAction<Vector3>>;

  cameraDistance: Vector3;
  setCameraDistance: Dispatch<SetStateAction<Vector3>>;

  cameraShakes: CameraShake[];
  setCameraShakes: Dispatch<SetStateAction<CameraShake[]>>;

  clickHandlers: MouseEventHandler<HTMLDivElement>[];
  setClickHandlers: Dispatch<
    SetStateAction<MouseEventHandler<HTMLDivElement>[]>
  >;
}>({
  cameraTarget: new Vector3(),
  setCameraTarget: () => {},

  cameraDistance: new Vector3(),
  setCameraDistance: () => {},

  cameraShakes: [],
  setCameraShakes: () => {},

  clickHandlers: [],
  setClickHandlers: () => {},
});
