import { RefObject } from "react";
import { Group, Mesh } from "three";
import { CharacterInput } from "./characterInput";
import { CharacterType } from "./characterType";

export interface Character {
  id: string;

  type: CharacterType;

  groupRef: RefObject<Group>;
  meshRef: RefObject<Mesh>;

  inputs: CharacterInput[];
}
