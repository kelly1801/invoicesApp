import styled from "styled-components";
import arrow from "../../assets/icon-arrow-right.svg";
import { useContext, useState } from "react";
import Status from "../Shared/Status.jsx";
import { useNavigate } from "react-router-dom";
import { CrudContext } from "../../context/Crud.context.jsx";
import {Summary,Item} from "../Styles/invoiceStyles.js";
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
      <Item>#{ID}</Item>
      <span>Due {invoiceData.invoiceDate}</span>
      <span>{invoiceData.clientName}</span>
      <Item>£{invoiceData.price}</Item>
      <Status changeStatus={setStatusToPaid}>{status}</Status>
      <figure >
        <img src={arrow} alt="" />
      </figure>
    </Summary>
  );
}

export default InvoiceSummary;


