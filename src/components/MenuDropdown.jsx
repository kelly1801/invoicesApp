import { useContext, useState } from "react";
import arrow from "../assets/icon-arrow-down.svg";
import { CrudContext } from "../context/Crud.context.jsx";
import { Menu, Summary, Options } from "./Styles/menuDropStyles.js";
function MenuDropdown() {
  const [show, setShow] = useState(false);
  const { setStatus } = useContext(CrudContext);
  function handleClick(status) {
    setStatus(status);
  }
  function handleOpen() {
    setShow(!show);
  }
  return (
    <Menu>
      <Summary onClick={handleOpen}>
        <h2>Filter by status</h2>
        <img src={arrow} alt="arrow down" />
      </Summary>

      {show && (
        <Options>
          <label>
            <input type="checkbox" onChange={() => handleClick("Paid")} />
            Paid
          </label>
          <label>
            <input type="checkbox" onChange={() => handleClick("Pending")} />
            Pending
          </label>
          <label>
            <input type="checkbox" onChange={() => handleClick("Draft")} />
            Draft
          </label>
        </Options>
      )}
    </Menu>
  );
}

export default MenuDropdown;
