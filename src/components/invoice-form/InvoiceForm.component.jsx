import { useContext } from "react";
import FormInput from "./FormInput.component";
import { Formik } from "formik";
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
  const { formFields, setFormFields, setShow } = useContext(CrudContext);

  const { invoId } = useParams();

  let { paymentDate } = formFields;
// TODOS
  // FUNCTION TO CREATE A NEW INVOICE
  // FUNCTION TO UPDATE AN EXISTING INVOICE
  // FUNCTION TO CANCEL THE CREATION OR EDITING
// send the objectData in the adecuate format with formik
  // return (
//     <Formik
//       initialValues={{
//         clientAddress: [
//           {
//             clientStreet: "",
//             clientCountry: "",
//             clientPostCode: "",
//             clientCountry: "",
//           },
//         ],
//         senderAddress: [
//           {
//             street: "",
//             country: "",
//             postCode: "",
//             country: "",
//           },
//         ],
//         status: "",
//         clientEmail: "",
//         clientName: "",
//         description: "",
//         paymentTerms: 0,
//         items: [
//           {
//             itemName: "",
//             price: 0,
//             projectDescription: "",
//             quantity: 0,
//             total: 0,
//           },
//         ],
//       }}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {({
//         values,
// handleChange,
//         handleSubmit,

//         /* and other goodies */
//       }) => (
//         <Form
//           onSubmit={handleSubmit}
//           data-aos="fade-right"
//           data-aos-offset="300"
//           data-aos-easing="ease-in-sine"
//         >
//           <FormContainer>
//             <FormDiv>
//               <h1>
//                 {edit && "Edit "}
//                 {edit ? `#${ID}` : "New Invoice"}
//               </h1>
//               <h2>Bill from</h2>

//               <FormInput
//                 nameTag='senderAddress.street'
//                 labelTag="Street"
               
               
//               />

//               <FormSection>
//                 <FormInput 
//                 nameTag='senderAddress.city'
//                 labelTag="City" 
               
               
//                 />
//                 <FormInput
//                   nameTag='senderAddress.postCode'
//                   labelTag="Post Code"
                 
                 
//                 />
//                 <FormInput 
//                 nameTag='senderAddress.postCode'
//                 labelTag="Country"
//                 value={values.senderAddress.country}
               
//                 />
//               </FormSection>
//          <button type="submit">SUBMIT</button>
//             </FormDiv>


            {/* <FormDiv>
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
          </GroupButtons> */}
            {/* )}  */}
//           </FormContainer>
//         </Form>
//       )}
//     </Formik>
//   );
}

export default InvoiceForm;
