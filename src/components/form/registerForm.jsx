import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccessSpaceButton } from '../button/accessSpaceButton';
import { IoPersonCircleOutline } from "react-icons/io5";



const Container = styled.form`
display : flex;
flex-direction : column;
margin : 0 auto;
gap : 16px;
`;
const ContainerInput = styled.div`
display : flex;
margin : 0 auto;
gap : 16px;
background-color : #fff;
width : 450px;
border-radius : 8px; 
`;
const ContainerIcon = styled.div`

`;

const Input = styled.input`
padding : 16px; 
border : none;
width : 350px;
background-color : #fff;
`

export function RegisterForm($content) {
  
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (firstName) {
        // Redirection vers la page de commande avec le prénom comme paramètre d'URL
        navigate(`/order/${firstName}`);
        setFirstName('');
      } else {
        alert(`Champ "prénom" obligatoire`);
      }
    };
  
    const handleInputChange = (event) => {
      setFirstName(event.target.value);
    };

  return (
    <>
      <Container onSubmit={handleSubmit}>
      <IoPersonCircleOutline />
        <Input
          type="text"
          placeholder={$content}
          value={firstName}
          onChange={handleInputChange}
        />
         {AccessSpaceButton("Accéder à votre espace")}
        
      </Container>
    </>
  );
}

export default RegisterForm;

