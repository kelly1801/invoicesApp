import styled from "styled-components";
import Status from "../Status.jsx";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import { ButtonContainer } from "../Button.jsx";
import {Link} from "react-router-dom";
function InvoiceDetails() {
  return (
    <InvoiceContainer>
      <Link to='/'>
      <BackButton>
        <img src={arrowLeft} alt="" />
        Go Back
      </BackButton>
      </Link>
      <InvoiceHeader>
        <span>
          Status <Status>Pending</Status>
        </span>

        <GroupButtons>
          Edit
          <ButtonContainer delete>Delete</ButtonContainer>
          <ButtonContainer>Mark as paid</ButtonContainer>
        </GroupButtons>
      </InvoiceHeader>

      <InvoiceBody>
        <BodyContainer>
          <BodyHeader>
            <div>
              <h3># AZ0817</h3>
              <span>Graphic design</span>
            </div>
            <div>
              <span>19 Union Terrace</span>
              <span>London </span>
              <span>E1 3EZ</span>
              <span>United Kingdom</span>
            </div>
          </BodyHeader>

          <BodyData>
            <div>
              <span>Invoice Date</span>
              <h3>21 Aug 2021</h3>
              <span>Payment Due</span>
              <h3>20 Sep 2021</h3>
            </div>
            <div>
              <span>Bill to</span>

              <h3>Alex Grim</h3>
              <ul>
                <li>84 Church Way</li>
                <li> Bradford</li>
                <li> BD1 9PB</li>
                <li> United Kingdom</li>
              </ul>
            </div>
            <div>
              <span>Sent to</span>
              <h3>alexgrim@mail.com</h3>
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
              <span>2</span>
              <span>£ 156.00</span>
              <h3>£ 156.00</h3>
            </div>
          </BodyItem>
        </BodyContainer>
        <Amount>
          <span>Amount Due</span>
          <h2>£ 556.00</h2>
        </Amount>
      </InvoiceBody>
    </InvoiceContainer>
  );
}

export default InvoiceDetails;
const InvoiceContainer = styled.div`
  width: 80%;
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
