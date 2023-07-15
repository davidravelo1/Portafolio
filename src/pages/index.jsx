import styled from 'styled-components'
import Hero from '../components/Hero';
import Who from '../components/Who'
import Work from '../components/Work';
import Contacts from '../components/Contacts';

const Container = styled.div`
  height: 100vh;
  /*scroll-snap-type: y mandatory;*/
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none; 
  color: white;
  background: url('/FondoAzul.jpg');
  &::-webkit-scrollbar{
    display: none;
  }
`;
function index() {
  return (
     <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contacts/>
    </Container>
  )
}

export default index