import styled from "styled-components";
import Status from "../Shared/Status.jsx";
import {Fragment} from "react";

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


  @media (max-width : 865px) {
   width: 100%;
    max-height: unset;

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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BodyContainer = styled.div`
  padding: 2rem;
`;
export const InvoiceFooter = styled.div`
  position: relative;
  display: flex;
  bottom: ${(props) => props.theme.bottom};
  flex-direction: column;
  width: 100%;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.main};
  max-width: ${(props) => props.theme.mWidth};
  overflow: hidden;
  margin: ${(props) => props.theme.margin};
  padding: 0;
  box-shadow: ${(props) => props.theme.shadow};


  @media (max-width : 865px) {
   
   max-width: ${(props) => props.theme.amountWidth};

  }
`;
export const Amount = styled.div`
  background-color: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;

  h2 {
    color: var(--white);
  }
`;
export const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    span {
      text-align: right;
    }
  }
`;
export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.fontColor}; ;
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
  @media (max-width : 568px) {
    ${GroupButtons}{
      background-color: ${(props) => props.theme.bgColor};;
      position: absolute;
      bottom: 0;
      width: 100%;
      max-width: 390px;
      padding: 1rem 3.5rem;
      border-radius: 0.5rem;
justify-content: flex-end;

    }

    }
`;

export const BodyData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
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
  padding: 0 2rem;
  width: 100%;
 
  ul {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    justify-items: center;
    text-align: left;
    gap: 1rem;
    margin: 1rem 0;
    
    li {
      width: 5rem;
      text-align: center
       }
     }
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 1rem;
    margin: 2rem 0;
    
    span {
      margin: 0 auto;
      width: 5rem;
      text-align: center;
    }
`;
export const Item = styled.h3`
  width: calc(100% / 3);
  color: ${(props) => props.theme.fontColor};
`;


export const SecCont = styled.div`

`
export const Summary = styled.summary`
  background-color: ${(props) => props.theme.main};
  display: flex;
  margin: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${SecCont}{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;    
  
  ;}
  
  span {
    text-transform: capitalize;
    text-align: center;
    color: ${(props) => props.theme.subsColor};
    width: calc(100% / 2);
  }
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width : 568px) { 
   
padding: 0.5rem;
    margin-right:0 ;

    ${SecCont}{
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: center;
      width: max-content;
      
      
      div {
        max-width: 5rem;
        margin: 0.5rem 0;
      }
  }
    figure{
display: none}
  }

   
  }
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

  @media (max-width : 865px) {
    height: calc(100vh - 3rem);
    margin-top: 3rem;
    
  }

  @media (max-width: 568px) {
position: absolute;
    max-width: 380px;
  }
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
  align-items: center;
  select {
    outline: none;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 0.5rem;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.fontColor};
    height: 2.3rem;
    
  }
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
