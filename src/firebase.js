// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAMkiAF6NJ__rYCTEz5gmxWVzjwk4DLqiA",
    authDomain: "tinder-clone-135a0.firebaseapp.com",
    projectId: "tinder-clone-135a0",
    storageBucket: "tinder-clone-135a0.appspot.com",
    messagingSenderId: "668128760954",
    appId: "1:668128760954:web:7ae0a61fd49a483e2e57c3",
    measurementId: "G-PZM14BL54M"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;