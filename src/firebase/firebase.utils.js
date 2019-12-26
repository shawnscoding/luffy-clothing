import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFceApyxcrSUMnZqDbh3HYJYOujo6fryQ",
  authDomain: "luffy-db.firebaseapp.com",
  databaseURL: "https://luffy-db.firebaseio.com",
  projectId: "luffy-db",
  storageBucket: "luffy-db.appspot.com",
  messagingSenderId: "317199101563",
  appId: "1:317199101563:web:25909647437dae8c3c7cde",
  measurementId: "G-JSVQ3Y9ZKN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
