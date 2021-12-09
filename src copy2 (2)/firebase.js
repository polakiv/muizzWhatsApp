import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
import "firebase/messaging";
import "firebase/storage"

const firebaseConfig = { 

apiKey: "AIzaSyBEEA2tvNgeHIYxDRJgkxDfZIBguDnybPc",
  authDomain: "whatsapp2-a5f92.firebaseapp.com",
  databaseURL: "https://whatsapp2-a5f92-default-rtdb.firebaseio.com",
  projectId: "whatsapp2-a5f92",
  storageBucket: "whatsapp2-a5f92.appspot.com",
  messagingSenderId: "1023177696506",
  appId: "1:1023177696506:web:a180739d1dd334d1f7d543",
  measurementId: "G-XG4H351X5E"
};/*use your own configuration*/ 

const firebaseApp = firebase.initializeApp(firebaseConfig);
/*you can enable persistence to allow the user to see previous data when he's offline but it will make your queries very slow which leads
to bad user experience so I suggest you implement your own offline support by caching the data and retrieving them when the user is offline*/
//firebaseApp.firestore().enablePersistence();
const db = firebaseApp.firestore();
const db2 = firebaseApp.database();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const createTimestamp2 = firebase.database.ServerValue.TIMESTAMP;
const messaging = "serviceWorker" in navigator && "PushManager" in window ?  firebase.messaging() : null;
const fieldIncrement = firebase.firestore.FieldValue.increment;
const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
const storage = firebase.storage().ref("images");

const storage1 = firebase.storage();
const audioStorage = firebase.storage().ref("audios");

//db.disableNetwork();

export { auth , provider, createTimestamp, messaging, fieldIncrement, arrayUnion, storage, storage1, audioStorage, db2, createTimestamp2};
export default db;
