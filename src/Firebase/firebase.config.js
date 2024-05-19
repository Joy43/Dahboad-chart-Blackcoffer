// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyA2QgGUE6rEUrVjCOGvS4Ypg4F_O_HqQ",
  authDomain: "task-management-platform-42b4c.firebaseapp.com",
  projectId: "task-management-platform-42b4c",
  storageBucket: "task-management-platform-42b4c.appspot.com",
  messagingSenderId: "432234799464",
  appId: "1:432234799464:web:e632c09533d7acc7c036dd",
  measurementId: "G-8YWDZ6TTQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app