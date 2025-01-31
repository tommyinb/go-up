import { useMemo } from "react";
import { Stage } from "../menus/stage";
import { useSubmit } from "../servers/useSubmit";
import { FailureServerReport } from "./FailureServerReport";
import { getSubmitScore } from "./getSubmitScore";

export function FailureServer({ stage }: Props) {
  const score = useMemo(() => getSubmitScore(stage), [stage]);
  useSubmit(stage.config.id, score);

  return <FailureServerReport stageId={stage.config.id} score={score} />;
}

interface Props {
  stage: Stage;
}
