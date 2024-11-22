import { Vector3 } from "three";
import { CharacterInputType } from "./characterInputType";

export interface CharacterInput {
  time: number;

  type: CharacterInputType;

  target: Vector3;
}
