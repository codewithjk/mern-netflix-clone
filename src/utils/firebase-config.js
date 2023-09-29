// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAxJwiNSqSwVZAqtKAec_Pk8TmYXhYe-Q",
  authDomain: "react-netflix-clone-98e25.firebaseapp.com",
  projectId: "react-netflix-clone-98e25",
  storageBucket: "react-netflix-clone-98e25.appspot.com",
  messagingSenderId: "198836023357",
  appId: "1:198836023357:web:54bef0f81684cbe3a47a54",
  measurementId: "G-Z43EZ2PMV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)