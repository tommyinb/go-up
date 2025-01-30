import { RefObject } from "react";
import { Group } from "three";
import { PlayerInput } from "./playerInput";

export interface Computer {
  id: number;

  ref: RefObject<Group> | undefined;

  inputs: PlayerInput[];
}
