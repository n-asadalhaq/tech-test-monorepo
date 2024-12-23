import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { envConfig } from "./env";

const app = initializeApp({
  credential: applicationDefault(),
});

export const db = getFirestore(app);
