import arrow from "../../assets/icon-arrow-right.svg";
import {useState} from "react";
import Status from "../Shared/Status.jsx";
import { useNavigate } from "react-router-dom";
import {Summary,Item, SecCont} from "../Styles/invoiceStyles.js";
function InvoiceSummary({ invoiceData }) {
  const { status, ID } = invoiceData;
  const [stats, setStats] = useState(status);
  const navigate = useNavigate();
  function setStatusToPaid() {
    setStats("Paid");
  }
  function goToQueryInvoice() {
    navigate(`${ID}`);
  }
  return (
<Summary onClick={goToQueryInvoice}>
  <SecCont>
    <Item>#{ID}</Item>
    <span>Due {invoiceData.invoiceDate}</span>
    <Item>£{invoiceData.price}</Item>
  </SecCont>
<SecCont>
  <span>{invoiceData.clientName}</span>
  <Status changeStatus={setStatusToPaid}>{status}</Status>
  <figure >
    <img src={arrow} alt="" />
  </figure>

</SecCont>


    </Summary>
  );
}

export default InvoiceSummary;


