import { useCallback, useContext } from "react";
import { Score } from "../../games/score";
import { MenuContext } from "../../menus/MenuContext";

export function useSetScore() {
  const { setStages, selected } = useContext(MenuContext);

  return useCallback(
    (change: (score: Score) => Score) =>
      setStages((stages) =>
        stages.map((stage) =>
          stage.index === selected
            ? { ...stage, score: change(stage.score) }
            : stage
        )
      ),
    [selected, setStages]
  );
}
