import styled from "styled-components";
import arrow from "../../assets/icon-arrow-right.svg";
import { useContext, useState } from "react";
import Status from "../Status.jsx";
import { useNavigate } from "react-router-dom";
import { CrudContext } from "../../context/Crud.context.jsx";
function InvoiceSummary({ invoiceData }) {
  const { status, ID } = invoiceData;
  const { paidStatus } = useContext(CrudContext);
  const [stats, setStats] = useState(status);

  const navigate = useNavigate();
  function setStatusToPaid() {
    setStats("Paid");
  }
  function goToQueryInvoice() {
    navigate(`${ID}`);
  }
  return (
    <Summary>
      <Item>#{ID}</Item>
      <span>Due {invoiceData.invoiceDate}</span>
      <span>{invoiceData.clientName}</span>
      <Item>£{invoiceData.price}</Item>
      <Status changeStatus={setStatusToPaid}>{paidStatus || stats}</Status>
      <figure onClick={goToQueryInvoice}>
        <img src={arrow} alt="" />
      </figure>
    </Summary>
  );
}

export default InvoiceSummary;

const Summary = styled.summary`
  background-color: ${props => props.theme.main};
  display: flex;
  margin: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  align-items: center;
  justify-content: space-around;

  span {
    text-transform: capitalize;
    width: calc(100% / 5);
    text-align: center;
    color: ${props => props.theme.subsColor}
  }
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
const Item = styled.h3`
  width: calc(100% / 5);
 color: ${props => props.theme.fontColor}
`;
