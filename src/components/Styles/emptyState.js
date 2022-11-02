import styled from "styled-components";

export const Figure = styled.figure`
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