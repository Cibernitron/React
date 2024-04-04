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
          <Card
            key={element.id}
            price={element.price}
            name={element.title}
            image={element.imageSource}
          />
        ))}
      </Menu>
    </>
  );
}

const Menu = styled.div`
display: flex;
flex-wrap: wrap; /* Permet aux éléments de se placer sur plusieurs lignes */
justify-content: center;
min-height: 80vh;
background-color: white;
box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
padding: 50px;
gap: 60px;
`;
