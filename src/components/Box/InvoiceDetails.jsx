import { useEffect, useState } from "react";
import styled from "styled-components";
import Status from "../Status.jsx";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import DeletionAlert from "../DeletionAlert.jsx";
import { ButtonContainer } from "../Button.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context.jsx";

function InvoiceDetails() {
  const { queryInvoice, retrieveInvo, setToggleAlert, toggleAlert } =
    useContext(CrudContext);
  const { invoId } = useParams();
  const { status } = queryInvoice;
  const [stats, setStats] = useState(status);

  const navigate = useNavigate();

  function setStatusToPaid() {
    setStats("Paid");
  }

  useEffect(() => {
    setStats(status);
  }, []);

  useEffect(() => {
    async function getCurrentInvoice() {
      await retrieveInvo(invoId);
    }
    return () => {
      getCurrentInvoice();
    };
  }, [invoId]);

  function showAlert() {
    setToggleAlert(!toggleAlert);
  }
  return (
    <InvoiceContainer>
      <BackButton onClick={() => navigate("/")}>
        <img src={arrowLeft} alt="" />
        Go Back
      </BackButton>

      <InvoiceHeader>
        <span>
          Status <Status>{stats}</Status>
        </span>

        <GroupButtons>
          Edit
          <ButtonContainer delete onClick={showAlert}>
            Delete
          </ButtonContainer>
          <ButtonContainer onClick={setStatusToPaid}>
            Mark as paid
          </ButtonContainer>
        </GroupButtons>
      </InvoiceHeader>

      {toggleAlert && <DeletionAlert />}
      <InvoiceBody>
        <BodyContainer>
          <BodyHeader>
            <div>
              <h3># {queryInvoice.ID}</h3>
              <span>{queryInvoice.projectDescription}</span>
            </div>
            <div>
              <span>{queryInvoice.street}</span>
              <span>{queryInvoice.city} </span>
              <span>{queryInvoice.postCode}</span>
              <span>{queryInvoice.country}</span>
            </div>
          </BodyHeader>

          <BodyData>
            <div>
              <span>Invoice Date</span>
              <h3>{queryInvoice.invoiceDate}</h3>
              <span>Payment Due</span>
              <h3>{queryInvoice.paymentDate}</h3>
            </div>
            <div>
              <span>Bill to</span>

              <h3>{queryInvoice.clientName}</h3>
              <ul>
                <li>{queryInvoice.clientStreet}</li>
                <li>{queryInvoice.clientCity}</li>
                <li>{queryInvoice.clientPostCode}</li>
                <li>{queryInvoice.clientCountry}</li>
              </ul>
            </div>
            <div>
              <span>Sent to</span>
              <h3>{queryInvoice.clientEmail}</h3>
            </div>
          </BodyData>
          <BodyItem>
            <ul>
              <li>Item Name</li>
              <li>QTY.</li>
              <li>Price</li>
              <li>Total</li>
            </ul>

            <div>
              <h3>Banner Design</h3>
              <span>{queryInvoice.quantity}</span>
              <span>£ {queryInvoice.price}</span>
              <h3>£ {queryInvoice.quantity * queryInvoice.price}</h3>
            </div>
          </BodyItem>
        </BodyContainer>
        <Amount>
          <span>Amount Due</span>
          <h2>£ {queryInvoice.quantity * queryInvoice.price}</h2>
        </Amount>
      </InvoiceBody>
    </InvoiceContainer>
  );
}

export default InvoiceDetails;
const InvoiceContainer = styled.div`
  width: 80%;
  max-height: 600px;

  li {
    color: var(--blue);
  }
  span {
    color: var(--blue);
  }
`;
const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--black);
  gap: 0.5rem;
  display: flex;
  margin: 1rem 0;
  cursor: pointer;
`;
const InvoiceBody = styled.div`
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  background-color: var(--white);
  border-radius: 0.5rem;

  padding-bottom: 4rem;
  overflow: hidden;
  position: relative;
`;
const BodyContainer = styled.div`
  padding: 2.5rem;
`;
const Amount = styled.div`
  background-color: var(--darkPurple);
  color: var(--white);
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  width: 100%;
  bottom: 0;

  h2 {
    color: var(--white);
  }
`;
const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: column;

    span {
      text-align: right;
    }
  }
`;
const InvoiceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 0.5rem;
  background-color: var(--white);
  padding: 1rem;
  width: 100%;

  margin-bottom: 1rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
const GroupButtons = styled.div`
  display: flex;
  align-items: center;
`;

const BodyData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  span {
    color: var(--blue);
  }
  li {
    color: var(--blue);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const BodyItem = styled.div`

  display: flex;
  
  flex-direction: column;
justify-content: center;
 ul {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 1rem;
   margin: 1rem 0;
 }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

  
`;
