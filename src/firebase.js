import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdijrhuVuTGC8VMbs5mFkTwqw-PQfiC2c",
  authDomain: "todos-829a7.firebaseapp.com",
  projectId: "todos-829a7",
  storageBucket: "todos-829a7.appspot.com",
  messagingSenderId: "927018118569",
  appId: "1:927018118569:web:9c2309dcdd9e8dbbb8a8b8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export  const auth = getAuth(app);