import { createContext, useEffect, useState } from "react";
import {
  createInvoice,
  getAllInvoices,
  updateInvoice,
  deleteInvoice,
  getInvoicesByQuery,
  db,
} from "../firebase-utils/firebase";
import { light, dark } from "../components/Styles/themes.js";
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
  invoicesCollection: [],
  uuid: "",
  queryInvoice: "",
  paidStatus: "",
  toggleAlert: false,
  formFields: defaultForm,
  theme: true,
  selectedTheme: light,
  req: true,
  setShow: () => {},
  createNewInvoice: () => {},
  retrieveInvo: () => {},
  setStatus: () => {},
  setToggleAlert: () => {},
  deleteInvoices: () => {},
  updateCurrentInvoice: () => {},
  setFormFields: () => {},
  setTheme: () => {},
  setReq: () => {},
  retrieve: () => {},
});

export const CrudProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [invoicesCollection, setInvoicesCollection] = useState([]);
  const [queryInvoice, setQueryInvoice] = useState({});
  const [paidStatus, setStatus] = useState("");
  const [uuid, setUniqueId] = useState();
  const [toggleAlert, setToggleAlert] = useState(false);
  const [formFields, setFormFields] = useState(defaultForm);
  const [theme, setTheme] = useState(true);
  const [selectedTheme, toggleTheme] = useState(light);
  const [req, setReq] = useState(true);
  async function retrieve() {
    const invoices = await getAllInvoices();
    setInvoicesCollection(invoices);
  }

  function toggleColorTheme() {
    if (theme) {
      toggleTheme(light);
    } else {
      toggleTheme(dark);
    }
  }

  useEffect(() => {
    toggleColorTheme();
  }, [theme]);

  useEffect(() => {
    retrieve();
  }, [uuid]);
  useEffect(() => {
    setUniqueId(generateAlphanumericId);
  }, []);

  useEffect(() => {
    async function queryInvoicesByStatus(paidStatus) {
      let arr = [];
      const querySnapshot = await getInvoicesByQuery("status", paidStatus);
      if (paidStatus) {
        querySnapshot.docs.forEach((doc) => {
          if (doc.data().status === paidStatus) {
            arr.push(doc.data());
          } else {
            arr = [];
          }
        });
        setInvoicesCollection(arr);
      }
    }

    queryInvoicesByStatus(paidStatus);
  }, [paidStatus]);

  function createNewInvoice(invoice) {
    if (req) {
      //return;
    }
    createInvoice(invoice);
    setUniqueId(generateAlphanumericId);
  }

  async function retrieveInvo(ID) {
    const querySnapshot = await getInvoicesByQuery("ID", ID);
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
    if (req) {
      //  return;
    }
    await updateDoc(docRef, { ...newInvoice });
  }

  const value = {
    show,
    setShow,
    invoicesCollection,
    uuid,
    queryInvoice,
    setStatus,
    setReq,
    paidStatus,
    toggleAlert,
    setToggleAlert,
    formFields,
    setFormFields,
    theme,
    setTheme,
    selectedTheme,
    req,
    createNewInvoice,
    retrieveInvo,
    retrieve,
    deleteInvoices,
    updateCurrentInvoice,
  };

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};
