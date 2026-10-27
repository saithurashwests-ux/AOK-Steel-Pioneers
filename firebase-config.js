import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCVsmm8kwT_Q4e0FBJcdaDm8jyXMH0xYE",
  authDomain: "aok-steel-pioneers.firebaseapp.com",
  projectId: "aok-steel-pioneers",
  storageBucket: "aok-steel-pioneers.firebasestorage.app",
  messagingSenderId: "735370340260",
  appId: "1:735370340260:web:95885c7b050e894ddbc331",
  measurementId: "G-3Y50BDQPCN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
