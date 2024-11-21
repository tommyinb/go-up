import { createContext, Dispatch, SetStateAction } from "react";
import { Character } from "./character";
import { Floor } from "./floor";

export const GameContext = createContext<{
  roundTime: number;
  setRoundTime: Dispatch<SetStateAction<number>>;

  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;

  floors: Floor[];
  setFloors: Dispatch<SetStateAction<Floor[]>>;
}>({
  roundTime: 0,
  setRoundTime: () => {},

  characters: [],
  setCharacters: () => {},

  floors: [],
  setFloors: () => {},
});
