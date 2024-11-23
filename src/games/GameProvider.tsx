import { PropsWithChildren, useRef, useState } from "react";
import { Group } from "three";
import { Computer } from "./computer";
import { Floor } from "./floor";
import { GameContext } from "./GameContext";
import { Player } from "./player";
import { Round } from "./round";
import { Score } from "./score";

export function GameProvider({ children }: PropsWithChildren) {
  const [round, setRound] = useState<Round>({ index: 0, time: 30 });

  const playerRef = useRef<Group>(null);
  const [player, setPlayer] = useState<Player>({ ref: playerRef, inputs: [] });

  const [computers, setComputers] = useState<Computer[]>([]);

  const [score, setScore] = useState<Score>({ level: 0, coin: 0, prize: 0 });

  const [floors, setFloors] = useState<Floor[]>([]);

  return (
    <GameContext.Provider
      value={{
        round,
        setRound,
        player,
        setPlayer,
        computers,
        setComputers,
        score,
        setScore,
        floors,
        setFloors,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
