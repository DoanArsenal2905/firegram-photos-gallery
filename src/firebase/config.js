import firebase from 'firebase/app';
import 'firebase/firebase-storage';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyANfqOn2vta_ZXc8BjcQP_UMorgJOSjA44",
  authDomain: "doan-firegram.firebaseapp.com",
  databaseURL: "https://doan-firegram.firebaseio.com",
  projectId: "doan-firegram",
  storageBucket: "doan-firegram.appspot.com",
  messagingSenderId: "433299107257",
  appId: "1:433299107257:web:9844a16657cc8942365a68"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };