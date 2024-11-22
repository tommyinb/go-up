import { RefObject } from "react";
import { Group, Mesh } from "three";

export interface Floor {
  width: number;
  depth: number;

  groupRef: RefObject<Group>;
  meshRef: RefObject<Mesh>;
}
