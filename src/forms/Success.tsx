import { useContext } from "react";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { FailureReport } from "./FailureReport";
import { Form } from "./Form";
import { RebirthScore } from "./RebirthScore";
import "./Success.css";
import { useStage } from "./useStage";

export function Success() {
  const { mode, setMode } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  const stage = useStage();

  const { debug } = useContext(DebugContext);

  const active =
    debug ||
    (!!stage &&
      mode === Mode.Game &&
      round.time <= 0 &&
      stage.score.prize >= stage.config.prize);

  return (
    <Form className="forms-Success" active={active}>
      <div className="title">Congrats!</div>

      {stage?.score.time !== undefined && (
        <div className="time">
          <div>Time</div>
          <div>{stage.score.time.toFixed(2)}</div>
        </div>
      )}

      {stage && <RebirthScore stage={stage} />}

      {active && <FailureReport />}

      <div className="menu" onClick={() => setMode(Mode.Menu)}>
        Menu
      </div>
    </Form>
  );
}
