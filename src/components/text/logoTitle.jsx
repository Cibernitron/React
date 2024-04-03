import styled from 'styled-components';

const Container = styled.div`
display : flex;
align-items : center;
justify-content : center;
`;

const Span = styled.span`
font-size : 32px;
font-weight : 700;
color : #67b6b9;
`;
const Img = styled.img`
width : 50px;
aspect-ratio : 1/1;
`;

export function LogoTitle() {
  
  

  return (
    <>
      <Container><Span>CAKE</Span><Img src="/images/cupcake.png" alt="logo de Cake Nest" /><Span>NEST</Span></Container>
    </>
  );
}

export default LogoTitle;

