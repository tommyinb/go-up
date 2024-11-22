import { PropsWithChildren, useRef, useState } from "react";
import { Group } from "three";
import { Floor } from "./floor";
import { GameContext } from "./GameContext";
import { Player } from "./player";

export function GameProvider({ children }: PropsWithChildren) {
  const [roundTime, setRoundTime] = useState(0);

  const playerRef = useRef<Group>(null);
  const [player, setPlayer] = useState<Player>({ ref: playerRef, inputs: [] });

  const [floors, setFloors] = useState<Floor[]>([]);

  return (
    <GameContext.Provider
      value={{
        roundTime,
        setRoundTime,
        player,
        setPlayer,
        floors,
        setFloors,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
