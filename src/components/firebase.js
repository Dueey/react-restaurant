import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDheiy11Zi-agY3MwjY8kmu67Vzqef9iRM",
  authDomain: "yelp-clone-fbb9a.firebaseapp.com",
  projectId: "yelp-clone-fbb9a",
  storageBucket: "yelp-clone-fbb9a.appspot.com",
  messagingSenderId: "524654629139",
  appId: "1:524654629139:web:2f059f5038164491e14ae6",
  measurementId: "G-SMEWCSD036",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
