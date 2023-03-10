import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";
import { getDatabase } from "firebase/database";

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const auth = getAuth();
