// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL8Qkwe171zpyoSM9j1LR3mPAfibZyl-Q",
  authDomain: "rick-and-morty-app-26cd4.firebaseapp.com",
  projectId: "rick-and-morty-app-26cd4",
  storageBucket: "rick-and-morty-app-26cd4.appspot.com",
  messagingSenderId: "350671823239",
  appId: "1:350671823239:web:d0cf084463b644be59b322",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(appFirebase);

export default {
  auth,
  appFirebase,
};
