import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvC_JTOBXG9jGMBK8OByatr5fzBPQ7R9c",
  authDomain: "inventory-1956a.firebaseapp.com",
  projectId: "inventory-1956a",
  storageBucket: "inventory-1956a.appspot.com",
  messagingSenderId: "95991104825",
  appId: "1:95991104825:web:9dec0bec7fe6e64ff414e8",
  measurementId: "G-TRLR3LCK4Y",
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const googleAuthProvider = new GoogleAuthProvider();
