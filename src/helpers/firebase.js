// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcg0QaoCB9LhWKk6x3PEnMlpn64mSVukk",
  authDomain: "fireblog-app-7ae87.firebaseapp.com",
  projectId: "fireblog-app-7ae87",
  storageBucket: "fireblog-app-7ae87.appspot.com",
  messagingSenderId: "13204803778",
  appId: "1:13204803778:web:f8d1e60b2bf2f839dd6b5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
