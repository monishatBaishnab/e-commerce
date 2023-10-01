// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtily2xPIwDipoVRtCQEw_y37W1LSeczE",
  authDomain: "e-commerce-5f45a.firebaseapp.com",
  projectId: "e-commerce-5f45a",
  storageBucket: "e-commerce-5f45a.appspot.com",
  messagingSenderId: "1017167023560",
  appId: "1:1017167023560:web:4a9b9d744881bed2bd44fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;