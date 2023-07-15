/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 chair.gltf --transform
Author: j.a.m (https://sketchfab.com/j.a.m)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/office-chair-41973aa1808d4a13b84c24497fc77c63
Title: Office Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder01_Matteplastic_0.geometry} material={materials.PaletteMaterial001} position={[-21.91, 2.302, -108.052]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Box02_Chairback_0.geometry} material={materials.Chairback} position={[-51.39, 55.287, -133.687]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')