import { Vector3 } from "three";
import { CharacterInputType } from "./playerInputType";

export interface CharacterInput {
  time: number;

  type: CharacterInputType;

  target: Vector3;
}
