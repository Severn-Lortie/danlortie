import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

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
  const stories = db.collection('stories');
  const remembrances = db.collection('remembrances');

  // initalize 
  const storage = firebase.storage();

  // export the database, the storage and collections
  export default {
    db,
    storage,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    collections: {
        stories,
        remembrances
    }
  }