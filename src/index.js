// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABI0DPchWq_FzlCDaBNJv2y4OcZmA16Yc",
  authDomain: "mtsfreitasgithubio.firebaseapp.com",
  projectId: "mtsfreitasgithubio",
  storageBucket: "mtsfreitasgithubio.appspot.com",
  messagingSenderId: "72022015160",
  appId: "1:72022015160:web:c60ed4b94b2d58d13b484d",
  measurementId: "G-BC7R15VCBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);