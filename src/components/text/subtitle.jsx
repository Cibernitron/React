import styled from 'styled-components';

const Container = styled.div`
font-family: "Pacifico", cursive;
  font-weight: 500;
  font-size : 35px;
  font-style: normal;
  color : #fff;
`;


export function Subtitle($content) {
  
  

  return (
    <>
      <Container>{$content}</Container>
    </>
  );
}

export default Subtitle;

