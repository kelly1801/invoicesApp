import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context";
import darkImg from "../../assets/icon-moon.svg";
import lightImg from "../../assets/icon-sun.svg";
import {
  Bar,
  Icon,
  Container,
  Theme,
  Avatar,
} from "../Styles/GlobalStyledComponents.js";
function SideBar() {
  const { setShow, show, setTheme, theme } = useContext(CrudContext);
  function handleShow() {
    setShow(!show);
  }
  function switchTheme() {
    setTheme(!theme);
  }
  return (
    <Bar>
      <Icon onClick={handleShow}>
        <img src="./assets/logo.svg" alt="" />
      </Icon>

      <Container>
        <Theme onClick={switchTheme}>
          {theme ? (
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
