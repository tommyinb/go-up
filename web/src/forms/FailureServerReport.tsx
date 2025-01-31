import { useMemo } from "react";
import { useReport } from "../servers/useReport";
import "./FailureServerReport.css";

export function FailureServerReport({ stageId, score }: Props) {
  const report = useReport(stageId);
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
    <div className="forms-FailureServerReport">
      {percentage >= 99
        ? "Elite 1%"
        : percentage >= 90
        ? `Top ${Math.ceil(100 - percentage)}%`
        : percentage >= 80
        ? `Above ${Math.ceil(percentage)}%`
        : percentage >= 30
        ? `Ranked ${Math.ceil(percentage)}%`
        : percentage >= 10
        ? `Lower ${Math.ceil(percentage)}%`
        : "Bottom 10%"}
      , worldwide
    </div>
  );
}

interface Props {
  stageId: string;
  score: number;
}
