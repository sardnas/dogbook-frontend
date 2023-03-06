import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html } from '@react-three/drei'
import React, { Suspense } from 'react';
import shiba from "./shiba.glb";
import '../styles/InteractiveDog.css';
import heart from "./heart.png";

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
        mesh.current.rotation.x = -0.6;
        mesh.current.rotation.y = 0.4;
    });

    const handleClick = () => {
        setActive(true);
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
                        position={[mesh.current.position.x - 0.7, 0, mesh.current.position.z - 0.3]}>
                        <Html>
                            <div>thanks</div>
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
        <Canvas camera={{ position: [0, 55, 65], fov: 3 }}>
            <Suspense fallback={null}>
                <Dog />
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}
