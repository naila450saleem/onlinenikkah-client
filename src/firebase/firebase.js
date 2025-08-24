// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase config (onlinenikkah-client project)
const firebaseConfig = {
  apiKey: "AIzaSyAKARj_lp-orhGTrdeyzHCW8P468LEBbnc",
  authDomain: "onlinenikkah-client.firebaseapp.com",
  databaseURL: "https://onlinenikkah-client-default-rtdb.firebaseio.com", // 👈 add this (zaroori hai Realtime DB ke liye)
  projectId: "onlinenikkah-client",
  storageBucket: "onlinenikkah-client.appspot.com",
  messagingSenderId: "571746699192",
  appId: "1:571746699192:web:3debb76000376a8a89f14d",
  measurementId: "G-KW222WGMT1"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
const auth = getAuth(app);           // Authentication
const db = getFirestore(app);        // Firestore Database
const realtimeDb = getDatabase(app); // Realtime Database
const analytics = getAnalytics(app); // Analytics (optional)

// ✅ Single export (no duplicates)
export { app, auth, db, realtimeDb, analytics };
