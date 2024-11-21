import { useContext, useEffect, useId, useMemo, useRef } from "react";
import { Group } from "three";
import { GameContext } from "./GameContext";

export function useCharacter() {
  const id = useId();
  const ref = useRef<Group>(null);
  const character = useMemo(() => ({ id, ref }), [id]);

  const { setCharacters } = useContext(GameContext);
  useEffect(() => {
    setCharacters((characters) => [...characters, character]);

    return () =>
      setCharacters((characters) => characters.filter((c) => c !== character));
  }, [character, setCharacters]);

  return character;
}
