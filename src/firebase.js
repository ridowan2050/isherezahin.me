import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot };
