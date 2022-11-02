import { useContext, useState } from "react";
import styled from "styled-components";
import arrow from "../assets/icon-arrow-down.svg";
import { CrudContext } from "../context/Crud.context.jsx";

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
const Menu = styled.div`
  position: relative;
  color: ${(props) => props.theme.fontColor};
  h2 {
    color: ${(props) => props.theme.fontColor};
  }
`;
const Summary = styled.div`
  display: flex;
  gap: 0.6rem;
  
  img {
    object-fit: contain;
  }
`;
const Options = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  width: 100%;
  box-shadow: 0 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 0.3rem;
  background-color:  ${(props) => props.theme.main};;
  overflow: hidden;
  padding: 1rem 0;
   label {
    margin: 0.2rem 0;
    padding: 0 0.5rem;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
