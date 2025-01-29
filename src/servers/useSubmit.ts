import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect } from "react";
import { firebase } from "./firebase";
import { useUserId } from "./useUserId";

export function useSubmit(stageId: string, score: number) {
  const userId = useUserId();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const firestore = getFirestore(firebase);
      const submitsRef = collection(firestore, "submits");

      try {
        addDoc(submitsRef, {
          userId,
          stageId,
          score,
          time: serverTimestamp(),
        });
      } catch (error) {
        console.error("fail to submit score", error);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [score, stageId, userId]);
}
