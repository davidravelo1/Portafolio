import styled from "styled-components"
import { Link } from "react-router-dom"
import 'animate.css'

const Section = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
    }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

const Link_T = styled(Link)`
  text-decoration: none;
  
`;

const ListItem2 = styled.li`
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: white;
  margin-left: 20px;
`;
const ListItem = styled.li`
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: white;
  @media only screen and (max-width: 769px) {
      display: none;
    }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #BBDEFB;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  @media only screen and (max-width: 769px) {
      margin-right: 15px;
    }
`;



function Navbar() {
  return (
    <Section>
      <Container className="animate__animated animate__backInLeft">
        <Links>
          <List>
            <Link_T to="/"><ListItem2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ai ai-HomeAlt1"><path d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" /><path d="M9 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6H9v-6z" /></svg></ListItem2></Link_T>
            <ListItem></ListItem>
            <Link_T to="/proyects" ><ListItem href="#who">Proyects</ListItem></Link_T>
            <ListItem ><A href="#who">Who</A></ListItem>
            <ListItem><A href="#work">Works</A></ListItem>
            <ListItem><A href="#contact">Contact</A></ListItem>
          </List>
        </Links>
        <Icons>
          <Icon></Icon>
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar