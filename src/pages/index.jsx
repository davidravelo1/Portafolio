import styled from 'styled-components'
import Hero from '../components/Hero';
import Who from '../components/Who'
import Work from '../components/Work';
import Contacts from '../components/Contacts';
import 'animate.css';

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  height: 100vh;
  max-width: 1600px;
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
//Index with components of principal page
function index() {
  return (
    <ContainerM>
      <Container className='animate__backInLeft'>
        <Hero />
        <Who />
        <Work />
        <Contacts />
      </Container>
    </ContainerM>

  )
}

export default index