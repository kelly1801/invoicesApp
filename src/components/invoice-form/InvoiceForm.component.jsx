import { useState } from "react";
import FormInput from "./FormInput.component";
import styled from "styled-components";
import { createPost } from "../../firebase-utils/firebase";

const defaultForm = {
  street: "",
  city: "",
  postCode: "",
  country: "",
  clientName: "",
  clientEmail: "",
  clientStreet: "",
  clientCity: "",
  clientPostCode: "",
  clientCountry: "",
  invoiceDate: "",
  paymentDate: "",
  itemName: "",
  quantity: "",
  price: "",
  projectDescription: "",
  
};

function InvoiceForm() {
  const [formFields, setFormFields] = useState(defaultForm);
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
   
  } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
     
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formFields)
  createPost(formFields)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormDiv>
        <h2>Billed from</h2>

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
        <h2>Billed to</h2>

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

      <button type="submit">submit</button>
    </Form>
  );
}

export default InvoiceForm;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  border-radius: 1rem;
  width: 400px;
  padding: 1rem;
`;
const FormSection = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
input {
  max-width: 5rem;
  margin: 0.5rem 0;
}
 
  
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
`;
const FormSection2 = styled(FormDiv)`
  flex-direction: row;
  justify-content: space-between;
 

`;
