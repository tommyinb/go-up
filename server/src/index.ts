import admin from "firebase-admin";
import { download } from "./submits/download.js";

console.log("start");

const credential = admin.credential.cert("./data/serviceAccountKey.json");
const app = admin.initializeApp({ credential });
const firestore = app.firestore();

await download(firestore);

console.log("done");
