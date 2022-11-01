import React from "react";
import empty from "../assets/illustration-empty.svg";
import styled from "styled-components";
function EmptyState() {
  return (
    <Figure>
      <img src={empty} alt="" />
      <figcaption>
        <h2>There is nothing here</h2>
        <p>
          Create an invoice by clicking the New Invoice button and get started
        </p>
      </figcaption>

    </Figure>
  );
}

export default EmptyState;
const Figure = styled.figure`
display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
  text-align: center;
  
  
  figcaption {
   h2 {
     margin: 2rem 0;
   }
    p {
      
      max-width: 170px;
      color: var(--blue);
    }
  }
`;
