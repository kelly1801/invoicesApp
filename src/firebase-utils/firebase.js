import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
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
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function updateInvoice(Id) {
  let idD = "";

  const docRef = collection(db, "invoices");
  const q = query(docRef, where("ID", "==", Id));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => (idD = doc.id));

  return idD
}

export async function deleteInvoice(ID) {
  let idD = "";
  const docRef = collection(db, "invoices");
  const q = query(docRef, where("ID", "==", ID));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => (idD = doc.id));

  return idD;
}

export async function getInvoicesByQuery(fieldPath,invoiceINFO) {
  const invoicesRef = collection(db, "invoices");
  const q = query(invoicesRef, where(fieldPath, "==", invoiceINFO));


  return await getDocs(q);
}

