// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeooAPzWdyjS18kcqSP3krYPsIdhtRUh8",
  authDomain: "todolist-a20eb.firebaseapp.com",
  projectId: "todolist-a20eb",
  storageBucket: "todolist-a20eb.firebasestorage.app",
  messagingSenderId: "262226043264",
  appId: "1:262226043264:web:cdb2f4444b0d05d646a165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;