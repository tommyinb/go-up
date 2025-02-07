import { useContext } from "react";
import { Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { SceneContext } from "../scenes/SceneContext";
import "./Failure.css";
import { FailureScore } from "./FailureScore";
import { FailureServer } from "./FailureServer";
import { Form } from "./Form";
import { useSetScore } from "./useSetScore";
import { useStage } from "./useStage";

export function Failure() {
  const { mode, setMode } = useContext(MenuContext);

  const { round, setRound, setPlayer, setComputers } = useContext(GameContext);

  const stage = useStage();

  const active =
    !!stage &&
    mode === Mode.Game &&
    round.time <= 0 &&
    stage.score.prize < stage.config.prize &&
    round.index >= stage.config.round - 1;

  const { setCameraTarget } = useContext(SceneContext);

  const setScore = useSetScore();

  return (
    <Form className="forms-Failure" active={active}>
      <div className="title">Game Over</div>

      <div className="round">
        Round {round.index + 1} / {stage?.config.round}
      </div>

      {stage && (
        <>
          <FailureScore className="score" stage={stage} />

          {active && <FailureServer stage={stage} />}
        </>
      )}

      <div
        className="retry"
        onClick={() => {
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

          setScore({
            level: 0,
            coin: 0,
            prize: 0,
            time: undefined,
          });
        }}
      >
        Retry
      </div>

      <div className="menu" onClick={() => setMode(Mode.Menu)}>
        Menu
      </div>
    </Form>
  );
}
