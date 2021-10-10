import firebase from 'firebase';
import "firebase/firestore";
import "firebase/firebase-auth";



var firebaseConfig = {
    apiKey: "AIzaSyBFLLrjFen6tS4cTZrJv-m3YQuEfHvseYs",
    authDomain: "bio-green-899a4.firebaseapp.com",
    databaseURL: "https://bio-green-899a4-default-rtdb.firebaseio.com",
    projectId: "bio-green-899a4",
    storageBucket: "bio-green-899a4.appspot.com",
    messagingSenderId: "635355970457",
    appId: "1:635355970457:web:61a98921cc85865c81f108",
    measurementId: "G-KJCMQ31SS5"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { fb,db, storage };