import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Chair from "./Chair"
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
function WebDesign() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Chair />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        Web design with different tools and web responsive
      </Desc>
    </>

  )
}

export default WebDesign