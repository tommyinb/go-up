import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { Form } from "./Form";
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

      <div className="score">
        <div className="level">
          Level {(stage?.score.level ?? 0) + 1} / {stage?.config.level}
        </div>

        <div className="coin">
          Coin {stage?.score.coin} / {stage?.config.coin}
        </div>
      </div>

      <div className="menu" onClick={() => setMode(Mode.Menu)}>
        Menu
      </div>
    </Form>
  );
}
