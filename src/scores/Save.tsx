import { useContext, useEffect, useMemo } from "react";
import { useStage } from "../forms/useStage";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { ScoreContext } from "./ScoreContext";
import { ScoreResult } from "./scoreResult";

export function Save() {
  const { mode } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  const stage = useStage();

  const result = useMemo(
    () =>
      !!stage && mode === Mode.Game && round.time <= 0
        ? stage.score.prize >= stage.config.prize
          ? ScoreResult.Success
          : round.index >= stage.config.round - 1
          ? ScoreResult.Failure
          : undefined
        : undefined,
    [mode, round.index, round.time, stage]
  );

  const { setScores } = useContext(ScoreContext);
  useEffect(() => {
    if (stage && result) {
      setScores((oldScores) => {
        const oldScore = oldScores.find((win) => win.stage === stage.config.id);

        if (oldScore) {
          if (
            oldScore.result === ScoreResult.Success &&
            result === ScoreResult.Failure
          ) {
            return oldScores;
          }

          if (
            oldScore.result === result &&
            (oldScore.score.prize > stage.score.prize ||
              (oldScore.score.prize === stage.score.prize &&
                (oldScore.score.level > stage.score.level ||
                  (oldScore.score.level === stage.score.level &&
                    oldScore.score.coin >= stage.score.coin))))
          ) {
            return oldScores;
          }
        }

        return [
          ...oldScores.filter((win) => win.stage !== stage.config.id),
          {
            stage: stage.config.id,
            result,
            score: stage.score,
          },
        ];
      });
    }
  }, [result, setScores, stage]);

  return <></>;
}
