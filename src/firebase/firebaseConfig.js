// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDywtW-puoCg7t7VS7BqmqqKYI4MPF8uX0",
  authDomain: "pokemart-c3d45.firebaseapp.com",
  projectId: "pokemart-c3d45",
  storageBucket: "pokemart-c3d45.appspot.com",
  messagingSenderId: "998281931200",
  appId: "1:998281931200:web:d42346a07f9e7e7c19c025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)