import styled from "styled-components"
import { Link } from "react-router-dom"

const Section = styled.div`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 769px) {
      width: 100%;
    }
`;

const Container = styled.div`
    width: 1440px;
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
  
`;

const ListItem2 = styled.li`
  cursor: pointer;
  font-weight: bold;
`;

const ListItem = styled.li`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
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
            <Container>
                <Links>
                <List>
                  <ListItem2 href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ai ai-HomeAlt1"><path d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M9 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6H9v-6z"/></svg></ListItem2>
                    <ListItem></ListItem>
                    <Link to="/proyects" ><ListItem>Home</ListItem></Link>
                    <ListItem ><A href=""></A></ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
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