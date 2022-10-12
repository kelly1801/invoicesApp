// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc }  from "firebase/firestore"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDtW4vVtl6WyppbjtR7lZe2e-Y4c5kV0Ek",
  authDomain: "invoiceapp-8902c.firebaseapp.com",
  projectId: "invoiceapp-8902c",
  storageBucket: "invoiceapp-8902c.appspot.com",
  messagingSenderId: "945726752859",
  appId: "1:945726752859:web:e419575f082a34ea62977e"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore()

export async function createPost(post) {
    await addDoc(collection(db, 'invoices') , post)
}

