import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDtW4vVtl6WyppbjtR7lZe2e-Y4c5kV0Ek",
  authDomain: "invoiceapp-8902c.firebaseapp.com",
  projectId: "invoiceapp-8902c",
  storageBucket: "invoiceapp-8902c.appspot.com",
  messagingSenderId: "945726752859",
  appId: "1:945726752859:web:e419575f082a34ea62977e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export async function createInvoice(invoice) {
  await addDoc(collection(db, "invoices"), invoice);
}

export async function getAllInvoices() {
  const data = await getDocs(collection(db, "invoices"));
  const invoices = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return invoices;
}

export async function updateInvoice(Id, newInvoice) {
  const docRef = doc(db, "invoices", Id);
  await updateDoc(docRef, newInvoice);
}

export async function deleteInvoice(Id) {
  const docRef = doc(db, "invoices", Id);
  await deleteDoc(docRef);
}

export async function getInvoiceById(invoiceId) {
  const invoicesRef = collection(db, "invoices");
  const q = query(invoicesRef, where("ID", "==", invoiceId));

  return await getDocs(q);
}
