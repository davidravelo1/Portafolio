import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Gamepad from "./Gamepad"
import { styled } from "styled-components"

const Desc = styled.p`
  width: 150px;
  height: 60px;
  padding: 20px;
  background-color: white;
  border-radius: 10px; 
  position: absolute; 
  top: 100px; 
  right: 100px;
  color: black;
  text-align: center;
  @media only screen and (max-width: 768px) {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
`
function Development() {
    return (
        <>
            <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Gamepad />
            </Stage>
            <OrbitControls enableZoom={true} />
        </Canvas>
        <Desc>
            Designs with new technologies
        </Desc>
        </>
        
    )
}

export default Development