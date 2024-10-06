// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9SvyGbUj0EKjEjkFuW5cBYLtmSHnRnNI",
  authDomain: "bbb-billing.firebaseapp.com",
  databaseURL: "https://bbb-billing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bbb-billing",
  storageBucket: "bbb-billing.appspot.com",
  messagingSenderId: "77605376396",
  appId: "1:77605376396:web:bd71ba542267c2fe3386a9",
  measurementId: "G-LHG7J7PZKQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore() ;
const auth = getAuth();

export { db, auth}