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
  InvoiceFooter,
} from "../Styles/invoiceStyles.js";
function InvoiceDetails() {
  const {
    setToggleAlert,
    toggleAlert,
    formFields,
    setFormFields,
    getInvoiceById,
    setShow,
  } = useContext(CrudContext);
  const { invoId } = useParams();
  const [queryInvoice, setQueryInvoice] = useState([]);

  const navigate = useNavigate();
  const {
    clientAddress,
    paymentTerms,
    senderAddress,
    status,
    ID,
    clientEmail,
    clientName,
    createdAt,
    description,
    items
  } = queryInvoice;

  console.log(items);
  const [stats, setStats] = useState(status);
  function setStatusToPaid() {
    setStats("Paid");
    updateCurrentInvoice(invoId, { ...formFields, status: "Paid" });
  }

  useEffect(() => {
    const queryInvoiceById = async () => {
      const { data } = await getInvoiceById(invoId);
      setQueryInvoice(...data.invoice);
    };

    queryInvoiceById();
  }, [invoId]);

  function showAlert() {
    setToggleAlert(!toggleAlert);
  }

  function updateFields() {
    setFormFields(queryInvoice);
    setShow(true);
  }

  return (
    <InvoiceContainer>
      <BackButton onClick={() => navigate("/")}>
        <img src={arrowLeft} alt="" />
        Go Back
      </BackButton>

      <InvoiceHeader>
        <span>
          <Status>{stats || status}</Status>
        </span>

        <GroupButtons>
          <Button discard onClick={updateFields}>
            {" "}
            Edit
          </Button>
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
              <span>{description}</span>
            </div>
            <div>
              <span>{senderAddress?.street}</span>
              <span>{senderAddress?.city} </span>
              <span>{senderAddress?.postCode}</span>
              <span>{senderAddress?.country}</span>
            </div>
          </BodyHeader>

          <BodyData>
            <div>
              <span>Invoice Date</span>
              <h3>{createdAt}</h3>
              <span>Payment Due</span>
              <h3>{paymentTerms}</h3>
            </div>
            <div>
              <span>Bill to</span>

              <h3>{clientName}</h3>
              <ul>
                <li>{clientAddress?.street}</li>
                <li>{clientAddress?.city}</li>
                <li>{clientAddress?.postCode}</li>
                <li>{clientAddress?.country}</li>
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

           
            {items?.map((item, index) => (
              <div key={index}>
                 <span>{item?.itemName || '#'}</span>
                <span>{item?.quantity}</span>
                <span>£ {item?.price}</span>
                <span>£ {item?.total}</span>
              </div>
            ))}
          </BodyItem>

          <Amount>
            <span>Amount Due</span>
            {items?.map((item, index) => (
             
             <h2 key={index}>£ {item?.total}</h2>
            ))}
            
          </Amount>
        </InvoiceFooter>
      </InvoiceBody>
    </InvoiceContainer>
  );
}

export default InvoiceDetails;
