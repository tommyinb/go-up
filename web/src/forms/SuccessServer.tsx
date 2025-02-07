import { useMemo } from "react";
import { Stage } from "../menus/stage";
import { useReport } from "../servers/useReport";
import { useSubmit } from "../servers/useSubmit";
import { FailureServerReport } from "./FailureServerReport";
import { getSubmitScore } from "./getSubmitScore";
import "./SuccessServer.css";
import { SuccessServerMessage } from "./SuccessServerMessage";

export function SuccessServer({ stage }: Props) {
  const score = useMemo(() => getSubmitScore(stage), [stage]);
  useSubmit(stage.config.id, score);

  const report = useReport(stage.config.id);

  return (
    <div className="forms-SuccessServer">
      {report &&
        (report.successes < 1 ? (
          <SuccessServerMessage>First to conquer!</SuccessServerMessage>
        ) : report.successes < 10 ? (
          <SuccessServerMessage>First 10 to conquer!</SuccessServerMessage>
        ) : (
          <FailureServerReport stageId={stage.config.id} score={score} />
        ))}
    </div>
  );
}

interface Props {
  stage: Stage;
}
