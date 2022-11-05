import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 5rem;
  overflow-y: scroll;
  
  background-color:  ${props => props.theme.bg};
  h1 {
    color:${props => props.theme.fontColor} ;
  }
  span {
    color: ${props => props.theme.subsColor};
    font-size: 0.7rem;
    line-height: 0.9rem;
    letter-spacing: 0.25px;
  }
  @media (max-width : 865px) {
 padding: 0;
  }
`;
export const Group = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  position: relative;

  width: 50%;

`;
export const ShortCount = styled.div``
export const Count = styled.div`

`
export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem 0;
  ${ShortCount}{
   display: none;
  }

  @media (max-width : 865px) {
    padding: 4rem 0;
  }

  @media (max-width : 568px) {
  ${ShortCount}{
      display: block;
    }
    ${Count}{
      display: none;
    }
  }
`;

