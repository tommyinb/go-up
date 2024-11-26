import { useCallback, useContext } from "react";
import { MenuContext } from "../menus/MenuContext";
import { StageScore } from "../menus/stageScore";

export function useSetScore() {
  const { setStages, selected } = useContext(MenuContext);

  return useCallback(
    (score: StageScore) =>
      setStages((stages) =>
        stages.map((stage) =>
          stage.index === selected ? { ...stage, score } : stage
        )
      ),
    [selected, setStages]
  );
}
