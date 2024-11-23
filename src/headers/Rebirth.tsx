import { useContext } from "react";
import { Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { SceneContext } from "../scenes/SceneContext";
import "./Rebirth.css";
import { config } from "./config";

export function Rebirth() {
  const { round, setRound, player, setPlayer, setComputers, score, setScore } =
    useContext(GameContext);

  const { setCameraTarget } = useContext(SceneContext);

  return (
    <div
      className={`headers-Rebirth ${
        round.index < config.round - 1 && round.time <= 0 ? "active" : ""
      }`}
    >
      <div className="content">
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
            if (player.inputs.length > 0) {
              setComputers((computers) => [
                ...computers.slice(-5),
                {
                  id:
                    Math.max(...computers.map((computer) => computer.id), 0) +
                    1,
                  ref: undefined,
                  inputs: player.inputs,
                },
              ]);
            }

            setPlayer((player) => ({
              ...player,
              inputs: [],
            }));

            setCameraTarget((target) => new Vector3(target.x, 0, target.z));

            setRound((round) => ({
              index: round.index + 1,
              time: config.time,
            }));

            setScore({ level: 0, coin: 0 });
          }}
        >
          Again
        </div>
      </div>
    </div>
  );
}
