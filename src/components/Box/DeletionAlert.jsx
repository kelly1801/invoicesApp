import { defaultForm } from "../../context/Crud.context.jsx";
import { Button } from "../Styles/GlobalStyledComponents.js";
import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {AlertContainer, GroupButtons, Cancel} from "../Styles/alertStyles.js";

function DeletionAlert() {
  const { invoId } = useParams();
  const navigate = useNavigate();

  const { setToggleAlert, deleteInvoices, setFormFields } =
    useContext(CrudContext);

  function hideAlert() {
    setToggleAlert(false);
  }
  function deleteAndRedirect() {
    deleteInvoices(invoId);
    setToggleAlert(false);
    navigate("/");
    setFormFields(defaultForm);
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
        <Button delete onClick={deleteAndRedirect}>
          Delete
        </Button>
      </GroupButtons>
    </AlertContainer>
  );
}

export default DeletionAlert;
