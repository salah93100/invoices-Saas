// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKCAfQNKwLEBsmEQGI5Zw5-AoGbt9RLIM",
  authDomain: "facturesaas.firebaseapp.com",
  projectId: "facturesaas",
  storageBucket: "facturesaas.appspot.com",
  messagingSenderId: "202491855529",
  appId: "1:202491855529:web:747a34d4899935f3e55fb8",
  measurementId: "G-5MG9E81S5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);