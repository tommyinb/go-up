import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { firebase } from "./firebase";
import { Report } from "./report";
import { ServerContext } from "./ServerContext";

export function useReport(stageId: string | undefined) {
  const [report, setReport] = useState<Report>();

  const { reports, setReports } = useContext(ServerContext);

  useEffect(() => {
    if (!stageId) {
      return;
    }

    if (report) {
      return;
    }

    const oldReport = reports.find((report) => report.stageId);
    if (oldReport) {
      const oldElapsed = Date.now() - oldReport.time;
      if (oldElapsed <= 3 * 24 * 60 * 60 * 1000) {
        setReport(oldReport);
        return;
      }
    }

    const token = { cancelled: false };

    (async () => {
      const firestore = getFirestore(firebase);
      const reportRef = doc(firestore, `reports/${stageId}`);
      const reportSnapshot = await getDoc(reportRef);

      if (token.cancelled) {
        return;
      }

      if (!reportSnapshot.exists()) {
        return;
      }

      const reportData = reportSnapshot.data() as ServerReport;

      const newReport: Report = {
        stageId,
        distribution: Object.entries(reportData.distribution).map(
          ([key, score]) => ({ percentage: parseFloat(key), score })
        ),
        time: reportData.time.seconds * 1000,
      };

      setReport(newReport);
    })();

    return () => {
      token.cancelled = true;
    };
  }, [report, reports, stageId]);

  useEffect(() => {
    if (!report) {
      return;
    }

    const oldReport = reports.find((report) => report.stageId);
    if (oldReport) {
      if (oldReport.time >= report.time) {
        return;
      }

      setReports(
        reports.map((oldReport) => (oldReport.stageId ? report : oldReport))
      );
    } else {
      setReports([...reports, report]);
    }
  }, [report, reports, setReports]);

  return report;
}

interface ServerReport {
  distribution: { [percentage: number]: number };
  time: { seconds: number };
}
