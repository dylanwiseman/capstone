import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pound4pound---dev.firebaseapp.com",
  projectId: "pound4pound---dev",
  storageBucket: "pound4pound---dev.appspot.com",
  messagingSenderId: "69193129175",
  appId: "1:69193129175:web:989cdcb13e755359ba6492",
});
