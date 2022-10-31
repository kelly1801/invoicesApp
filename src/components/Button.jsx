import styled, { css } from "styled-components";
import add from "../assets/icon-plus.svg";
function Button({ children }) {
  return (
    <ButtonContainer >
      <div>
        <img src={add} alt="" />
      </div>
      {children}
    </ButtonContainer>
  );
}

export default Button;
const ButtonContainer = styled.button`
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
  div {
    display: none;
  }
  &:hover {
    background-color: var(--palePurple);
  }
  ${(props) =>
    props.add &&
    css`
      div {
        background-color: var(--white);
        border-radius: 50%;
        padding: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

  ${(props) =>
    props.delete &&
    css`
      background-color: var(--red);
      &:hover {
        background-color: var(--lightRed);
      }
    `}
`;
