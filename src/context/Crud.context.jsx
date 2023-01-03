import { createContext, useEffect, useState } from "react";
import { light, dark } from "../components/Styles/themes.js";
import axios from "axios";


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
  toggleAlert: false,
  formFields: defaultForm,
  theme: true,
  selectedTheme: light,
  req: true,
  setShow: () => {},
  setToggleAlert: () => {},
  setFormFields: () => {},
  setTheme: () => {},
  setReq: () => {},
});

export const CrudProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [invoicesCollection, setInvoicesCollection] = useState([]);
  const [toggleAlert, setToggleAlert] = useState(false);
  const [formFields, setFormFields] = useState(defaultForm);
  const [theme, setTheme] = useState(true);
  const [selectedTheme, toggleTheme] = useState(light);
  
  
   const getInvoices = async() => {
    const invoices = await axios.get('https://invoice-api.up.railway.app/api/invoices')
    setInvoicesCollection(invoices.data.invoices);
  }


  useEffect(() => {
   getInvoices()
  }, []);
  
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
   getInvoices
 
  };

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};
