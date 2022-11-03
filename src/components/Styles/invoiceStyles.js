import styled from "styled-components";

export const InvoiceContainer = styled.div`
  width: 80%;
  max-height: 600px;

  h3 {
    color: ${(props) => props.theme.fontColor};
  }
  li {
    color: ${(props) => props.theme.subsColor};
  }
  span {
    color: ${(props) => props.theme.subsColor};
  }
`;
export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.fontColor};
  gap: 0.5rem;
  display: flex;
  margin: 1rem 0;
  cursor: pointer;
`;
export const InvoiceBody = styled.div`
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  background-color: ${(props) => props.theme.main};
  border-radius: 0.5rem;

  padding-bottom: 4rem;
  overflow: hidden;
  position: relative;
`;
export const BodyContainer = styled.div`
  padding: 2.5rem;
`;
export const Amount = styled.div`
  background-color: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.fontColor};
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
export const BodyHeader = styled.div`
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
export const InvoiceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.main};
  padding: 1rem;
  width: 100%;

  margin-bottom: 1rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.subsColor};
  }
`;
export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.fontColor}; ;
`;
export const BodyData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  span {
    color: ${(props) => props.theme.subsColor};
  }
  li {
    color: ${(props) => props.theme.subsColor};
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;
export const BodyItem = styled.div`

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
export const Summary = styled.summary`
  background-color: ${(props) => props.theme.main};
  display: flex;
  margin: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  span {
    text-transform: capitalize;
    width: calc(100% / 5);
    text-align: center;
    color: ${(props) => props.theme.subsColor};
  }
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
export const Item = styled.h3`
  width: calc(100% / 5);
  color: ${(props) => props.theme.fontColor};
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 0.5rem;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${(props) => props.theme.subsColor};
  padding: 0.5rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 0 1rem 1rem 0;
  z-index: 5;
  margin-left: -10px;
  width: 100%;
  max-width: 450px;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.invoiceBg};
  height: 100vh;
  overflow: hidden;

  h1 {
    color: ${(props) => props.theme.fontColor};
  }
  h2 {
    font-size: 0.9rem;
    color: var(--purple);
    font-weight: bold;
  }
`;
export const FormSection = styled.div`
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
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormSection2 = styled(FormDiv)`
  flex-direction: row;
  justify-content: space-between;
`;
export const FormContainer = styled.div`
  overflow-y: scroll;
  padding: 1rem;
  h1 {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;
