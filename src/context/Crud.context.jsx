import { createContext, useEffect, useState } from "react";
import { light, dark } from "../components/Styles/themes.js";
import axios from "axios";

export const defaultForm = {
  clientAddress: [
    {
      clientStreet: "",
      clientCountry: "",
      clientPostCode: "",
      clientCountry: "",
    },
  ],
  senderAddress: [
    {
      street: "",
      country: "",
      postCode: "",
      country: "",
    },
  ],
  status: "",
  clientEmail: "",
  clientName: "",
  description: "",
  paymentTerms: 0,
  items: [
    {
      itemName: "",
      price: 0,
      projectDescription: "",
      quantity: 0,
      total: 0,
    },
  ],
};
export const CrudContext = createContext({
  show: false,
  invoicesCollection: [],
  toggleAlert: false,
  formFields: defaultForm,
  theme: true,
  selectedTheme: light,
  setShow: () => {},
  setToggleAlert: () => {},
  setFormFields: () => {},
  setTheme: () => {},
  getInvoicesByStatus: () => {},
  getInvoices: () => {},
  updateInvoice: () => {},
  deleteInvoice: () => {}
});

export const CrudProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [invoicesCollection, setInvoicesCollection] = useState([]);
  const [toggleAlert, setToggleAlert] = useState(false);
  const [formFields, setFormFields] = useState(defaultForm);
  const [theme, setTheme] = useState(true);
  const [selectedTheme, toggleTheme] = useState(light);

  const getInvoices = async () => {
    const invoices = await axios.get(
      "https://invoiceapi.up.railway.app/api/invoices/"
    );
    setInvoicesCollection(invoices.data.invoices);
  };

  const getInvoicesByStatus = async (status) => {
    const invoices = await axios.get(
      `https://invoiceapi.up.railway.app/api/invoices/filter/${status}`
    );
    setInvoicesCollection(invoices.data.invoices);
  };

  const getInvoiceById = async (id) => {
    const invoice = await axios.get(
      `https://invoiceapi.up.railway.app/api/invoices/${id}`
    );
    return invoice;
  };
  const updateInvoice = async(id, body) => {
    const {data} = await axios.put(
      `https://invoiceapi.up.railway.app/api/invoices/${id}`,{...body}
    );
 
   
    return await data.invoice;
  };

  const deleteInvoice = async(id) => {
  return await axios.delete(
      `https://invoiceapi.up.railway.app/api/invoices/${id}`
    );
  }
  useEffect(() => {
    getInvoices();
  }, [invoicesCollection]);

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

  const value = {
    show,
    setShow,
    invoicesCollection,
    toggleAlert,
    setToggleAlert,
    formFields,
    setFormFields,
    theme,
    setTheme,
    selectedTheme,
    getInvoices,
    getInvoiceById,
    getInvoicesByStatus,
    updateInvoice,
    deleteInvoice
  };

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};
