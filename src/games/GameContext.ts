import { createContext, Dispatch, SetStateAction } from "react";
import { Character } from "./character";
import { Ground } from "./ground";

export const GameContext = createContext<{
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;

  grounds: Ground[];
  setGrounds: Dispatch<SetStateAction<Ground[]>>;
}>({
  characters: [],
  setCharacters: () => {},

  grounds: [],
  setGrounds: () => {},
});
