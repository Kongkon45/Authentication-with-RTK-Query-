// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCTtVhH-zd46juWVfQ0vpGLdM-oE1B7-98",
  authDomain: "authentication-demo-c0a1d.firebaseapp.com",
  projectId: "authentication-demo-c0a1d",
  storageBucket: "authentication-demo-c0a1d.appspot.com",
  messagingSenderId: "179772877529",
  appId: "1:179772877529:web:e99b4f278542a830622cc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
