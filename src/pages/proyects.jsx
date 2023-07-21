/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import Navbar from '../components/Navbar';
import Proyect from '../components/Proyect';
import styled from 'styled-components'

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  /*scroll-snap-type: y mandatory;*/
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none; 
  color: white;
  &::-webkit-scrollbar{
    display: none;
  } 
`;

const ContainerM = styled.div`
  background: url('/FondoAzul.jpg');
`;

const Cont = styled.div`
    margin: 2rem 5rem 5rem 5rem;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: bold; 
`;

function proyects() {
  return (
    <ContainerM>

      <Container>
        <Navbar />
        <Cont>
          <Title className="animate__animated animate__backInRight">Proyects</Title>
          <Proyect pre='/Encriptador.png' title='Encriptador Alura' desc='This page is a challenge from Alura Bootcamp' />
          <Proyect pre='/Barberia.png' title='Barberia Alura' desc='This page is a basic page about a Barberia with a section of products and contact' />
        </Cont>
      </Container>
    </ContainerM>

  )
}

export default proyects