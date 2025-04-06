// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

// Firebase Configuration for Comments (same as main config)
const firebaseConfig = {
  apiKey: "AIzaSyC301tBuSnNoNXRqzLe-cj7zsvEQCrap1c",
  authDomain: "sid-portfolio-0533.firebaseapp.com",
  projectId: "sid-portfolio-0533",
  storageBucket: "sid-portfolio-0533.appspot.com", // Fixed URL
  messagingSenderId: "785382131292",
  appId: "1:785382131292:web:43175782a336fe9904c899"
};

// Initialize Firebase App with a unique name for comments
const commentApp = initializeApp(firebaseConfig, "comments-app");
const db = getFirestore(commentApp);
const storage = getStorage(commentApp);

// Export Firestore database and Firestore collection functions
export { db, collection, addDoc, storage };
