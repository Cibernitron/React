import { useState, useContext } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../theme";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import AdminContext from "../../context/AdminContext";

export default function NavBar({ username }) {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const [buttonColor, setButtonColor] = useState(theme.colors.dark);
  const [buttonTextColor, setButtonTextColor] = useState(theme.colors.primary);
  const [buttonBorder, setButtonBorder] = useState(theme.colors.dark);
  const [circlePosition, setCirclePosition] = useState("left");
  const [activeText, setActiveText] = useState("Activer le mode admin");

  const handleToggleAdminMode = () => {
    if (!isAdmin) {
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
      setIsAdmin(true);
    } else {
      setButtonColor(theme.colors.dark);
      setButtonTextColor(theme.colors.primary);
      setButtonBorder(theme.colors.dark);
      setCirclePosition("left");
      setActiveText("Activer le mode admin");
      toast.success("Mode admin désactivé", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsAdmin(false);
    }
  };

  return (
    <>
      <Nav>
        <Link className="link" to={"/"}>
          <Logo />
        </Link>
        <NavContainer>
          <AdminButton
            onClick={handleToggleAdminMode}
            border={buttonBorder}
            color={buttonColor}
          >
            <Circle position={circlePosition} />
            <ButtonText color={buttonTextColor}>{activeText}</ButtonText>
            <CircleNone />
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
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
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
  width: 300px;
  font-size: 16px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
  border: none;
  padding: 4px 8px;
  border-radius: 32px;
  border: 2px solid ${(props) => props.border};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.5s ease;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  position: relative;
  ${(props) => (props.position === "left" ? "left: 0" : "left: 250px")};
  transition: all 0.5s ease;
  z-index: 100;
`;
const CircleNone = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  visibility: hidden;
`;

const ButtonText = styled.span`
  transition: opacity 0.1s ease, transform 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.color};
  margin: 0 8px;
`;
