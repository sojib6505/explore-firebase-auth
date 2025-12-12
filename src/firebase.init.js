// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkneH7GLHyAKZv22M-f1HruRbjEnbSag",
  authDomain: "simple-firebase-auth-ecb66.firebaseapp.com",
  projectId: "simple-firebase-auth-ecb66",
  storageBucket: "simple-firebase-auth-ecb66.firebasestorage.app",
  messagingSenderId: "10755503616",
  appId: "1:10755503616:web:9e3a5dc98ca669d7384ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);