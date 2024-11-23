import { useContext, useEffect, useMemo } from "react";
import { Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { SceneContext } from "../scenes/SceneContext";
import { MenuContext } from "./MenuContext";
import "./MenuItem.css";
import { Mode } from "./mode";
import { StageConfig } from "./stageConfig";

export function MenuItem({ index, title, config }: Props) {
  const { setMode, setRun, stages, setStages, selected, setSelected } =
    useContext(MenuContext);

  useEffect(() => {
    setStages((stages) => [
      ...stages,
      { index, config, score: { prize: 0, level: 0, coin: 0 } },
    ]);

    return () =>
      setStages((stages) => stages.filter((stage) => stage.index !== 0));
  }, [config, index, setStages]);

  const stage = useMemo(
    () => stages.find((stage) => stage.index === index),
    [index, stages]
  );

  const { setRound, setPlayer, setComputers } = useContext(GameContext);
  const { setCameraTarget } = useContext(SceneContext);

  return (
    <div
      className={`menus-MenuItem ${index === selected ? "selected" : ""}`}
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
      <div className="title">{title}</div>

      <div className="score">
        <div>
          Level {(stage?.score.level ?? 0) + 1} / {config.level}
        </div>

        <div>
          Coin {stage?.score.coin} / {config.coin}
        </div>
      </div>
    </div>
  );
}

interface Props {
  index: number;
  title: string;
  config: StageConfig;
}
