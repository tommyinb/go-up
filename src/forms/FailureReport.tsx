import { useMemo } from "react";
import { useReport } from "../servers/useReport";
import "./FailureReport.css";
import { getSubmitScore } from "./getSubmitScore";
import { useStage } from "./useStage";

export function FailureReport() {
  const stage = useStage();
  const score = useMemo(() => (stage ? getSubmitScore(stage) : 0), [stage]);

  const report = useReport(stage?.config.id);
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

  return (
    <div className="forms-FailureReport">
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
