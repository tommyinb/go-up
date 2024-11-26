import { RefObject } from "react";
import { Group, Mesh } from "three";

export interface Floor {
  groupRef: RefObject<Group>;
  meshRef: RefObject<Mesh>;

  width: number;
  depth: number;
}
