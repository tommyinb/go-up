import { useCallback, useContext, useState } from "react";
import { GameContext } from "../../games/GameContext";
import { Floor1 } from "./Floor1";
import { Floor10 } from "./Floor10";
import { Floor2 } from "./Floor2";
import { Floor3 } from "./Floor3";
import { Floor4 } from "./Floor4";
import { Floor5 } from "./Floor5";
import { Floor6 } from "./Floor6";
import { Floor7 } from "./Floor7";
import { Floor8 } from "./Floor8";
import { Floor9 } from "./Floor9";

export function Stage() {
  const { score, setScore } = useContext(GameContext);

  const setLevel = useCallback(
    (level: number) => setScore((score) => ({ ...score, level })),
    [setScore]
  );

  const [completed6, setCompleted6] = useState(false);

  return (
    <>
      <Floor1 index={0} setLevel={setLevel} />

      {score.level >= 1 && (
        <Floor2 index={1} active={completed6} setLevel={setLevel} />
      )}

      {score.level >= 2 && <Floor3 index={2} setLevel={setLevel} />}

      {score.level >= 3 && <Floor4 index={3} setLevel={setLevel} />}

      {score.level >= 4 && <Floor5 index={4} setLevel={setLevel} />}

      {score.level >= 5 && (
        <Floor6 index={5} setCompleted={setCompleted6} setLevel={setLevel} />
      )}

      {score.level >= 6 && (
        <Floor7 index={6} active={completed6} setLevel={setLevel} />
      )}

      {score.level >= 7 && <Floor8 index={7} setLevel={setLevel} />}

      {score.level >= 8 && <Floor9 index={8} setLevel={setLevel} />}

      {score.level >= 9 && <Floor10 index={9} />}
    </>
  );
}
