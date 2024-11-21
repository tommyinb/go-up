import { RefObject } from "react";
import { Group } from "three";

export interface Floor {
  width: number;
  depth: number;

  ref: RefObject<Group>;
}
