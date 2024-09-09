// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, deleteDoc } from "firebase/firestore";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAPDYgzb_FypIBD1Iptk0fILdvhY-HNk-k",
  authDomain: "isherezahin-portfolio.firebaseapp.com",
  projectId: "isherezahin-portfolio",
  storageBucket: "isherezahin-portfolio.appspot.com",
  messagingSenderId: "326249912520",
  appId: "1:326249912520:web:0aecca437db6deb473edfd",
  measurementId: "G-TWEC3FXVF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export { db, auth, provider, signInWithPopup, signOut, GithubAuthProvider, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, deleteDoc };
