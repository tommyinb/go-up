import { useContext, useEffect } from "react";
import { useStage } from "../forms/useStage";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import "./SuccessTime.css";

export function SuccessTime() {
  const stage = useStage();

  const { setStages, selected } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  useEffect(() => {
    if (!stage) {
      return;
    }

    if (stage.score.prize < stage.config.prize) {
      return;
    }

    if (stage.score.time !== undefined) {
      return;
    }

    setStages((stages) =>
      stages.map((stage) =>
        stage.index === selected && stage.score.time === undefined
          ? {
              ...stage,
              score: {
                ...stage.score,
                time:
                  round.index * stage.config.time +
                  (stage.config.time - round.time),
              },
            }
          : stage
      )
    );
  }, [round.index, round.time, selected, setStages, stage]);

  return (
    <div className="headers-SuccessTime">
      {stage?.score.time !== undefined &&
        (stage.config.time - (stage.score.time % stage.config.time)).toFixed(2)}
    </div>
  );
}
