// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc,getDocs, updateDoc, doc, deleteDoc }  from "firebase/firestore"
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


 export async function getAllInvoices(){
    const data = await getDocs(collection(db, 'invoices'))
    const invoices = data.docs.map((doc) => ({...doc.data(), id : doc.id}))

}



export async function updateInvoice(Id, newInvoice) {
    const docRef = doc(db, 'invoices', Id)
    await updateDoc(docRef, newInvoice)
}

export async function deleteInvoice(Id) {
    const docRef = doc(db, 'invoices', Id)
    await deleteDoc(docRef)
}

deleteInvoice('2RjBYAtoKk3t6GT7D8mH')




