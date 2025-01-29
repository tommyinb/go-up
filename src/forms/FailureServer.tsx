import { useMemo } from "react";
import { Stage } from "../menus/stage";
import { useReport } from "../servers/useReport";
import { useSubmit } from "../servers/useSubmit";
import "./FailureServer.css";
import { getSubmitScore } from "./getSubmitScore";

export function FailureServer({ stage }: Props) {
  const score = useMemo(() => getSubmitScore(stage), [stage]);
  useSubmit(stage.config.id, score);

  const report = useReport(stage.config.id);
  const percentage = useMemo(
    () =>
      Math.max(
        ...[
          ...(report?.distribution
            .filter((item) => score >= item.score)
            .map((item) => item.percentage) ?? []),
          0,
        ]
      ),
    [report?.distribution, score]
  );

  console.log(stage.config.id, report);

  return (
    <div className="forms-FailureServer">
      {percentage >= 99
        ? "Elite 1%, worldwide"
        : percentage >= 90
        ? `Top ${Math.ceil(100 - percentage)}% worldwide`
        : percentage >= 80
        ? `Above ${Math.ceil(percentage)}% worldwide`
        : percentage >= 30
        ? `Ranked ${Math.ceil(percentage)}% worldwide`
        : percentage >= 10
        ? `Lower ${Math.ceil(percentage)}% worldwide`
        : ""}
    </div>
  );
}

interface Props {
  stage: Stage;
}
