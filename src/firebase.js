import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBSJ0Cd__plV-zrl7cl_SJIN9oiDkNHb-4",
  authDomain: "myjobs-8574d.firebaseapp.com",
  projectId: "myjobs-8574d",
  storageBucket: "myjobs-8574d.appspot.com",
  messagingSenderId: "328459710343",
  appId: "1:328459710343:web:8120bee83fa32ee3f72d22",
  measurementId: "G-6GSMS4BD1Y",
});

export const db = firebase.firestore();
export const auth = app.auth();
export default app;
