import { StatusContainer } from "../Styles/statusStyles.js";

function Status({ children }) {
  return (
    <StatusContainer stats={children}>
      <div></div>
      {children}
    </StatusContainer>
  );
}

export default Status;
