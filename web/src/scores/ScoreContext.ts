import { createContext, Dispatch, SetStateAction } from "react";
import { Score } from "./score";

export const ScoreContext = createContext<{
  scores: Score[];
  setScores: Dispatch<SetStateAction<Score[]>>;
}>({
  scores: [],
  setScores: () => {},
});
