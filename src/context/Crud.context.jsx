import { createContext, useEffect, useState } from "react";
import {
  createInvoice,
  getAllInvoices,
  updateInvoice,
  deleteInvoice,
  getInvoiceById,
  getInvoicesByStatus,
  db,
} from "../firebase-utils/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

export function generateAlphanumericId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let idA = "";
  let idB = "";

  for (let i = 0; i < 2; i++) {
    idA += letters.charAt(Math.floor(Math.random() * 26));
  }
  for (let i = 0; i < 4; i++) {
    idB += numbers.charAt(Math.floor(Math.random() * 10));
  }

  return idA + idB;
}
export const defaultForm = {
  street: "",
  city: "",
  postCode: "",
  country: "",
  clientName: "",
  clientEmail: "",
  clientStreet: "",
  clientCity: "",
  clientPostCode: "",
  clientCountry: "",
  invoiceDate: "",
  paymentDate: "",
  itemName: "",
  quantity: "",
  price: "",
  projectDescription: "",
};
export const CrudContext = createContext({
  show: false,
  setShow: () => {},
  invoicesCollection: [],
  createNewInvoice: () => {},
  uuid: "",
  retrieveInvo: () => {},
  queryInvoice: "",
  setStatus: () => {},
  paidStatus: "",
  toggleAlert: false,
  setToggleAlert: () => {},
  deleteInvoices: () => {},
  updateCurrentInvoice: () => {},
  formFields: defaultForm,
  setFormFields: () => {},
});

export const CrudProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [invoicesCollection, setInvoicesCollection] = useState([]);
  const [queryInvoice, setQueryInvoice] = useState({});
  const [paidStatus, setStatus] = useState("");
  const [uuid, setUniqueId] = useState();
  const [toggleAlert, setToggleAlert] = useState(false);
  const [formFields, setFormFields] = useState(defaultForm);
  async function retrieve() {
    const invoices = await getAllInvoices();
    setInvoicesCollection(invoices);
  }

  useEffect(() => {
    retrieve();
  }, [uuid]);
  useEffect(() => {
    setUniqueId(generateAlphanumericId);
  }, []);

  useEffect(() => {
    async function queryInvoicesByStatus(paidStatus) {
      let arr = [];
      const querySnapshot = await getInvoicesByStatus(paidStatus);
      querySnapshot.docs.forEach((doc) => {
        arr.push(doc.data());
        setInvoicesCollection(arr);
      });
    }

    queryInvoicesByStatus(paidStatus);
  }, [paidStatus]);

  function createNewInvoice(invoice) {
    createInvoice(invoice);
    setUniqueId(generateAlphanumericId);
  }

  async function retrieveInvo(ID) {
    const querySnapshot = await getInvoiceById(ID);
    querySnapshot.forEach((doc) => {
      setQueryInvoice(doc.data());
    });
  }

  async function deleteInvoices(id) {
    const docId = await deleteInvoice(id);
    const docRef = doc(db, "invoices", docId);
    await deleteDoc(docRef);
    await retrieve();
  }

  async function updateCurrentInvoice(id, newInvoice) {
    const uidd = await updateInvoice(id);
    const docRef = doc(db, "invoices", uidd);
    await updateDoc(docRef, { ...newInvoice });
    setShow(true);
  }

  const value = {
    show,
    setShow,
    invoicesCollection,
    createNewInvoice,
    uuid,
    retrieveInvo,
    queryInvoice,
    setStatus,
    paidStatus,
    toggleAlert,
    setToggleAlert,
    deleteInvoices,
    updateCurrentInvoice,
    formFields,
    setFormFields,
  };

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};
