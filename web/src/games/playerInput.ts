import { Vector3 } from "three";
import { PlayerInputType } from "./playerInputType";

export interface PlayerInput {
  time: number;

  type: PlayerInputType;

  target: Vector3;
}
