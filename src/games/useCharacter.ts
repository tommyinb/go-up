import { useCallback, useContext, useEffect, useMemo } from "react";
import { Vector3 } from "three";
import { GameContext } from "./GameContext";

export function useCharacter(id: string) {
  const { characters, setCharacters } = useContext(GameContext);

  const defaultCharacter = useMemo(
    () => ({ id, position: new Vector3() }),
    [id]
  );

  useEffect(
    () => setCharacters((characters) => [...characters, defaultCharacter]),
    [defaultCharacter, id, setCharacters]
  );

  const character =
    characters.find((character) => character.id === id) ?? defaultCharacter;

  const updatePosition = useCallback(
    (position: Vector3) => {
      setCharacters((characters) => [
        ...characters.filter((character) => character.id !== id),
        { ...character, position },
      ]);
    },
    [character, id, setCharacters]
  );

  return { character, updatePosition };
}
