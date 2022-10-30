// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5iN5B7whpe_pfZQPuRz_5jP4Zl2SiXfY",
  authDomain: "coder-ecommerce-77303.firebaseapp.com",
  projectId: "coder-ecommerce-77303",
  storageBucket: "coder-ecommerce-77303.appspot.com",
  messagingSenderId: "931400252503",
  appId: "1:931400252503:web:0062b557159b29f21bb712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)