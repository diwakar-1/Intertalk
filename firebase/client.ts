// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDFqv0Sy8iawcMu5IaLtL6uAyIA4fA1Qw",
  authDomain: "inertalk-60cad.firebaseapp.com",
  projectId: "inertalk-60cad",
  storageBucket: "inertalk-60cad.firebasestorage.app",
  messagingSenderId: "1012538109960",
  appId: "1:1012538109960:web:f53bcdaeb3edfcbc6761bd",
  measurementId: "G-X6YB4XPC04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);