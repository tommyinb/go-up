import { useCallback, useContext } from "react";
import { MenuContext } from "../../menus/MenuContext";

export function useNextLevel(from: number) {
  const { setStages, selected } = useContext(MenuContext);

  return useCallback(() => {
    setStages((stages) =>
      stages.map((stage) =>
        stage.index === selected && stage.score.level <= from
          ? { ...stage, score: { ...stage.score, level: from + 1 } }
          : stage
      )
    );
  }, [from, selected, setStages]);
}
