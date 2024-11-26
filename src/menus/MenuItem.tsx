import { useContext, useMemo } from "react";
import { Vector3 } from "three";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { SceneContext } from "../scenes/SceneContext";
import { ScoreContext } from "../scores/ScoreContext";
import { ScoreResult } from "../scores/scoreResult";
import { MenuContext } from "./MenuContext";
import "./MenuItem.css";
import { Mode } from "./mode";

export function MenuItem({ index }: Props) {
  const { setMode, setRun, stages, setStages, selected, setSelected } =
    useContext(MenuContext);

  const stage = useMemo(
    () => stages.find((stage) => stage.index === index),
    [index, stages]
  );

  const { setRound, setPlayer, setComputers } = useContext(GameContext);
  const { setCameraTarget } = useContext(SceneContext);

  const { scores } = useContext(ScoreContext);
  const currentScore = useMemo(
    () => scores.find((score) => score.stage === stage?.config.id),
    [stage?.config.id, scores]
  );

  const lastScore = useMemo(() => {
    const beforeStages = stages.filter((stage) => stage.index < index);
    if (beforeStages.length <= 0) {
      return undefined;
    }

    const sortedStages = beforeStages.sort((a, b) => a.index - b.index);
    const lastStage = sortedStages[sortedStages.length - 1];

    return scores.find((score) => score.stage === lastStage.config.id);
  }, [index, stages, scores]);

  const { debug } = useContext(DebugContext);

  return (
    <div
      className={`menus-MenuItem ${index === selected ? "selected" : ""} ${
        index <= 0 ||
        currentScore ||
        lastScore?.result === ScoreResult.Success ||
        debug
          ? "active"
          : ""
      }`}
      onClick={() => {
        setSelected(index);

        setMode(Mode.Game);

        setRun((run) => run + 1);

        setPlayer((player) => ({
          ...player,
          inputs: [],
        }));

        setComputers([]);

        setCameraTarget(new Vector3(0, 0, 0));

        setRound({
          index: 0,
          time: stage?.config.time ?? 0,
        });

        setStages((stages) =>
          stages.map((stage) =>
            stage.index === index
              ? { ...stage, score: { prize: 0, level: 0, coin: 0 } }
              : stage
          )
        );
      }}
    >
      <div className="name">{stage?.config.name}</div>

      <div className={`score ${currentScore ? "active" : ""}`}>
        <div>
          Level {currentScore ? currentScore.score.level + 1 : "-"} /{" "}
          {stage?.config.level}
        </div>

        <div>
          Coin {currentScore?.score.coin ?? "-"} / {stage?.config.coin}
        </div>
      </div>
    </div>
  );
}

interface Props {
  index: number;
}
