import styled from "styled-components";
import { theme } from "../../theme";
import AdminContext from "../../context/AdminContext";
import { useContext } from "react";
import CartArticle from "./CartArticle";

export default function DisplayCart() {
  const { cartList } = useContext(AdminContext);

  const total = cartList.reduce(
    (acc, element) => acc + element.price * element.quantity,
    0
  );
  const totalFormatted = total.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <Cart>
      <Total>
        <Title>Total</Title>
        <TotalPrice>{totalFormatted}</TotalPrice>
      </Total>
      <List>
        {cartList.length > 0 ? (
          cartList.map((element) => (
            <CartArticle key={element.id} element={element} />
          ))
        ) : (
          <Message>Votre commande est vide</Message>
        )}
      </List>
    </Cart>
  );
}

const Cart = styled.div`
  width: 15vw;
  height: 100%;
  background-color: white;
  overflow-y: auto;
`;
const Total = styled.div`
  background-color: #252525;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  font-family: "Pacifico", sans-serif;
  height: 5%;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;
const TotalPrice = styled.p``;
const List = styled.div`
  max-height: fit-content;
  height: 95%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  box-shadow: inset 10px -10px 30px 0px rgba(73, 73, 73, 0.5),
    inset -20px 0px 39px -20px rgba(0, 0, 0, 0.5);
`;
const Message = styled.p`
  display: flex;
  font-family: "Pacifico", sans-serif;
  font-size: 24px;
  opacity: 60%;
  height: 40%;
  align-items: center;
  justify-content: center;
`;
