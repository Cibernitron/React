import styled from 'styled-components';

const Container = styled.img`
position : absolute;
width : 80vw;
height : 100vh;
z-index : -1;
top : 0;
right : 10vw;
opacity : .5;
`;

export function FontImage($src, $alt) {
  
  

  return (
    <>
      <Container src={$src} alt={$alt}></Container>
    </>
  );
}

export default FontImage;

