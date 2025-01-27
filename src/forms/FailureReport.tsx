import { useMemo } from "react";
import { useReport } from "../servers/useReport";
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
      {score} ({percentage}%)
    </div>
  );
}
