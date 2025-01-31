import { Firestore } from "firebase-admin/firestore";
import { createWriteStream } from "fs";
import { mkdir } from "fs/promises";
import { Stored } from "../servers/stored.js";
import { Submit } from "./submit.js";

export async function download(firestore: Firestore) {
  const scoresCollection = firestore.collection("submits");
  const scoresSnapshot = await scoresCollection.get();

  console.log(`${scoresSnapshot.size} submits are found`);

  if (scoresSnapshot.size <= 0) {
    return [];
  }

  const directory = "data/submits";
  await mkdir(directory, { recursive: true });

  const timeValue = new Date();
  const timeText = timeValue.toLocaleString("lt-LT").replace(/-|:| /g, "");

  const fileName = `${directory}/${timeText}.json`;

  const stream = createWriteStream(fileName);
  stream.write("[");

  let first = true;
  scoresSnapshot.forEach((document) => {
    const serverSubmit = document.data() as Stored<Submit>;
    const { stageId, userId, score, time } = serverSubmit;

    if (
      !(
        stageId &&
        typeof stageId === "string" &&
        stageId.length <= 100 &&
        userId &&
        typeof userId === "string" &&
        userId.length <= 100 &&
        typeof score === "number" &&
        score >= 0 &&
        time &&
        typeof time === "object" &&
        time.seconds &&
        typeof time.seconds === "number" &&
        time.seconds > 0
      )
    ) {
      return;
    }

    const outputSubmit: Submit = {
      documentId: document.id,
      stageId,
      userId,
      score,
      time: new Date(time.seconds * 1000),
    };

    const outputText = JSON.stringify(outputSubmit, null, 2);

    if (first) {
      first = false;
    } else {
      stream.write(",\r\n");
    }

    stream.write(outputText);
  });

  stream.end("]");

  await new Promise((resolve) => stream.close(resolve));

  return fileName;
}
