import styled from "styled-components";
import arrow from "../../assets/icon-arrow-right.svg";
import { useState } from "react";
import Status from "../Status.jsx";
import {useParams, useNavigate} from "react-router-dom";
function InvoiceSummary({ invoiceData }) {
  let { status, ID } = invoiceData;
  const [stats, setStats] = useState(status);
// const {invoId} = useParams()
    const navigate = useNavigate()
  function setStatusToPaid() {
    setStats("Paid");
  }
  return (
    <Summary onClick={navigate(`/${ID}`)}>
      <Item>#{ID}</Item>
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

export default InvoiceSummary;

const Summary = styled.summary`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);

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
