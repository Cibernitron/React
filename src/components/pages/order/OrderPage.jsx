import { useParams } from "react-router-dom";
import NavBar from "../../reusable-ui/NavBar";
import styled from "styled-components";
import Card from "../../reusable-ui/Card.jsx";
import { fakeMenu } from "./Fake.js";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <>
      <NavBar username={username}></NavBar>
      <Menu>
        {fakeMenu.map((element) => (
          <Card key={element.id} price={element.price} name={element.title} />
        ))}
      </Menu>
    </>
  );
}

const Menu = styled.div`
  height: 80vh;
  background-color: white;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
`;
