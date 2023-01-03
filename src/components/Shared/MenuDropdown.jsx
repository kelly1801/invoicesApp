import { useContext, useState } from "react";
import arrow from "../../assets/icon-arrow-down.svg";
import { CrudContext } from "../../context/Crud.context.jsx";
import {
  Menu,
  Summary,
  Options,
  Title,
  ShortTitle,
} from "../Styles/menuDropStyles.js";
function MenuDropdown() {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxes = [
    {
      label: "paid",
      checked: false,
    },
    {
      label: "pending",
      checked: false,
    },
    {
      label: "draft",
      checked: false,
    },
  ];

  const { getInvoicesByStatus, getInvoices } = useContext(CrudContext);
  const handleChange = async (e) => {
    const { value, name, checked } = e.target;
    setIsChecked(() => {
      checkBoxes.checked = value;
    });

    !checked ? getInvoices() : getInvoicesByStatus(name);
  };

  function handleOpen() {
    setShow(!show);
    if (!show) {
      retrieve();
    }
  }
  return (
    <Menu>
      <Summary onClick={handleOpen}>
        <Title>Filter by status</Title>
        <ShortTitle>Filter</ShortTitle>
        <img src={arrow} alt="arrow down" />
      </Summary>

      {show && (
        <Options>
          {checkBoxes.map((label, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={isChecked}
                name={label.label}
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
