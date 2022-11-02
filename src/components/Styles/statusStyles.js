import styled from "styled-components";

export const StatusContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

   

  background-color: ${(props) =>
    props.stats === "Paid"
        ? props.theme.paidBg
        : props.stats === "Pending"
            ? props.theme.pendingBg
            : props.stats === "Draft"
                ? props.theme.draftBg
                : "373B53"};
  
  color : ${(props) =>
    props.stats === "Paid"
        ? "#33d69f"
        : props.stats === "Pending"
            ? "var(--orange)"
            : props.stats === "Draft"
                ? props.theme.draftColorFont
                : "#f4f4f6"};
 

  div {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
    props.stats === "Paid"
        ? "#33d69f"
        : props.stats === "Pending"
            ? "var(--orange)"
            : props.stats === "Draft"
                ? props.theme.draftColorFont
                : "blue"};
 
`;
