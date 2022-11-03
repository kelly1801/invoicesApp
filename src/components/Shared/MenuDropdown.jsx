import { useContext, useState } from "react";
import arrow from "../../assets/icon-arrow-down.svg";
import { CrudContext } from "../../context/Crud.context.jsx";
import { Menu, Summary, Options } from "../Styles/menuDropStyles.js";
function MenuDropdown() {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxes = [
    {
      label: "Paid",
    },
    {
      label: "Pending",
    },
    {
      label: "Draft",
    },
  ];

  const { setStatus, retrieve } = useContext(CrudContext);
  function handleChange(e) {
    const { value } = e.target;

    setStatus(value);
  }

  function handleOpen() {
    setShow(!show);

    if(!show){
      retrieve()
    }
  }
  return (
    <Menu>
      <Summary onClick={handleOpen}>
        <h2>Filter by status</h2>
        <img src={arrow} alt="arrow down" />
      </Summary>

      {show && (
        <Options>
          {checkBoxes.map((label, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={label.label}
                onChange={(e) => handleChange(e)}
              />
              {label.label}
            </label>
          ))}
        </Options>
      )}
    </Menu>
  );
}

export default MenuDropdown;
