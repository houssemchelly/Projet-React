// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo7EGd9aI1M6ae6KOuGFEBnSttsYP2Vug",
  authDomain: "authuser-80cf7.firebaseapp.com",
  projectId: "authuser-80cf7",
  storageBucket: "authuser-80cf7.firebasestorage.app",
  messagingSenderId: "568478279286",
  appId: "1:568478279286:web:4b15a874f8f753fe2c6157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;