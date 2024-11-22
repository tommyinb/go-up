import { useContext, useEffect, useId, useMemo, useRef } from "react";
import { Group } from "three";
import { GameContext } from "../games/GameContext";
import { Player } from "../games/player";

export function usePlayerCharacter() {
  const id = useId();

  const ref = useRef<Group>(null);

  const character = useMemo<Player>(
    () => ({
      id,
      ref,
      inputs: [],
    }),
    [id]
  );

  const { setPlayer: setCharacters } = useContext(GameContext);
  useEffect(() => {
    setCharacters((characters) => [...characters, character]);

    return () =>
      setCharacters((characters) => characters.filter((c) => c !== character));
  }, [character, setCharacters]);

  return character;
}
