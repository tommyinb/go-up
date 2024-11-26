import { PropsWithChildren } from "react";
import { ScoreContext } from "./ScoreContext";
import { Score } from "./score";
import { useStorage } from "./useStorage";

export function ScoreProvider({ children }: PropsWithChildren) {
  const [scores, setScores] = useStorage<Score[]>(
    "scores-ScoreProvider-scores-1",
    []
  );

  return (
    <ScoreContext.Provider value={{ scores, setScores }}>
      {children}
    </ScoreContext.Provider>
  );
}
