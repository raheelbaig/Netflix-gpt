// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtoFms1xK47_947u9TePQEn61TRKaucXk",
  authDomain: "netflixgpt-d050a.firebaseapp.com",
  projectId: "netflixgpt-d050a",
  storageBucket: "netflixgpt-d050a.appspot.com",
  messagingSenderId: "54841181199",
  appId: "1:54841181199:web:e2c0099608695f4d7b8f7a",
  measurementId: "G-YZX6LTQ7SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);