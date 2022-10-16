import {useContext} from "react";
import { CrudContext } from "../../context/Crud.context";
import styled from "styled-components";

function SideBar() {
  
  const {setShow, show} = useContext(CrudContext)
  
  function handleShow() {
    setShow(!show)
  }
  return (
    <Bar>
      <Icon onClick={handleShow}>
        <img  src="./assets/logo.svg" alt="" srcset="" />
      </Icon>

      <Container>
        <Theme>
          <img src="./assets/icon-sun.svg" />
        </Theme>
        <Avatar>
          <img src="./assets/image-avatar.jpg" />
        </Avatar>
      </Container>
    </Bar>
  );
}

export default SideBar;

const Bar = styled.div`
  background-color: #1e2139;
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 7rem;
  border-radius: 0 0.7rem 0.7rem 0;

  `;

const Icon = styled.figure`
  background-color: #7c5dfa;
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.7rem 0.7rem 0;
`;
const Theme = styled.div``;
const Avatar = styled.figure`
  margin-top: 1rem;
  border-top: 1px solid #888eb0;

  img {
    border-radius: 50%;
    width: 2.5rem;
    margin: 0.5rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
