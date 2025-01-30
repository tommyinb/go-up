import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { FailureServer } from "./FailureServer";
import { Form } from "./Form";
import { RebirthScore } from "./RebirthScore";
import "./Success.css";
import { useStage } from "./useStage";

export function Success() {
  const { mode, setMode } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  const stage = useStage();

  const active =
    !!stage &&
    mode === Mode.Game &&
    round.time <= 0 &&
    stage.score.prize >= stage.config.prize;

  return (
    <Form className="forms-Success" active={active}>
      <div className="content">
        <div className="title">Congrats!</div>

        {stage && (
          <>
            {stage.score.time !== undefined && (
              <div className="time">
                <div>Time</div>
                <div>{stage.score.time.toFixed(2)}</div>
              </div>
            )}

            <RebirthScore stage={stage} />

            {active && <FailureServer stage={stage} />}
          </>
        )}

        <div className="menu" onClick={() => setMode(Mode.Menu)}>
          Menu
        </div>
      </div>
    </Form>
  );
}
