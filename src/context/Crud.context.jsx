import { async } from "@firebase/util";
import { createContext, useEffect, useState } from "react";
import { createInvoice, getAllInvoices, updateInvoice, deleteInvoice} from "../firebase-utils/firebase";


async function retrieveData(setInvoicesCollection) {
  
  const invoices = await getAllInvoices()
  setInvoicesCollection(invoices)

}

export const CrudContext = createContext({
show: false,
setShow: () => {},
invoicesCollection: [],
invoAdded: false,
setInvosAdded: () => {},
createNewInvoice: () => {},

})

export const CrudProvider = ({children}) => {

const [show, setShow] = useState(false)
const [invoicesCollection, setInvoicesCollection] = useState([])
const [invoAdded, setInvosAdded] = useState(false)

useEffect(() => {
  
  function retrieve() {
    retrieveData(setInvoicesCollection)
  }
  return () => {
    retrieve()
  }
}, [invoAdded])

function createNewInvoice(invoice) {
   createInvoice(invoice)
}



const value  = { show, setShow, invoicesCollection, setInvosAdded, createNewInvoice};
 

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
}