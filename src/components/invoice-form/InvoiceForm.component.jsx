import { useContext } from "react";
import FormInput from "./FormInput.component";
import { defaultForm } from "../../context/Crud.context";
import { CrudContext } from "../../context/Crud.context";
import {
  FormContainer,
  FormSection,
  Form,
  FormDiv,
  FormSection2,
  Label,
} from "../Styles/invoiceStyles.js";
import { Button } from "../Styles/GlobalStyledComponents.js";
import { GroupButtons } from "../Styles/GlobalStyledComponents.js";
import { useParams } from "react-router-dom";
function InvoiceForm({ edit }) {
  const {
    uuid,
    formFields,
    queryInvoice,
    createNewInvoice,
    setFormFields,
    updateCurrentInvoice,
    setShow,
    req,
    setReq,
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
    itemName,
    quantity,
    price,
    ID,
    projectDescription,
  } = formFields;
  let { paymentDate } = formFields;
  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  }
  function saveInvoice(status) {
    if (status === "Draft") {
      setReq(false);
    } else if (status === "Pending") {
      setReq(true);
    }
    createNewInvoice({ ...formFields, ID: uuid, status: status });
    setFormFields(defaultForm);
  }
  function updateNewInvoice() {
    updateCurrentInvoice(invoId, { ...formFields });
  }
  function cancelUpdate() {
    setFormFields(queryInvoice);
    setShow(false);
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
          <h1>
            {edit && "Edit "}
            {edit ? `#${ID}` : "New Invoice"}
          </h1>
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
              labelTag="City"
              onChange={handleChange}
              value={city}
            />
            <FormInput
              nameTag="postCode"
              onChange={handleChange}
              value={postCode}
              labelTag="Post Code"
            />
            <FormInput
              nameTag="country"
              onChange={handleChange}
              value={country}
              labelTag="Country"
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
          />

          <FormSection>
            <FormInput
              nameTag="clientCity"
              onChange={handleChange}
              value={clientCity}
              labelTag="City"
            />

            <FormInput
              nameTag="clientPostCode"
              onChange={handleChange}
              value={clientPostCode}
              labelTag="Post code"
            />
            <FormInput
              nameTag="clientCountry"
              onChange={handleChange}
              value={clientCountry}
              labelTag="country"
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

            <Label>
              Payment Terms
              <select
                name="paymentDate"
                value={paymentDate}
                onChange={handleChange}
              >
                <option value={1}>Next 1 Days</option>
                <option value={7}>Next 7 Days</option>
                <option value={14}>Next 14 Days</option>
                <option value={30}>Next 30 Days</option>
              </select>
            </Label>
          </FormSection2>
          <FormInput
            nameTag="projectDescription"
            onChange={handleChange}
            value={projectDescription}
            labelTag="Project Description"
          />
        </FormDiv>
        <h2>item list</h2>

        <FormSection>
          <FormInput
            nameTag="itemName"
            onChange={handleChange}
            value={itemName}
            labelTag="Item Name"
          />
          <FormInput
            nameTag="quantity"
            onChange={handleChange}
            value={quantity}
            labelTag="Qty"
            type="number"
            min={1}
          />
          <FormInput
            nameTag="price"
            onChange={handleChange}
            value={price}
            labelTag="Price"
            type="number"
            min={1}
          />
        </FormSection>

        {edit ? (
          <GroupButtons>
            <Button discard onClick={cancelUpdate}>
              Cancel
            </Button>
            <Button onClick={updateNewInvoice}>Save Changes</Button>
          </GroupButtons>
        ) : (
          <GroupButtons>
            <Button discard onClick={cancelUpdate}>
              Discard
            </Button>

            <div>
              <Button draft type="submit" onClick={() => saveInvoice("Draft")}>
                save as draft
              </Button>
              <Button type="submit" onClick={() => saveInvoice("Pending")}>
                Save & send
              </Button>
            </div>
          </GroupButtons>
        )}
      </FormContainer>
    </Form>
  );
}

export default InvoiceForm;
