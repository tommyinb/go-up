import { PropsWithChildren, useState } from "react";
import { Character } from "./character";
import { Floor } from "./floor";
import { GameContext } from "./GameContext";

export function GameProvider({ children }: PropsWithChildren) {
  const [roundTime, setRoundTime] = useState(0);

  const [characters, setCharacters] = useState<Character[]>([]);
  const [floors, setFloors] = useState<Floor[]>([]);

  return (
    <GameContext.Provider
      value={{
        roundTime,
        setRoundTime,
        characters,
        setCharacters,
        floors,
        setFloors,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
