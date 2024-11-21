import { RefObject } from "react";
import { Group } from "three";

export interface Character {
  id: string;

  ref: RefObject<Group>;
}
