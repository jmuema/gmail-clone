import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHBQ6N1an1jOpC0OlGqUHx7PeQtTAILa4",
    authDomain: "clone-e9cf3.firebaseapp.com",
    projectId: "clone-e9cf3",
    storageBucket: "clone-e9cf3.appspot.com",
    messagingSenderId: "361626121611",
    appId: "1:361626121611:web:e448b2440f03bc90a02b8e",
    measurementId: "G-CCZZV9ZGM6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };