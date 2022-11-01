import styled from "styled-components";

function Status({ children }) {
  return (
    <StatusContainer stats={children}>
      <div></div>
      {children}
    </StatusContainer>
  );
}

export default Status;

const StatusContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  //color:#373B53; ;

  background-color: ${(props) =>
    props.stats === "Paid"
      ? "#f3fefa"
      : props.stats === "Pending"
      ? "var(--lightOrange)"
      : props.stats === "Draft"
      ? "#f4f4f6"
      : "blue"};
  
  color : ${(props) =>
    props.stats === "Paid"
      ? "#33d69f"
      : props.stats === "Pending"
      ? "var(--orange)"
      : props.stats === "Draft"
      ? "#373B53"
      : "blue"};
 

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
        ? "#373B53"
        : "blue"};
 
`;
