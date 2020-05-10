import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCM9BhxB4d91TrPfyqM3mt2XXuu06Qf-c",
    authDomain: "danlortie-315f1.firebaseapp.com",
    databaseURL: "https://danlortie-315f1.firebaseio.com",
    projectId: "danlortie-315f1",
    storageBucket: "danlortie-315f1.appspot.com",
    messagingSenderId: "13627533319",
    appId: "1:13627533319:web:d4ea713ec3fa66e1e6a2a2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // initalize firestore
  const db = firebase.firestore();
  
  // collections 
  const stories = db.collection('stories')

  // export the database and collections
  export default {
    db,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    collections: {
        stories
    }
  }