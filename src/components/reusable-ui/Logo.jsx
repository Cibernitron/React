import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
    return (
        <LogoStyled>
            <h1>CAKE</h1>
            <img src="/images/cupcake.png" alt="logo cupcake"/>
            <h1>NEST</h1>
        </LogoStyled>
    );
}

const LogoStyled = styled.div`
display: flex;
align-items: center;

@media (min-width: 768px) {
    // transform: scale(2.5);
  }

  @media (min-width: 400px) and (max-width: 768px) {
    //transform: scale(1.5);
  }


h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "OpenSans", sans-serif;
}

img {
    object-fit: cover;
    object-position: center;
    height: 60px;
    margin: 0 5px;
}
`;
