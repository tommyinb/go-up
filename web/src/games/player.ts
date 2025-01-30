import { RefObject } from "react";
import { Group } from "three";
import { PlayerInput } from "./playerInput";

export interface Player {
  ref: RefObject<Group> | undefined;

  inputs: PlayerInput[];
}
