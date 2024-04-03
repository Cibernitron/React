import styled from 'styled-components';

const Container = styled.button`

`;

export function AccessSpaceButton($content) {
  
  

  return (
    <>
      <Container type="submit">{$content}</Container>
    </>
  );
}

export default AccessSpaceButton;
