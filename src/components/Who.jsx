import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei';
import Cube from "./Cube";
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    margin-left: 100px;
    height: 100vh;
    scroll-snap-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
`
const Left = styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   margin-right:100px;
   @media only screen and (max-width: 768px) {
        display: none;
    }
`
const Title = styled.h1`
    font-size: 74px;
    margin:0;
    @media only screen and (max-width: 768px) {
        font-size: 60px;
    }
`
const Developer = styled.div`
    display: flex; 
    align-items: center; 
    gap: 10px;
    @media only screen and (max-width: 768px) {
        
        align-items: center; 
        text-align: center;
    }
`
const Subtitle = styled.h2`
    color: #536DFE;
    margin:0;
`
const Icon = styled.img`
    height: 5px;
`
const Describe = styled.p`
     @media only screen and (max-width: 768px) {
        font-size: 20px;
    }
`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #BBDEFB;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: black; 
  font-weight: bold;
`;
const Right = styled.div`
   flex:1;
   position: relative;
   top: 20%;
   @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center; 
        text-align: center;
    }
`;

function Who() {
    return (

        <Section>
            <Container>
                <Left>
                    <Canvas camera={{fov:25, position: [5,5,5]}}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Cube/>
                    </Canvas>
                </Left>
                <Right>
                    <Title>Well done is better than well said</Title>
                    <Developer>
                        <Icon src="/line.png" />
                        <Subtitle>Who i am</Subtitle>
                    </Developer>
                    <Describe>Front-End web developer and future systems engineer</Describe>
                    <Button>See my proyects</Button>
                </Right>
            </Container>
        </Section>
    )
}
export default Who; 