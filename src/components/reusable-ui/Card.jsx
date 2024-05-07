import styled from "styled-components";
import AddButton from "./AddButton";
import { theme } from "../../theme";
import { formatPrice } from "../utils/maths";
import { TiDelete } from "react-icons/ti";
import { useContext, useState } from "react";
import AdminContext from "../../context/AdminContext";

export default function Card({ element, name, price, image }) {
  const formattedPrice = formatPrice(price);
  const { isAdmin, deleteList, setDeleteList } = useContext(AdminContext);
  const handleDelete = () => {
    setDeleteList([...deleteList, element]);
  };

  return (
    <CardContainer>
      {isAdmin ? (
        <TiDelete
          className={`icon ${isAdmin ? "color" : ""}`}
          onClick={handleDelete}
        />
      ) : null}
      <Image src={image} />
      <Name>{name}</Name>
      <Div>
        <Price className={isAdmin ? "price" : ""}>{formattedPrice}</Price>
        <AddButton className="button" label="Ajouter" />
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
  background-color: white;
  &:hover {
    background-color: ${theme.colors.primary};
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

  .icon {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
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
`;

const Price = styled.p`
  color: ${theme.colors.primary};
`;
