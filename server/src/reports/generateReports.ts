import { Firestore } from "firebase-admin/firestore";
import { readSubmits } from "../users/readSubmits.js";
import { calculateContent } from "./calculateContent.js";
import { saveReport } from "./saveReport.js";
import { uploadReport } from "./uploadReport.js";

export async function generateReports(firestore: Firestore) {
  const allSubmits = await readSubmits();
  const stagesSubmits = Object.groupBy(allSubmits, (submit) => submit.stageId);

  const stageIds = Object.keys(stagesSubmits);
  console.log(`generate ${stageIds.length} new reports`);

  for (const stageId of stageIds) {
    const stageSubmits = stagesSubmits[stageId];

    if (!stageSubmits) {
      continue;
    }

    const report = {
      ...calculateContent(stageSubmits),
      time: new Date(),
    };

    await saveReport(report, stageId);
    await uploadReport(report, stageId, firestore);
  }
}
