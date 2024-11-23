import { useCallback, useContext } from "react";
import { Score } from "../games/score";
import { MenuContext } from "../menus/MenuContext";

export function useSetScore() {
  const { setStages, selected } = useContext(MenuContext);

  return useCallback(
    (score: Score) =>
      setStages((stages) =>
        stages.map((stage) =>
          stage.index === selected ? { ...stage, score } : stage
        )
      ),
    [selected, setStages]
  );
}
