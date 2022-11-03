import { useEffect, useState } from "react";
import Status from "../Shared/Status.jsx";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import DeletionAlert from "./DeletionAlert.jsx";
import { Button } from "../Styles/GlobalStyledComponents.js";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context.jsx";
import {
  InvoiceContainer,
  BodyContainer,
  Amount,
  BodyData,
  BodyItem,
  BodyHeader,
  InvoiceHeader,
  InvoiceBody,
  BackButton,
  GroupButtons,
    InvoiceFooter
} from "../Styles/invoiceStyles.js";
function InvoiceDetails() {
  const {
    queryInvoice,
    retrieveInvo,
    setToggleAlert,
    toggleAlert,
    updateCurrentInvoice,
    formFields,
    setFormFields,
      setShow
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
    setShow(true)

  }



  return (
    <InvoiceContainer>
      <BackButton onClick={() => navigate("/")}>
        <img src={arrowLeft} alt="" />
        Go Back
      </BackButton>

      <InvoiceHeader>
        <span>
          Status <Status>{stats || status}</Status>
        </span>

        <GroupButtons>
          <Button discard onClick={updateFields}> Edit</Button>
          <Button delete onClick={showAlert}>
            Delete
          </Button>
          <Button onClick={setStatusToPaid}>Mark as paid</Button>
        </GroupButtons>
      </InvoiceHeader>

      {toggleAlert && <DeletionAlert />}
      <InvoiceBody>
        <BodyContainer>
          <BodyHeader>
            <div>
              <h3># {ID}</h3>
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

        </BodyContainer>
        <InvoiceFooter>

          <BodyItem>
            <ul>
              <li>Item Name</li>
              <li>QTY.</li>
              <li>Price</li>
              <li>Total</li>
            </ul>

            <div>
              <span>{itemName}</span>
              <span>{quantity}</span>
              <span>£ {price}</span>
              <span>£ {quantity * price}</span>
            </div>
          </BodyItem>

          <Amount>
            <span>Amount Due</span>
            <h2>£ {quantity * price}</h2>
          </Amount>
        </InvoiceFooter>

      </InvoiceBody>
    </InvoiceContainer>
  );
}

export default InvoiceDetails;
