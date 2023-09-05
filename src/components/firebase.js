// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR18XaT6a9Lk-eDQoTW5x3mN6QSoWklrE",
  authDomain: "movie-auth-2b97e.firebaseapp.com",
  projectId: "movie-auth-2b97e",
  storageBucket: "movie-auth-2b97e.appspot.com",
  messagingSenderId: "1071283101741",
  appId: "1:1071283101741:web:f5cabd3e6691a5bd2a58a4",
  measurementId: "G-G00NFWZK1P"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
