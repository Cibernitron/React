import { useParams } from "react-router-dom";
import NavBar from "../../reusable-ui/NavBar";
import styled from "styled-components";
import Menu from "../../reusable-ui/Menu";
import { useContext } from "react";
import AdminContext from "../../../context/AdminContext";

export default function OrderPage() {
  const { isAdmin, toggleAdminMode } = useContext(AdminContext);
  const { username } = useParams();

  return (
    <Page>
      <NavBar
        username={username}
        isAdminMode={isAdmin}
        toggleAdminMode={toggleAdminMode}
      />
      <Menu isAdminMode={isAdmin} />
    </Page>
  );
}

const Page = styled.div`
  height: 100vh;
`;
