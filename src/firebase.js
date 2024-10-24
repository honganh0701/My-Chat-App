// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAwHud7giUZRJfabSaC6WWYKf7Ti3OvU0",
  authDomain: "chatappreact-e209b.firebaseapp.com",
  projectId: "chatappreact-e209b",
  storageBucket: "chatappreact-e209b.appspot.com",
  messagingSenderId: "389036213783",
  appId: "1:389036213783:web:0b761863101e20233d7e52",
  measurementId: "G-XRWM9GTSV8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);