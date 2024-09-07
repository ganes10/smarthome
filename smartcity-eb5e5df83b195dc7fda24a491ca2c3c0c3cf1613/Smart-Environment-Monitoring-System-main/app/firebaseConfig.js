// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkr1gaZe2nhIpXA7OLbASQLZiZDTobjWI",
  authDomain: "dht11-dda9e.firebaseapp.com",
  databaseURL: "https://dht11-dda9e-default-rtdb.firebaseio.com",
  projectId: "dht11-dda9e",
  storageBucket: "dht11-dda9e.appspot.com",
  messagingSenderId: "461768796015",
  appId: "1:461768796015:web:2d1c610a3872cb0c826a9a",
  measurementId: "G-28RP4X7SZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export {database}

