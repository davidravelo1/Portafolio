/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        height: 150vh;
    }
`;

const Container = styled.div`
    margin-left: 100px;
    height: 100%;
    scroll-snap-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
    }
`;

const Left = styled.div`
   flex:2;
   display: flex; 
   flex-direction: column;
   justify-content: center;
   margin-right:100px;
   @media only screen and (max-width: 768px){
        flex: 1;
        padding: 0;
        margin: 0;
        align-items: center;
    }
`;

const Title = styled.h1`
    font-size: 74px;
    margin:0;
    @media only screen and (max-width: 768px){
        text-align: center;
    }
`;

const Subtitle1 = styled.h3`
    color: #9FA8DA;
    margin:0;
`;

const Developer = styled.div`
    display: flex; 
    align-items: center; 
    gap: 10px;
`;

const Subtitle = styled.h2`
    color: #536DFE;
    margin:0;
`;

const Icon = styled.img`
    height: 5px;

`;

const Describe = styled.p`
    font-size: 15px;
    color: #BDBDBD;
      @media only screen and (max-width: 768px){
        text-align: center;
        padding: 10px;
    }
`;

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
   flex:3;
   position: relative;
   @media only screen and (max-width: 768px){
        flex: 1;
        width: 100%;
    }
`;

const Img = styled.img`
    width: 700px;
    height: 500px;
    margin: auto;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.1%;
    right: 200px;
    align-items: center;
    animation: animate 2s infinite ease alternate;
    @keyframes animate{
        to{
            transform: translateY(30px)
        }    
    }
     @media only screen and (max-width: 768px){
        flex: 1;
        width: 300px;
        height: 300px;
    }
`;

function Hero() {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Subtitle1>Hi, my name is</Subtitle1>
                    <Title>David Ravelo</Title>
                    <Developer>
                        <Icon src="/line.png" />
                        <Subtitle>Front-End web developer</Subtitle>
                    </Developer>
                    <Describe>Human Digital experiencies</Describe>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1.2,100,200]} scale={1.6}>
                        <MeshDistortMaterial color="#303F9F" attach="material" distort={0.5} speed={2}/>
                        </Sphere>
                    </Canvas>
                    <Img src="/Dead.png"></Img>
                </Right>
            </Container>
        </Section>
    )
}
export default Hero; 