import { useContext } from "react";
import { Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { SceneContext } from "../scenes/SceneContext";
import "./Failure.css";
import { config } from "./config";

export function Failure() {
  const { round, setRound, setPlayer, setComputers, score, setScore } =
    useContext(GameContext);

  const { setCameraTarget } = useContext(SceneContext);

  return (
    <div
      className={`headers-Failure ${
        round.index >= config.round - 1 && round.time <= 0 ? "active" : ""
      }`}
    >
      <div className="content">
        <div className="title">Game Over</div>

        <div className="round">
          Round {round.index + 1} / {config.round}
        </div>

        <div className="score">
          <div className="level">
            Level {score.level + 1} / {config.level}
          </div>

          <div className="coin">
            Coin {score.coin} / {config.coin}
          </div>
        </div>

        <div
          className="button"
          onClick={() => {
            setPlayer((player) => ({
              ...player,
              inputs: [],
            }));

            setComputers([]);

            setCameraTarget((target) => new Vector3(target.x, 0, target.z));

            setRound({
              index: 0,
              time: config.time,
            });

            setScore({
              level: 0,
              coin: 0,
              prize: 0,
            });
          }}
        >
          Retry
        </div>
      </div>
    </div>
  );
}
