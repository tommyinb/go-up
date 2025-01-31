import { WriteStream } from "fs";
import { Stored } from "../servers/stored.js";
import { Submit } from "./submit.js";

export function writeSubmit(
  submit: Stored<Submit>,
  documentId: string,
  stream: WriteStream
) {
  const outputSubmit: Submit = {
    documentId,
    stageId: submit.stageId,
    userId: submit.userId,
    score: submit.score,
    time: new Date(submit.time.seconds * 1000),
  };

  const outputText = JSON.stringify(outputSubmit, null, 2);

  stream.write(outputText);
}
