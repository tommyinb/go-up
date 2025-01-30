import { Fragment, useContext } from "react";
import { Computer } from "../computers/Computer";
import { MenuContext } from "../menus/MenuContext";
import { Player } from "../players/Player";
import { Stage } from "../stages/Stage";
import { GameContext } from "./GameContext";

export function Game() {
  const { run } = useContext(MenuContext);

  const { round, computers } = useContext(GameContext);

  return (
    <Fragment key={`${run}-${round.index}`}>
      <Stage />

      <Player />

      {computers.map(({ id }) => (
        <Computer key={`computer-${id}`} id={id} />
      ))}
    </Fragment>
  );
}
