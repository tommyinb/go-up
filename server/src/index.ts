import { deleteApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { firebase } from "./firebase.js";

await (async () => {
  const firestore = getFirestore(firebase);
  const reportRef = doc(firestore, "reports/stage-1-1-output");
  const reportSnapshot = await getDoc(reportRef);
  const reportData = reportSnapshot.data();

  console.log(reportData?.distribution);

  deleteApp(firebase);
})();

console.log("abc");
