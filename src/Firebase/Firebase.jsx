 
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
 

 
const firebaseConfig = {
  apiKey: "AIzaSyCpOJXuUgz63xMhXJGl-tPHNKRPPN_Fygc",
  authDomain: "my-ecommerce-8dbf5.firebaseapp.com",
  projectId: "my-ecommerce-8dbf5",
  storageBucket: "my-ecommerce-8dbf5.firebasestorage.app",
  messagingSenderId: "196019600686",
  appId: "1:196019600686:web:bee7d0d48fc38f9d674ebf"
};

 
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }