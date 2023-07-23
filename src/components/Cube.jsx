/* eslint-disable react/no-unknown-property */
import { RenderTexture, Text, PerspectiveCamera} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Cube() {
  const textRef = useRef()
  useFrame(state=> {textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2})
  return (
    <mesh>
    <boxGeometry/>
    <meshStandardMaterial >
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 5]}/>
        <color attach="background" args={["#BBDEFB"]}/>
        <Text ref={textRef} fontSize={1.4} color="#555">
          Hello
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

export default Cube