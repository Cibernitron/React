import styled from "styled-components";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../theme";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function NavBar({ username }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [buttonColor, setButtonColor] = useState(theme.colors.dark);
  const [buttonTextColor, setButtonTextColor] = useState(theme.colors.primary);
  const [buttonBorder, setButtonBorder] = useState(theme.colors.dark);
  const [circlePosition, setCirclePosition] = useState("left");
  const [activeText, setActiveText] = useState("Activer le mode admin");

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
    if (!isAdminMode) {
      setButtonColor(theme.colors.white);
      setButtonTextColor(theme.colors.dark);
      setButtonBorder(theme.colors.primary);
      setCirclePosition("right");
      setActiveText("Désactiver le mode admin");
      toast.success("Mode admin activé", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {

      setButtonColor(theme.colors.dark);
      setButtonTextColor(theme.colors.primary);
      setButtonBorder(theme.colors.dark);
      setCirclePosition("left");
      setActiveText("Activer le mode admin");
    }
  };

  return (
    <>
      <Nav>
        <Link className="link" to={"/"}>
          <Logo />
        </Link>
        <NavContainer>
            <AdminButton onClick={toggleAdminMode} border={buttonBorder} color={buttonColor} position={circlePosition}>
              <Circle />
              <ButtonText color={buttonTextColor}  isactive={circlePosition === "left" ? "true" : "false"}>{activeText}</ButtonText>
            </AdminButton>
          <UserContainer>
            <HelloContainer>
              <Hello>Salut</Hello>
              <User>{username}</User>
            </HelloContainer>
            <Links href={"/"}>Se déconnecter</Links>
          </UserContainer>
          <BsPersonCircle className="icon" />
        </NavContainer>
      </Nav>
      <ToastContainer position="bottom-right" />
    </>
  );
}


const Nav = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;
  padding: 0px 24px;
  white-space: nowrap;
  width: 100%;

  .icon {
    width: 40px;
    height: 40px;
    opacity: 50%;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
  }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 12px;
`;
const User = styled.span`
  font-weight: bold;
  color: ${theme.colors.primary};
`;
const Hello = styled.span``;
const HelloContainer = styled.div`
  display: flex;
  gap: 8px;
  font-size: large;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: "wdth" 100;
`;

const Links = styled.a`
  font-size: 8px;
  color: black;
  text-decoration: none;
  opacity: 80%;
  font-family: "Open Sans", sans-serif;
`;
const AdminButton = styled.button`
  font-size: 16px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
  border: none;
  padding: 4px 8px;
  border-radius: 32px;
  border: 2px solid ${(props) => props.border} ;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: ${(props) => (props.position === "left" ? "flex-start" : "flex-end")};
  flex-direction: ${(props) => (props.position === "left" ? "row" : "row-reverse")};
  transition: flex-direction 1s ease; /* Ajout de la transition */
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color:${theme.colors.primary};
  border-radius: 50%;
`;


const ButtonText = styled.span`
color: ${(props) => props.color};
margin: 0 8px;
`;

