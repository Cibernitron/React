import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";

export default function Card({ name }, { price }) {
  return (
    <CardContainer>
      <Image />
      <Name>{name}</Name>
      <Div>
        <Price>{price}</Price>
        <PrimaryButton label="Ajouter" />
      </Div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 16px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
`;
const Image = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
`;
const Name = styled.p`
  font-size: large;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "wdth" 100;
`;
const Div = styled.div`
  display: flex;
  gap: 16px;
`;
const Price = styled.p`
  color: ${theme.colors.primary};
`;
