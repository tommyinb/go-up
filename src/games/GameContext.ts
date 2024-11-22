import { createContext, Dispatch, SetStateAction } from "react";
import { Floor } from "./floor";
import { Player } from "./player";

export const GameContext = createContext<{
  roundTime: number;
  setRoundTime: Dispatch<SetStateAction<number>>;

  player: Player;
  setPlayer: Dispatch<SetStateAction<Player>>;

  floors: Floor[];
  setFloors: Dispatch<SetStateAction<Floor[]>>;
}>({
  roundTime: 0,
  setRoundTime: () => {},

  player: {
    ref: { current: null },
    inputs: [],
  },
  setPlayer: () => {},

  floors: [],
  setFloors: () => {},
});
