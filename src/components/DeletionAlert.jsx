import styled from "styled-components";
import { ButtonContainer } from "./Button.jsx";
import { useContext } from "react";
import { CrudContext } from "../context/Crud.context.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeletionAlert() {
  const { invoId } = useParams();
  const navigate = useNavigate();

  const { setToggleAlert, deleteInvoices } = useContext(CrudContext);

  function hideAlert() {
    setToggleAlert(false);
  }
  function deleteAndRedirect() {
    deleteInvoices(invoId);
    setToggleAlert(false);

    navigate("/");
  }
  return (
    <AlertContainer>
      <h2>Confirm Deletion</h2>
      <p>
        Are you sure you want to delete invoice # {invoId}? This action cannot
        be undone.
      </p>

      <GroupButtons>
        <Cancel onClick={hideAlert}> Cancel </Cancel>
        <ButtonContainer delete onClick={deleteAndRedirect}>
          Delete
        </ButtonContainer>
      </GroupButtons>
    </AlertContainer>
  );
}

export default DeletionAlert;
const AlertContainer = styled.div`
  background-color: var(--white);
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
const GroupButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Cancel = styled.button`
  border: none;
  background: none;
  color: var(--blue);
  cursor: pointer;
`;
