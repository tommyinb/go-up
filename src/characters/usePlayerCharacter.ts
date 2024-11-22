import { useContext, useEffect, useId, useMemo, useRef } from "react";
import { Group, Mesh } from "three";
import { GameContext } from "../games/GameContext";
import { Character } from "../games/character";
import { CharacterType } from "../games/characterType";

export function usePlayerCharacter() {
  const id = useId();

  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  const character = useMemo<Character>(
    () => ({
      id,
      type: CharacterType.Player,
      groupRef,
      meshRef,
      inputs: [],
    }),
    [id]
  );

  const { setCharacters } = useContext(GameContext);
  useEffect(() => {
    setCharacters((characters) => [...characters, character]);

    return () =>
      setCharacters((characters) => characters.filter((c) => c !== character));
  }, [character, setCharacters]);

  return character;
}
