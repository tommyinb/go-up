import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { Form } from "./Form";
import { RebirthScore } from "./RebirthScore";
import "./Success.css";
import { useStage } from "./useStage";

export function Success() {
  const { mode, setMode } = useContext(MenuContext);

  const { round } = useContext(GameContext);

  const stage = useStage();

  return (
    <Form
      className="forms-Success"
      active={
        !!stage &&
        mode === Mode.Game &&
        round.time <= 0 &&
        stage.score.prize >= stage.config.prize
      }
    >
      <div className="title">Congrats!</div>

      <div className="round">
        Round {round.index + 1} / {stage?.config.round}
      </div>

      {stage && <RebirthScore className="score" stage={stage} />}

      <div className="menu" onClick={() => setMode(Mode.Menu)}>
        Menu
      </div>
    </Form>
  );
}
