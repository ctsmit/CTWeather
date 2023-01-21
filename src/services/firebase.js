// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6m1K2QjH9pSCWFkvduqjJeFzieCCTtQ",
  authDomain: "ctweather-30e17.firebaseapp.com",
  projectId: "ctweather-30e17",
  storageBucket: "ctweather-30e17.appspot.com",
  messagingSenderId: "5754809044",
  appId: "1:5754809044:web:56bef051615e3201dfe941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app