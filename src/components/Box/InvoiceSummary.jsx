import arrow from "../../assets/icon-arrow-right.svg";
import { useState } from "react";
import Status from "../Shared/Status.jsx";
import { useNavigate } from "react-router-dom";
import { Summary, Item, SecCont } from "../Styles/invoiceStyles.js";
function InvoiceSummary({ invoiceData }) {
  const { status, ID, items } = invoiceData;
  const navigate = useNavigate();
  const goToQueryInvoice = () => {
    navigate(`${ID}`);
  };
  return (
    <Summary onClick={goToQueryInvoice}>
      <SecCont>
        <Item>#{ID}</Item>
        <span>Due {invoiceData.createdAt}</span>
        <Item>£{items.reduce((acc, total) => acc + total.total, 0)}</Item>
      </SecCont>
      <SecCont>
        <span>{invoiceData.clientName}</span>
        <Status >{status}</Status>
        <figure>
          <img src={arrow} alt="arrow" />
        </figure>
      </SecCont>
    </Summary>
  );
}

export default InvoiceSummary;
