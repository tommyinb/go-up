import { useContext } from "react";
import { Vector3 } from "three";
import { GameContext } from "../games/GameContext";
import { MenuContext } from "../menus/MenuContext";
import { Mode } from "../menus/mode";
import { SceneContext } from "../scenes/SceneContext";
import { Form } from "./Form";
import "./Rebirth.css";
import { RebirthScore } from "./RebirthScore";
import { useSetScore } from "./useSetScore";
import { useStage } from "./useStage";

export function Rebirth() {
  const { mode, setMode } = useContext(MenuContext);

  const { round, setRound, player, setPlayer, setComputers } =
    useContext(GameContext);

  const stage = useStage();

  const { setCameraTarget } = useContext(SceneContext);

  const setScore = useSetScore();

  return (
    <Form
      className="forms-Rebirth"
      active={
        !!stage &&
        mode === Mode.Game &&
        round.time <= 0 &&
        stage.score.prize < stage.config.prize &&
        round.index < stage.config.round - 1
      }
    >
      <div className="round">
        Round {round.index + 1} / {stage?.config.round}
      </div>

      {stage && <RebirthScore stage={stage} />}

      <div
        className="again"
        onClick={() => {
          if (player.inputs.length > 0) {
            setComputers((computers) => [
              ...computers,
              {
                id:
                  Math.max(...computers.map((computer) => computer.id), 0) + 1,
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
            time: stage?.config.time ?? 0,
          }));

          setScore({
            level: 0,
            coin: 0,
            prize: 0,
            time: undefined,
          });
        }}
      >
        Continue
      </div>

      <div className="menu" onClick={() => setMode(Mode.Menu)}>
        Menu
      </div>
    </Form>
  );
}
