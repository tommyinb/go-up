import { PropsWithChildren, useState } from "react";
import { Character } from "./character";
import { GameContext } from "./GameContext";
import { Ground } from "./ground";

export function GameProvider({ children }: PropsWithChildren) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [grounds, setGrounds] = useState<Ground[]>([]);

  return (
    <GameContext.Provider
      value={{
        characters,
        setCharacters,
        grounds,
        setGrounds,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
