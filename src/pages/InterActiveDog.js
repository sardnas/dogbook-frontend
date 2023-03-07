import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html } from '@react-three/drei'
import React, { Suspense } from 'react';
import shiba from "./shiba.glb";
import '../styles/InteractiveDog.css';

function Dog() {
    const { scene } = useGLTF(shiba);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const mesh = useRef();
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const x = Math.sin(t);
        const z = Math.cos(t);
        const y = Math.sin(t);
        mesh.current.position.x = x / 10;
        mesh.current.position.z = z / 10;
        mesh.current.position.y = y / 10;
        mesh.current.rotation.x = 0.3;
        mesh.current.rotation.z = 0.1;
        mesh.current.rotation.y = 0.5;
    });

    const handleClick = () => {
        setActive(true);
        setHover(false);
    }

    const handlePointerOut = () => {
        setHover(false);
        setActive(false);
    }
    return (
        <>
            {hovered ? (
                <>
                    <mesh
                        position={[mesh.current.position.x + 0.5, 0, mesh.current.position.z - 0.3]}>
                        <Html>
                            <div className='talkingBubble'>Pet me!</div>
                        </Html>
                    </mesh>
                </>
            ) : (
                <></>
            )}
            {active ? (
                <>
                    <mesh
                        position={[mesh.current.position.x - 0.8, 0.3, mesh.current.position.z]}>
                        <Html>
                            <div className='heart'>&#128149;</div>
                        </Html>
                    </mesh>
                </>
            ) : (
                <></>
            )}
            <mesh position={[0, 0, 0]}
                ref={mesh}
                onClick={handleClick}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={handlePointerOut}>
                <primitive object={scene} />
            </mesh>
        </>
    );
}

export default function InterActiveDog() {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Dog />
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}
