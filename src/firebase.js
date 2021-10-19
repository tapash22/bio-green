import firebase from 'firebase';
import "firebase/firestore";
import "firebase/firebase-auth";



var firebaseConfig = {
  apiKey: "AIzaSyCADMDCWEvkjx4CNzSx4W_Uv90cqSrM4Yk",
  authDomain: "bio-green-1c1cf.firebaseapp.com",
  projectId: "bio-green-1c1cf",
  storageBucket: "bio-green-1c1cf.appspot.com",
  messagingSenderId: "811714139147",
  appId: "1:811714139147:web:7f481a2d851d77859ae30e",
  measurementId: "G-N6MS5Y4C8W"
};
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { fb,db, storage };