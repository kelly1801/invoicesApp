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
  const {
    queryInvoice,
    retrieveInvo,
    setToggleAlert,
    toggleAlert,
    updateCurrentInvoice,
    formFields,
    setFormFields,
    show,
    setShow,
  } = useContext(CrudContext);
  const { invoId } = useParams();
  const {
    street,
    city,
    postCode,
    country,
    clientName,
    clientEmail,
    clientCity,
    clientCountry,
    clientPostCode,
    clientStreet,
    invoiceDate,
    paymentDate,
    itemName,
    quantity,
    price,
    projectDescription,
    status,
    ID,
  } = queryInvoice;
  const [stats, setStats] = useState(status);
  const navigate = useNavigate();

  function setStatusToPaid() {
    setStats("Paid");
    updateCurrentInvoice(invoId, { ...formFields, status: "Paid" });
  }

  useEffect(() => {
    async function getCurrentInvoice() {
      await retrieveInvo(invoId);
    }
    return () => {
      getCurrentInvoice();
    };
  }, [invoId, queryInvoice]);

  function showAlert() {
    setToggleAlert(!toggleAlert);
  }

  function updateFields() {
    setFormFields(queryInvoice);
    setShow(true);
  }
  function updateNewInvoice() {
    updateCurrentInvoice(invoId, { ...formFields });
  }

  return (
    <InvoiceContainer>
      <BackButton onClick={() => navigate("/")}>
        <img src={arrowLeft} alt="" />
        Go Back
      </BackButton>

      <InvoiceHeader onClick={updateNewInvoice}>
        <span>
          Status <Status>{stats || status}</Status>
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
              <h3 onClick={updateFields}># {ID}</h3>
              <span>{projectDescription}</span>
            </div>
            <div>
              <span>{street}</span>
              <span>{city} </span>
              <span>{postCode}</span>
              <span>{country}</span>
            </div>
          </BodyHeader>

          <BodyData>
            <div>
              <span>Invoice Date</span>
              <h3>{invoiceDate}</h3>
              <span>Payment Due</span>
              <h3>{paymentDate}</h3>
            </div>
            <div>
              <span>Bill to</span>

              <h3>{clientName}</h3>
              <ul>
                <li>{clientStreet}</li>
                <li>{clientCity}</li>
                <li>{clientPostCode}</li>
                <li>{clientCountry}</li>
              </ul>
            </div>
            <div>
              <span>Sent to</span>
              <h3>{clientEmail}</h3>
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
              <h3>{itemName}</h3>
              <span>{quantity}</span>
              <span>£ {price}</span>
              <h3>£ {quantity * price}</h3>
            </div>
          </BodyItem>
        </BodyContainer>
        <Amount>
          <span>Amount Due</span>
          <h2>£ {quantity * price}</h2>
        </Amount>
      </InvoiceBody>
    </InvoiceContainer>
  );
}

export default InvoiceDetails;
const InvoiceContainer = styled.div`
  width: 80%;
  max-height: 600px;
h3 {
  color : ${(props) => props.theme.fontColor};
}
  li {
    color:  ${(props) => props.theme.subsColor};
  }
  span {
    color: ${(props) => props.theme.subsColor};;
  }
`;
const BackButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.fontColor};;
  gap: 0.5rem;
  display: flex;
  margin: 1rem 0;
  cursor: pointer;
`;
const InvoiceBody = styled.div`
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  background-color: ${props => props.theme.main};
  border-radius: 0.5rem;

  padding-bottom: 4rem;
  overflow: hidden;
  position: relative;
`;
const BodyContainer = styled.div`
  padding: 2.5rem;
`;
const Amount = styled.div`
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.fontColor};
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  width: 100%;
  bottom: 0;

  h2 {
    color: ${props => props.theme.fontColor};
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
  background-color: ${props => props.theme.main};
  padding: 1rem;
  width: 100%;

  margin-bottom: 1rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.subsColor};;
  }
`;
const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.fontColor};;
`;

const BodyData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  span {
    color: ${(props) => props.theme.subsColor};;
  }
  li {
    color: ${(props) => props.theme.subsColor};;
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
