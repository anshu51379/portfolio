import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAm2l8R3hf09H7XSxFzLWGxIM01rbTGRr0",
  authDomain: "anshu0.firebaseapp.com",
  projectId: "anshu0",
  storageBucket: "anshu0.appspot.com",
  messagingSenderId: "923936706475",
  appId: "1:923936706475:web:e08f3e8358385ec2614cee",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();