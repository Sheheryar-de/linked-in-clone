// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_sz7ICOtHp-LnywAls95ITg78mulF3uM",
  authDomain: "linked-in-clone-702.firebaseapp.com",
  projectId: "linked-in-clone-702",
  storageBucket: "linked-in-clone-702.appspot.com",
  messagingSenderId: "144110827041",
  appId: "1:144110827041:web:0aa0f58091222877061560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);