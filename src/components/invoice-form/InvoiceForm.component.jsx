import { useContext } from "react";
import FormInput from "./FormInput.component";
import {defaultForm} from "../../context/Crud.context";
import { CrudContext } from "../../context/Crud.context";
import {FormContainer, FormSection, Form, FormDiv, FormSection2} from "../Styles/invoiceStyles.js";


function InvoiceForm({edit}) {
  const { createNewInvoice, uuid, formFields, setFormFields } = useContext(CrudContext);



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
      ID,
    projectDescription,
  } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  }
  function saveInvoice(status) {
    createNewInvoice({ ...formFields, ID: uuid, status: status });
    setFormFields(defaultForm);
  }


  return (
    <Form
      onSubmit={(e) => e.preventDefault()}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <FormContainer>
        <FormDiv>
          <h1>{edit}#{edit? ID : uuid }</h1>
          <h2>Bill from</h2>

          <FormInput
            type="text"
            nameTag="street"
            labelTag="Street"
            onChange={handleChange}
            value={street}
          />

          <FormSection>
            <FormInput
              nameTag="city"
              type="text"
              labelTag="City"
              onChange={handleChange}
              value={city}
            />
            <FormInput
              nameTag="postCode"
              onChange={handleChange}
              value={postCode}
              labelTag="Post Code"
              type="number"
            />
            <FormInput
              nameTag="country"
              onChange={handleChange}
              value={country}
              labelTag="Country"
              type="text"
            />
          </FormSection>
        </FormDiv>

        <FormDiv>
          <h2>Bill to</h2>

          <FormInput
            nameTag="clientName"
            onChange={handleChange}
            value={clientName}
            labelTag="Client Name"
            type="text"
          />
          <FormInput
            nameTag="clientEmail"
            onChange={handleChange}
            value={clientEmail}
            labelTag="Client Email"
            type="email"
          />
          <FormInput
            nameTag="clientStreet"
            onChange={handleChange}
            value={clientStreet}
            labelTag="Street Address"
            type="text"
          />

          <FormSection>
            <FormInput
              nameTag="clientCity"
              onChange={handleChange}
              value={clientCity}
              labelTag="City"
              type="text"
            />

            <FormInput
              nameTag="clientPostCode"
              onChange={handleChange}
              value={clientPostCode}
              labelTag="Post code"
              type="number"
            />
            <FormInput
              nameTag="clientCountry"
              onChange={handleChange}
              value={clientCountry}
              labelTag="country"
              type="text"
            />
          </FormSection>
        </FormDiv>

        <FormDiv>
          <FormSection2>
            <FormInput
              nameTag="invoiceDate"
              onChange={handleChange}
              value={invoiceDate}
              labelTag="Invoice Date"
              type="date"
            />

            <FormInput
              nameTag="paymentDate"
              onChange={handleChange}
              value={paymentDate}
              labelTag="Payment Terms"
              type="text"
            />
          </FormSection2>
          <FormInput
            nameTag="projectDescription"
            onChange={handleChange}
            value={projectDescription}
            labelTag="Project Description"
            type="text"
          />
        </FormDiv>
        <h2>item list</h2>

        <FormSection>
          <FormInput
            nameTag="itemName"
            onChange={handleChange}
            value={itemName}
            labelTag="Item Name"
            type="text"
          />
          <FormInput
            nameTag="quantity"
            onChange={handleChange}
            value={quantity}
            labelTag="Qty"
            type="number"
          />
          <FormInput
            nameTag="price"
            onChange={handleChange}
            value={price}
            labelTag="Price"
            type="number"
          />
        </FormSection>

        <button type="submit" onClick={() => saveInvoice("Pending")}>
          save as pending
        </button>
        <button type="submit" onClick={() => saveInvoice("Draft")}>
          save as draft
        </button>
      </FormContainer>
    </Form>
  );
}

export default InvoiceForm;

