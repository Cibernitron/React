import styled from "styled-components";
import AddButton from "./AddButton";
import { theme } from "../../theme";
import { formatPrice } from "../utils/maths";
import { TiDelete } from "react-icons/ti";
import { useContext, useState } from "react";
import AdminContext from "../../context/AdminContext";

export default function Card({ element, name, price, image, selected }) {
  const formattedPrice = formatPrice(price);
  const { isAdmin, deleteList, setDeleteList, cartList, setCartList } =
    useContext(AdminContext);
  const [hovered, setHovered] = useState(false);
  const handleDelete = () => {
    setDeleteList([...deleteList, element]);
  };
  const makeHovered = () => {
    setHovered(true);
  };
  const disableHovered = () => {
    setHovered(false);
  };
  const addToCartList = () => {
    setCartList(element);
    console.log("test");
  };

  return (
    <CardContainer onMouseEnter={makeHovered} onMouseLeave={disableHovered}>
      {isAdmin ? (
        <TiDelete
          className={`icon ${isAdmin ? "color" : ""} ${
            isAdmin & selected ? "selected" : ""
          }`}
          onClick={handleDelete}
        />
      ) : null}
      <Image src={image} />
      <Name>{name}</Name>
      <Div>
        <Price
          className={`${isAdmin ? "price" : ""} ${
            isAdmin & selected ? "selected" : ""
          }`}
        >
          {formattedPrice}
        </Price>
        <AddButton
          onClick={addToCartList}
          className="button"
          label="Ajouter"
          article={element}
          selected={selected}
          hovered={hovered}
        />
      </Div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  padding: 24px;
  border-radius: 16px;
  max-height: 280px;
  position: relative;

  &:hover {
    .price {
      color: white;
    }
    .button {
      color: ${theme.colors.primary};
      background-color: white;
    }
    .color {
      color: white;
    }
  }
  .selected {
    color: white !important;
  }
  .icon {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
  }
`;
const Image = styled.img`
  width: 150px;
`;
const Name = styled.p`
  font-size: large;
  font-family: "Pacifico", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  text-align: start;
  width: 100%;
  margin-bottom: 0;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  .selectedButton {
    color: #63a5aa;
    background-color: white;
    border: white 1px solid;
  }
  .hoveredButton {
    color: #63a5aa;
    background-color: white;
    border: white 1px solid;
  }
`;

const Price = styled.p`
  color: ${theme.colors.primary};
  background-color: transparent !important;
`;
