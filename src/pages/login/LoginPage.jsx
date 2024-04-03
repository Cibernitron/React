
import { Title } from '../../components/text/title';
import { Subtitle } from '../../components/text/subtitle';
import { RegisterForm } from '../../components/form/registerForm';
import { FontImage } from '../../components/img/fontImage';
import { LogoTitle } from '../../components/text/logoTitle';
import styled from 'styled-components';


function LoginPage() {
  
  const Container = styled.div`
display : flex;
gap : 86px;
flex-direction : column;
  `;
  return (
    <Container>
    {LogoTitle()}
    {FontImage("/images/tarts.jpg","image de cupcakes")}
    {Title("Bienvenue chez nous !")}
    {Subtitle("Connectez-vous")}
    {RegisterForm("Entrez votre prénom")}
      
    </Container>
  );
}

export default LoginPage;

