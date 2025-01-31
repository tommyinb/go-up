import { useMemo } from "react";
import { Stage } from "../menus/stage";
import { useReport } from "../servers/useReport";
import { useSubmit } from "../servers/useSubmit";
import { FailureServerReport } from "./FailureServerReport";
import { getSubmitScore } from "./getSubmitScore";
import "./SuccessServer.css";

export function SuccessServer({ stage }: Props) {
  const score = useMemo(() => getSubmitScore(stage), [stage]);
  useSubmit(stage.config.id, score);

  const report = useReport(stage.config.id);

  return (
    <div className="forms-SuccessServer">
      {report &&
        (report.successes < 1 ? (
          <div className="message">First to conquer!</div>
        ) : report.successes < 10 ? (
          <div className="message">First 10 to conquer!</div>
        ) : (
          <FailureServerReport stageId={stage.config.id} score={score} />
        ))}
    </div>
  );
}

interface Props {
  stage: Stage;
}
