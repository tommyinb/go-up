import { Fragment, useContext } from "react";
import { Computer } from "../computers/Computer";
import { Player } from "../players/Player";
import { Stage } from "../stages/stage1/Stage";
import { GameContext } from "./GameContext";
import { useTime } from "./useTime";

export function Game() {
  const { round, computers } = useContext(GameContext);

  useTime();

  return (
    <Fragment key={round.index}>
      <Stage />

      <Player />

      {computers.map(({ id }) => (
        <Computer key={`computer-${id}`} id={id} />
      ))}
    </Fragment>
  );
}
