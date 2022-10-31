import styled from "styled-components";
import arrow from "../../assets/icon-arrow-right.svg";
import { useState } from "react";
import Status from "../Status.jsx";
function DropInvoice({ invoiceData }) {
  let { status } = invoiceData;
  const [stats, setStats] = useState(status);

  function setStatusToPaid() {
    setStats("Paid");
  }
  return (
    <Summary>
      <Item>#{invoiceData.ID}</Item>
      <span>Due {invoiceData.invoiceDate}</span>
      <span>{invoiceData.clientName}</span>
      <Item>£{invoiceData.price}</Item>
      <Status changeStatus={setStatusToPaid}>{stats}</Status>
      <figure>
        <img src={arrow} alt="" />
      </figure>
    </Summary>
  );
}

export default DropInvoice;

const Summary = styled.summary`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem;
  border-radius: 1rem;
  padding: 1rem;

  span {
    text-transform: capitalize;
    width: calc(100% / 5);
  }
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Item = styled.h3`
  width: calc(100% / 5);
`;
