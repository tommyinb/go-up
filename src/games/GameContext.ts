import { createContext, Dispatch, SetStateAction } from "react";
import { Computer } from "./computer";
import { Floor } from "./floor";
import { Player } from "./player";
import { Round } from "./round";
import { Score } from "./score";

export const GameContext = createContext<{
  round: Round;
  setRound: Dispatch<SetStateAction<Round>>;

  player: Player;
  setPlayer: Dispatch<SetStateAction<Player>>;

  computers: Computer[];
  setComputers: Dispatch<SetStateAction<Computer[]>>;

  score: Score;
  setScore: Dispatch<SetStateAction<Score>>;

  floors: Floor[];
  setFloors: Dispatch<SetStateAction<Floor[]>>;
}>({
  round: { index: 0, time: 0 },
  setRound: () => {},

  player: { ref: undefined, inputs: [] },
  setPlayer: () => {},

  computers: [],
  setComputers: () => {},

  score: { level: 0, coin: 0 },
  setScore: () => {},

  floors: [],
  setFloors: () => {},
});
