import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_4.geometry} material={materials.material} />
                        <mesh geometry={nodes.Object_5.geometry} material={materials['.001']} />
                    </group>
                    <group rotation={[Math.PI / 2, 0, 0]} scale={0.94}>
                        <mesh geometry={nodes.Object_7.geometry} material={materials['.002']} />
                    </group>
                    <group rotation={[Math.PI / 2, 0, 0]} scale={0.94}>
                        <mesh geometry={nodes.Object_9.geometry} material={materials['.003']} />
                        <mesh geometry={nodes.Object_10.geometry} material={materials['.004']} />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/scene.gltf')
