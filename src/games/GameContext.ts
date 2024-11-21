import { createContext, Dispatch, SetStateAction } from "react";
import { Character } from "./character";
import { Floor } from "./floor";

export const GameContext = createContext<{
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;

  floors: Floor[];
  setFloors: Dispatch<SetStateAction<Floor[]>>;
}>({
  characters: [],
  setCharacters: () => {},

  floors: [],
  setFloors: () => {},
});
