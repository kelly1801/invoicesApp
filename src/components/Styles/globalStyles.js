import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "League Spartan", sans-serif;
    
  }

  :root {
    --purple: #7c5dfa;
    --palePurple: #9277ff;
    --darkPurple: #1e2139;
    --opacPurple: #252945;
    --lightPurple: #dfe3fa;
    --grayPurple: #888eb0;
    --blue: #7e88c3;
    --black: #0c0e16;
    --red: #ec5757;
    --lightRed: #ff9796;
    --white: #f8f8fb;
    --orange: #ff8f00;
    --lightOrange: #ffeed8;
  }
  body {
     background-color:  ${(props) => props.theme.bg};
  }

  h1 {
    font-size: 2rem;
    line-height: 2.2rem;
    color: var(--black);
  }

  h2 {
    font-size: 1.2rem;
    line-height: 1.3rem;
    color: var(--black);
  }

  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p {
    font-size: 0.7rem;
    line-height: 0.9rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
    
  }

  ::-webkit-scrollbar-thumb {
    background: var(--grayPurple);
    border-radius: 0.7rem;
   
  }

  form {
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
  }
`

export default GlobalStyles