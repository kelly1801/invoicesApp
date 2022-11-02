import styled from "styled-components";

export const AlertContainer = styled.div`
  background-color: ${props => props.theme.main};
  border-radius: 0.5rem;
  padding: 2rem;
  max-height: 250px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 310px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 5;
  p {
    color: var(--blue);
  }
`;
export const GroupButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Cancel = styled.button`
  border: none;
  background: none;
  color: var(--blue);
  cursor: pointer;
`;
