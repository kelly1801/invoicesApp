import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context";
import styled from "styled-components";
import darkImg from "../../assets/icon-moon.svg";
import lightImg from "../../assets/icon-sun.svg";
import {dark, light} from "../themes.js";
function SideBar() {
  const { setShow, show, setTheme, theme} = useContext(CrudContext);
  function handleShow() {
    setShow(!show);
  }
  function switchTheme(){
      setTheme(!theme)
  }
  return (
    <Bar>
      <Icon onClick={handleShow}>
        <img src="./assets/logo.svg" alt="" />
      </Icon>

      <Container>
        <Theme onClick={switchTheme}>
          {!theme  ? (
            <img src={darkImg} alt="theme" />
          ) : (
            <img src={lightImg} alt="theme" />
          )}
        </Theme>
        <Avatar>
          <img src="./assets/image-avatar.jpg" alt={"avatar"} />
        </Avatar>
      </Container>
    </Bar>
  );
}

export default SideBar;

const Bar = styled.div`
  background-color: #1e2139;
  display: flex;
  z-index: 6;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 7rem;
  border-radius: 0 0.7rem 0.7rem 0;
  height: 100vh;
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
