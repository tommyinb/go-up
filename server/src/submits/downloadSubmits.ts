import { Firestore } from "firebase-admin/firestore";
import { createWriteStream } from "fs";
import { mkdir } from "fs/promises";
import { Stored } from "../servers/stored.js";
import { Submit } from "./submit.js";
import { validateSubmit } from "./validateSubmit.js";
import { writeSubmit } from "./writeSubmit.js";

export const directory = "data/submits";

export async function downloadSubmits(firestore: Firestore) {
  const scoresCollection = firestore.collection("submits");
  const scoresSnapshot = await scoresCollection.get();

  console.log(`${scoresSnapshot.size} new submits are found`);

  if (scoresSnapshot.size <= 0) {
    return [];
  }

  await mkdir(directory, { recursive: true });

  const timeValue = new Date();
  const timeText = timeValue.toLocaleString("lt-LT").replace(/-|:| /g, "");
  const fileName = `${directory}/${timeText}.json`;

  const stream = createWriteStream(fileName);
  stream.write("[");

  let first = true;

  for (const document of scoresSnapshot.docs) {
    const submit = document.data() as Stored<Submit>;

    if (!validateSubmit(submit)) {
      return;
    }

    if (first) {
      first = false;
    } else {
      stream.write(",\r\n");
    }

    writeSubmit(submit, document.id, stream);

    await document.ref.delete();
  }

  stream.end("]");

  await new Promise((resolve) => stream.close(resolve));
}
