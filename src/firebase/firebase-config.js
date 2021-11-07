import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNKFnwqaXwIv61lP2_zptmXTLC90sONWM",
  authDomain: "test-tech-spain.firebaseapp.com",
  projectId: "test-tech-spain",
  storageBucket: "test-tech-spain.appspot.com",
  messagingSenderId: "426258603217",
  appId: "1:426258603217:web:0a8be6b3ddcfbb2ad8b9f0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
