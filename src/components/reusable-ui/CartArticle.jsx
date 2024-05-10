import styled from "styled-components";
import { theme } from "../../theme";
import { formatPrice } from "../utils/maths";
import { TbTrashXFilled } from "react-icons/tb";
import { useState } from "react";
import AdminContext from "../../context/AdminContext";
import { useContext } from "react";

export default function DisplayCartArticle({ element }) {
  const formattedPrice = formatPrice(element.price);
  const [isHovered, setIsHovered] = useState(false);
  const { cartList, setCartList } = useContext(AdminContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const deleteItem = () => {
    if (element.quantity > 1) {
      const updatedCartList = cartList.map((item) =>
        item.id === element.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartList(updatedCartList);
    } else {
      const updatedCartList = cartList.filter((item) => item.id !== element.id);
      setCartList(updatedCartList);
    }
  };

  return (
    <CartArticle
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CartArticleImage src={element.imageSource} />
      <Container>
        <CartArticleName>{element.title}</CartArticleName>
        <CartArticlePrice>{formattedPrice}</CartArticlePrice>
      </Container>
      <QuantityContainer>
        <Multiply>x</Multiply>
        <CartArticleQuantity>{element.quantity}</CartArticleQuantity>
      </QuantityContainer>

      {isHovered && (
        <DeleteButton onClick={deleteItem}>
          <TbTrashXFilled className="trash" />
        </DeleteButton>
      )}
    </CartArticle>
  );
}

const CartArticle = styled.div`
  max-height: 4rem;
  width: 95%;
  display: flex;
  position: relative;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  z-index: 1000000;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
`;
const CartArticleName = styled.div`
  font-family: "Pacifico", sans-serif;
`;
const CartArticlePrice = styled.div`
  color: ${theme.colors.primary};
`;
const CartArticleQuantity = styled.div`
  color: ${theme.colors.primary};
`;
const CartArticleImage = styled.img`
  height: 100%;
`;
const Multiply = styled.div`
  font-size: xx-small;
  color: ${theme.colors.primary};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const QuantityContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50px;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
`;
const DeleteButton = styled.button`
  height: 64px;
  width: 64px;
  background-color: #f46464;
  color: white;
  position: absolute;
  right: 0px;
  border: none;
  border-radius: 0 5px 5px 0;
  .trash {
    width: 25px;
    height: 25px;
  }
`;
