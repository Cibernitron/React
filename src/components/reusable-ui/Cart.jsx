import styled from "styled-components";
import { theme } from "../../theme";

export default function DisplayCart() {
  return (
    <Cart>
      <Total>
        <Title>Total</Title>
        <Price>0.00€</Price>
      </Total>
      <List>
        <Message>Votre commande est vide </Message>
      </List>
    </Cart>
  );
}

const Cart = styled.div`
  min-width: 15vw;
  max-height: 88vh;
  height: 100%;
  background-color: white;
`;
const Total = styled.div`
  background-color: #252525;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  font-family: "Pacifico", sans-serif;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;
const Price = styled.p``;
const List = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Message = styled.p`
  display: flex;
  font-family: "Pacifico", sans-serif;
  font-size: 24px;
  opacity: 60%;
`;
