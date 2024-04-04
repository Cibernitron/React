import styled from "styled-components";
import { theme } from "../../theme";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function NavBar({ username }) {
  return (
    <Nav>
      <Link className="link" to={"/"}>
        <Logo />
      </Link>
      <NavContainer>
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
