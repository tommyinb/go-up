import { useCallback, useState } from "react";
import { useStage } from "../../forms/useStage";
import { Floor10 } from "../stage1/Floor10";
import { Floor1 } from "./Floor1";
import { Floor2 } from "./Floor2";
import { Floor3 } from "./Floor3";
import { Floor4 } from "./Floor4";
import { Floor5 } from "./Floor5";
import { Floor6 } from "./Floor6";
import { Floor7 } from "./Floor7";
import { Floor8 } from "./Floor8";
import { Floor9 } from "./Floor9";

export function Stage() {
  const stage = useStage();
  const level = stage?.score.level ?? 0;

  const [completed, setCompleted] = useState(false);
  const complete = useCallback(() => setCompleted(true), []);

  return (
    <>
      <Floor1 index={0} active={completed} />

      {level >= 1 && <Floor2 index={1} />}

      {level >= 2 && <Floor3 index={2} />}

      {level >= 3 && <Floor4 index={3} />}

      {level >= 4 && <Floor5 index={4} />}

      {level >= 5 && <Floor6 index={5} active={completed} />}

      {level >= 6 && <Floor7 index={6} />}

      {level >= 7 && <Floor8 index={7} complete={complete} />}

      {level >= 8 && <Floor9 index={8} active={completed} />}

      {level >= 9 && <Floor10 index={9} />}
    </>
  );
}
