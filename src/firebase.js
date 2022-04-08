// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBibNMIHJBz3Lox5l9rZyMeCCtZwqwLb4U",
  authDomain: "calendar-4634a.firebaseapp.com",
  projectId: "calendar-4634a",
  storageBucket: "calendar-4634a.appspot.com",
  messagingSenderId: "13327704479",
  appId: "1:13327704479:web:069d3cafd2131e44d31daa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampInSnapshots:true})
export default app;