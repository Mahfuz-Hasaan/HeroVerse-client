// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb0N725RzJ4Z9NzAsvYuNmubyQdAjl1Js",
  authDomain: "hero-verse-client.firebaseapp.com",
  projectId: "hero-verse-client",
  storageBucket: "hero-verse-client.appspot.com",
  messagingSenderId: "950736692878",
  appId: "1:950736692878:web:79ae04d827918747098bdf",
  measurementId: "G-GLME7QEBBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app