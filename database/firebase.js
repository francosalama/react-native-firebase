import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCcckdJpfSJHvsFsprnE7fT9mwiYEdvRGo",
  authDomain: "react-native-firebase-6a5b7.firebaseapp.com",
  projectId: "react-native-firebase-6a5b7",
  storageBucket: "react-native-firebase-6a5b7.appspot.com",
  messagingSenderId: "500582222999",
  appId: "1:500582222999:web:5c783519b0e907214eadd2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
