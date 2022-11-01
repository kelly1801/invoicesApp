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
    <Menu onClick={handleOpen}>
      <Summary>
        <h2>Filter by status</h2>
        <img src={arrow} alt="arrow down" />
      </Summary>

      {show && (
        <Options>
          <span>PAID</span>
          <span onClick={() => handleClick("Pending")}>PENDING</span>
          <span onClick={() => handleClick("Draft")}>DRAFT</span>
        </Options>
      )}
    </Menu>
  );
}

export default MenuDropdown;
const Menu = styled.div`
  position: relative;
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
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  width: 100%;
  height: 60px;
  box-shadow: 0 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 0.3rem;
  background-color: var(--white);
  overflow: hidden;
  span {
    margin: 0.2rem 0;
    padding: 0 0.5rem;
    border-bottom: 1px solid var(--blue);
    width: 100%;
    cursor: pointer;
  }
`;
