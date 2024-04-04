import styled from "styled-components";
import AddButton from "./AddButton";
import { theme } from "../../theme";
import { formatPrice } from "../utils/maths";

export default function Card({ name ,  price ,  image }) {

  const formattedPrice = formatPrice(price);

  return (
    <CardContainer>
      <Image src={image} />
      <Name>{name}</Name>
      <Div>
        <Price>{formattedPrice}</Price>
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
`;
const Image = styled.img`
  width: 150px;
`;
const Name = styled.p`
  font-size: large;
  font-family: "Pacifico",sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  text-align: start;
  width: 100%;
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
