import { useFrame } from "@react-three/fiber";
import { RefObject, useContext, useState } from "react";
import { Group, Vector3 } from "three";
import { GameContext } from "../../games/GameContext";

export function useVisiting(ref: RefObject<Group>) {
  const { player } = useContext(GameContext);

  const [visiting, setVisiting] = useState(false);

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    const position = new Vector3();
    ref.current.getWorldPosition(position);

    const visiting =
      !!player.ref?.current &&
      player.ref.current.position.y >= position.y - 0.1 &&
      player.ref.current.position.y <= position.y + 2.9;

    setVisiting(visiting);
  });

  return visiting;
}
