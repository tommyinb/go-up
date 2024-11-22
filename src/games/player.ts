import { RefObject } from "react";
import { Group } from "three";
import { CharacterInput } from "./playerInput";

export interface Player {
  ref: RefObject<Group>;

  inputs: CharacterInput[];
}
