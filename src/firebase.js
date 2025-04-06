// Import Firebase core modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

// Main Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC301tBuSnNoNXRqzLe-cj7zsvEQCrap1c",
  authDomain: "sid-portfolio-0533.firebaseapp.com",
  projectId: "sid-portfolio-0533",
  storageBucket: "sid-portfolio-0533.appspot.com", // Fixed URL
  messagingSenderId: "785382131292",
  appId: "1:785382131292:web:43175782a336fe9904c899"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services
export { db, storage };
