import styled from 'styled-components'
import Hero from '../components/Hero';
import Who from '../components/Who'
import Work from '../components/Work';
import Contacts from '../components/Contacts';
import 'animate.css';

// eslint-disable-next-line react-refresh/only-export-components
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
//Index with components of principal page
function index() {
  return (
     <Container className='animate__backInLeft'>
      <Hero/>
      <Who/>
      <Work/>
      <Contacts/>
    </Container>
  )
}

export default index