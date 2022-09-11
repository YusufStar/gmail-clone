import firebase from 'firebase/compat/';

const firebaseConfig = {
  apiKey: "AIzaSyDRZwQ8cflORxhr7EvbISCd1GfvAANdQeM",
  authDomain: "gmln-cln.firebaseapp.com",
  projectId: "gmln-cln",
  storageBucket: "gmln-cln.appspot.com",
  messagingSenderId: "267014277441",
  appId: "1:267014277441:web:73ffb706b6f3a0406539c0",
  measurementId: "G-537H57Z1WD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };