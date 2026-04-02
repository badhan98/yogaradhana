import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ThreeLotus = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Central Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} ref={meshRef}>
          <MeshDistortMaterial
            color="#D4AF37"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#D4AF37"
            emissiveIntensity={0.5}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>

      {/* Decorative Outer Rings */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#A8B8A0" transparent opacity={0.5} />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#FDFBF7" transparent opacity={0.3} />
        </mesh>
      </Float>

      {/* Ambient particles would go here, but keeping it simple for now */}
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={Math.random() * 2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default ThreeLotus;
