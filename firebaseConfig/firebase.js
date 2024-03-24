// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwqRcordFRaMQdG6ZnLF7Z-8NPHB2Knwg",
  authDomain: "user-authentication-d8d82.firebaseapp.com",
  projectId: "user-authentication-d8d82",
  storageBucket: "user-authentication-d8d82.appspot.com",
  messagingSenderId: "1007664085028",
  appId: "1:1007664085028:web:233afdfffe62f3b61d40b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

