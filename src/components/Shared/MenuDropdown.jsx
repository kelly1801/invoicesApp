import { useContext, useState } from "react";
import arrow from "../../assets/icon-arrow-down.svg";
import { CrudContext } from "../../context/Crud.context.jsx";
import { Menu, Summary, Options, Title, ShortTitle } from "../Styles/menuDropStyles.js";
function MenuDropdown() {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxes = [
    {
      label: "Paid",
      checked: false,
    },
    {
      label: "Pending",
      checked: false,
    },
    {
      label: "Draft",
      checked: false,
    },
  ];

  const { setStatus, retrieve } = useContext(CrudContext);
  function handleChange(e) {

    const { value , name, checked} = e.target;
    setIsChecked( () => { checkBoxes.checked = value }

    )
    if(!checked){
      retrieve()
    }


    setStatus(name);
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
