import styled, { css } from "styled-components";

export const BtnText = styled.h4``
export const BtnShortText = styled.h4``
export const Button = styled.button`
  background-color: var(--purple);
  color: var(--white);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1.5rem;
  margin-left: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--palePurple);
  }

  ${(props) =>
    props.delete &&
    css`
      background-color: var(--red);
      &:hover {
        background-color: var(--lightRed);
      }
    `}

  ${(props) =>
    props.draft &&
    css`
      background-color: ${(props) => props.theme.draftBtn};
      color: ${(props) => props.theme.draftFont};
      &:hover {
        background-color: var(--opacPurple);
      }
      
    `}

  ${(props) =>
      props.discard &&
      css`
      background: ${(props) => props.theme.discardBtn};
      color: var(--grayPurple);
       
        margin-left: 0;
      &:hover {
        background-color: var(--grayPurple);
        color: var(--white);
      }
    `}

  div {
    background-color: var(--white);
    border-radius: 50%;
    padding: 0.4rem;
    margin-left: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${BtnShortText}{
    display: none;
  }
  ${BtnText}{
    display: block;
  }
  

  @media (max-width : 568px) {
    ${BtnShortText}{
      display: block;
    }
    ${BtnText}{
      display: none;
    }
  }
`;
export const Bar = styled.div`
  background-color: #1e2139;
  display: flex;
  z-index: 6;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 7rem;
  border-radius: 0 0.7rem 0.7rem 0;
  height: 100vh;
  
  @media (max-width : 865px) {
   flex-direction: row;
    position: absolute;
    top: 0;
    height: 3rem;
    width: 100%;
    max-width: unset;
  overflow: hidden;
    border-radius: 0 ;
  }
`;
export const Icon = styled.figure`
  background-color: #7c5dfa;
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.7rem 0.7rem 0;
  position: relative;
  overflow: hidden;
  img {
    z-index: 2;
  }

  :before {
    content: "";
    position: absolute;
    background-color: var(--palePurple);
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    border-radius: 0.7rem 0;
  }
  @media (max-width : 885px) {
  height: 100%;
    width: 5rem;
    margin: 0;
    border-radius: 0 0.7rem 0.7rem 0;
  }
`;
export const Theme = styled.div`

  @media (max-width : 865px) {
   padding: 0 1rem;
  }
`;
export const Avatar = styled.figure`
  margin-top: 1rem;
  border-top: 1px solid #888eb0;

  img {
    border-radius: 50%;
    width: 2.5rem;
    margin: 0.5rem;
  }

  @media (max-width : 865px) {
    border-top: unset;
    border-left: 1px solid #888eb0;
    margin: 0;
    padding: 0.5rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width : 865px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0c0e16;
  z-index: 4;
  opacity: 0.5;
`;
export const PageContainer = styled.main`
  background-color: ${(props) => props.theme.bg};
  display: flex;



`;

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  padding: 0 5rem;
  align-items: center;
  justify-content: center;


  @media (max-width : 865px) {
    padding: 0 1rem;
    margin: 0;
    position: relative;
  }
`;

export const GroupButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
  }
`