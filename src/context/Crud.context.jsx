import { createContext, useEffect, useState } from "react";
import {
  createInvoice,
  getAllInvoices,
  updateInvoice,
  deleteInvoice,
} from "../firebase-utils/firebase";

async function retrieveData(setInvoicesCollection) {
  const invoices = await getAllInvoices();
  setInvoicesCollection(invoices);
}

export function generateAlphanumericId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let idA = "";
  let idB = "";

  for (let i = 0; i < 2; i++) {
    idA += letters.charAt(Math.floor(Math.random() * 27));
  }
  for (let i = 0; i < 4; i++) {
    idB += numbers.charAt(Math.floor(Math.random() * 10));
  }
  const result = idA + idB;
return result
}



export const CrudContext = createContext({
  show: false,
  setShow: () => {},
  invoicesCollection: [],
  invoAdded: false,
  setInvosAdded: () => {},
  createNewInvoice: () => {},
  uuid : ''
});

export const CrudProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [invoicesCollection, setInvoicesCollection] = useState([]);
  const [invoAdded, setInvosAdded] = useState(false);
  const [uuid, setUniqueId] = useState('VG49032');

  useEffect(() => {
    function retrieve() {
      retrieveData(setInvoicesCollection);
    }
   
    retrieve()
  }, [invoAdded]);

  function createNewInvoice(invoice) {
  
    createInvoice(invoice);
    setUniqueId(generateAlphanumericId())
  
  }

 

  const value = {
    show,
    setShow,
    invoicesCollection,
    setInvosAdded,
    createNewInvoice,
    uuid
  };

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};
