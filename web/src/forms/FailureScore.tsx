import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { Stage } from "../menus/stage";
import "./FailureScore.css";

export function FailureScore({ className, stage }: Props) {
  const { round } = useContext(GameContext);

  return (
    <div
      className={`forms-FailureScore ${className ?? ""} ${
        round.time <= 0 ? "active" : ""
      }`}
    >
      <div className="level">
        <div>Level</div>

        <div className="value">
          <div className="value">{stage.score.level + 1}</div>
          <div>/</div>
          <div>{stage.config.level}</div>
        </div>

        <div className="star">
          <div className="star">
            {stage.score.level + 1 >= stage.config.level * 0.5 ? "★" : "☆"}
          </div>
          <div className="star">
            {stage.score.level + 1 >= stage.config.level * 0.8 ? "★" : "☆"}
          </div>
          <div className="star">
            {stage.score.level + 1 >= stage.config.level ? "★" : "☆"}
          </div>
        </div>
      </div>

      <div className="coin">
        <div>Coin</div>

        <div className="value">
          <div className="value">{stage.score.coin}</div>
          <div>/</div>
          <div>{stage.config.coin}</div>
        </div>

        <div className="star">
          <div className="star">
            {stage.score.coin >= stage.config.coin * 0.3 ? "★" : "☆"}
          </div>
          <div className="star">
            {stage.score.coin >= stage.config.coin * 0.7 ? "★" : "☆"}
          </div>
          <div className="star">
            {stage.score.coin >= stage.config.coin ? "★" : "☆"}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  className?: string;
  stage: Stage;
}
