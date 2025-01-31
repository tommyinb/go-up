import { Firestore } from "firebase-admin/firestore";
import { Report } from "./report.js";

export async function uploadReport(
  report: Report,
  stageId: string,
  firestore: Firestore
) {
  const reportsCollection = firestore.collection("reports");
  const reportRef = reportsCollection.doc(stageId);

  console.log(`upload ${stageId} report`);

  await reportRef.set(report);
}
