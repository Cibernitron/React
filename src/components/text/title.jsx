import styled from "styled-components";

const Container = styled.div`
  font-family: "Pacifico", cursive;
  font-weight: 700;
  font-size: 50px;
  font-style: normal;
  color: #fff;
  text-align: center; /* Centrer le texte horizontalement */
  position: relative; /* Définir la position relative pour pouvoir positionner :after absolument */

  &:after {
    height: 2.5px;
    width: 450px;
    background: #3f7f8e;
    content: "";
    position: absolute;
    bottom: -20px; /* Déplacer la barre en dessous du texte */
    left: 50%; /* Centrer horizontalement la barre */
    transform: translateX(-50%); /* Centrer horizontalement la barre */
  }
`;

export function Title($content) {
  return (
    <>
      <Container>{$content}</Container>
    </>
  );
}

export default Title;
