"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  Edges,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

const SEAT_DARK = "#2a2d35";
const SEAT_FABRIC = "#363940";
const CHROME = "#b8bcc4";
const EDGE_COLOR = "#C9A96E";

function SeatModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = scrollProgress * Math.PI * 2 + Math.PI * 0.2;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * delta * 3;
    groupRef.current.rotation.x =
      Math.sin(scrollProgress * Math.PI) * 0.12;
  });

  const fabricMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: SEAT_FABRIC,
        roughness: 0.85,
        metalness: 0.05,
        clearcoat: 0.1,
      }),
    []
  );
  const frameMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: CHROME,
        roughness: 0.2,
        metalness: 0.9,
        clearcoat: 0.4,
      }),
    []
  );
  const darkMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: SEAT_DARK,
        roughness: 0.6,
        metalness: 0.3,
        clearcoat: 0.2,
      }),
    []
  );

  return (
    <group ref={groupRef} scale={1.3} position={[0, -0.3, 0]}>
      {/* Seat cushion */}
      <RoundedBox args={[1.05, 0.18, 0.95]} radius={0.04} position={[0, 0.18, 0.05]} material={fabricMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.5} />
      </RoundedBox>

      {/* Seat back */}
      <RoundedBox args={[1.05, 1.2, 0.1]} radius={0.03} position={[0, 0.88, -0.4]} rotation={[0.1, 0, 0]} material={fabricMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.5} />
      </RoundedBox>

      {/* Headrest */}
      <RoundedBox args={[0.6, 0.3, 0.12]} radius={0.05} position={[0, 1.6, -0.42]} rotation={[0.06, 0, 0]} material={fabricMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.5} />
      </RoundedBox>

      {/* Seat back shell */}
      <RoundedBox args={[1.1, 1.25, 0.06]} radius={0.02} position={[0, 0.88, -0.48]} rotation={[0.1, 0, 0]} material={darkMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </RoundedBox>

      {/* Left armrest */}
      <RoundedBox args={[0.06, 0.06, 0.8]} radius={0.02} position={[-0.58, 0.4, 0.05]} material={frameMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>
      {/* Left armrest supports */}
      <mesh position={[-0.58, 0.22, -0.3]} material={frameMat}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </mesh>
      <mesh position={[-0.58, 0.22, 0.4]} material={frameMat}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </mesh>

      {/* Right armrest */}
      <RoundedBox args={[0.06, 0.06, 0.8]} radius={0.02} position={[0.58, 0.4, 0.05]} material={frameMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>
      <mesh position={[0.58, 0.22, -0.3]} material={frameMat}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </mesh>
      <mesh position={[0.58, 0.22, 0.4]} material={frameMat}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </mesh>

      {/* Legs */}
      {(
        [
          [-0.42, -0.18, 0.35],
          [0.42, -0.18, 0.35],
          [-0.42, -0.18, -0.25],
          [0.42, -0.18, -0.25],
        ] as [number, number, number][]
      ).map((pos, i) => (
        <mesh key={i} position={pos} material={frameMat}>
          <cylinderGeometry args={[0.025, 0.02, 0.5, 8]} />
          <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
        </mesh>
      ))}

      {/* Tray table (folded against back) */}
      <RoundedBox args={[0.55, 0.4, 0.015]} radius={0.01} position={[0, 0.6, -0.43]} rotation={[0.1, 0, 0]} material={darkMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </RoundedBox>

      {/* Recline mechanism housing */}
      <RoundedBox args={[0.2, 0.08, 0.06]} radius={0.01} position={[0.35, 0.35, -0.36]} material={frameMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </RoundedBox>
    </group>
  );
}

function GalleyModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = scrollProgress * Math.PI * 1.5 - Math.PI * 0.2;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * delta * 3;
  });

  const cabinetMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#e8e4dc",
        roughness: 0.35,
        metalness: 0.1,
        clearcoat: 0.3,
      }),
    []
  );
  const frameMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: CHROME,
        roughness: 0.15,
        metalness: 0.95,
        clearcoat: 0.5,
      }),
    []
  );
  const counterMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#4a4d55",
        roughness: 0.3,
        metalness: 0.5,
        clearcoat: 0.6,
      }),
    []
  );

  return (
    <group ref={groupRef} scale={0.6} position={[0, -0.7, 0]}>
      {/* Main body */}
      <RoundedBox args={[2.0, 2.4, 0.85]} radius={0.03} position={[0, 1.2, 0]} material={cabinetMat}>
        <Edges threshold={12} color={EDGE_COLOR} lineWidth={0.5} />
      </RoundedBox>

      {/* Shelf dividers */}
      {[0.45, 1.05, 1.65].map((y, i) => (
        <RoundedBox key={i} args={[1.92, 0.025, 0.8]} radius={0.005} position={[0, y, 0]} material={frameMat}>
          <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
        </RoundedBox>
      ))}

      {/* Door panels (left and right) */}
      {[-0.49, 0.49].map((x, i) => (
        <group key={i}>
          <RoundedBox args={[0.94, 0.5, 0.02]} radius={0.01} position={[x, 1.85, 0.44]} material={cabinetMat}>
            <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
          </RoundedBox>
          {/* Door handle */}
          <mesh position={[x + (i === 0 ? 0.35 : -0.35), 1.85, 0.46]} material={frameMat}>
            <boxGeometry args={[0.12, 0.03, 0.02]} />
          </mesh>
        </group>
      ))}

      {/* Cart slots with carts */}
      {[-0.49, 0.49].map((x, i) => (
        <RoundedBox key={i} args={[0.82, 0.38, 0.7]} radius={0.02} position={[x, 0.22, 0.02]} material={frameMat}>
          <Edges threshold={12} color={EDGE_COLOR} lineWidth={0.4} />
        </RoundedBox>
      ))}

      {/* Counter top */}
      <RoundedBox args={[2.08, 0.04, 0.92]} radius={0.01} position={[0, 2.42, 0.02]} material={counterMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>

      {/* Coffee maker unit */}
      <RoundedBox args={[0.35, 0.4, 0.3]} radius={0.02} position={[-0.5, 2.64, -0.15]} material={counterMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </RoundedBox>
    </group>
  );
}

function LavatoryModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = scrollProgress * Math.PI * 1.8 + Math.PI * 0.1;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * delta * 3;
  });

  const wallMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#d5d0c8",
        roughness: 0.4,
        metalness: 0.05,
        clearcoat: 0.2,
      }),
    []
  );
  const fixtureMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: CHROME,
        roughness: 0.1,
        metalness: 0.95,
        clearcoat: 0.6,
      }),
    []
  );
  const porcelainMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#f0ede8",
        roughness: 0.15,
        metalness: 0.02,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      }),
    []
  );
  const counterMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#4a4d55",
        roughness: 0.25,
        metalness: 0.4,
        clearcoat: 0.5,
      }),
    []
  );
  const mirrorMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#8090a0",
        roughness: 0.0,
        metalness: 1.0,
        clearcoat: 1.0,
      }),
    []
  );

  return (
    <group ref={groupRef} scale={0.65} position={[0, -0.4, 0]}>
      {/* Back wall */}
      <RoundedBox args={[1.6, 2.2, 0.04]} radius={0.01} position={[0, 1.1, -0.65]} material={wallMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>
      {/* Left wall */}
      <RoundedBox args={[0.04, 2.2, 1.3]} radius={0.01} position={[-0.8, 1.1, 0]} material={wallMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>
      {/* Right wall (partial - door opening) */}
      <RoundedBox args={[0.04, 2.2, 0.5]} radius={0.01} position={[0.8, 1.1, -0.4]} material={wallMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>

      {/* Toilet bowl */}
      <mesh position={[0.1, 0.28, -0.3]} material={porcelainMat}>
        <cylinderGeometry args={[0.22, 0.18, 0.4, 16]} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </mesh>
      {/* Toilet seat */}
      <mesh position={[0.1, 0.5, -0.3]} material={porcelainMat}>
        <torusGeometry args={[0.17, 0.04, 8, 16]} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </mesh>
      {/* Toilet tank */}
      <RoundedBox args={[0.35, 0.3, 0.15]} radius={0.02} position={[0.1, 0.55, -0.55]} material={porcelainMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </RoundedBox>
      {/* Flush button */}
      <mesh position={[0.1, 0.72, -0.52]} material={fixtureMat}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 12]} />
      </mesh>

      {/* Vanity counter */}
      <RoundedBox args={[0.7, 0.05, 0.45]} radius={0.01} position={[-0.4, 0.9, 0.25]} material={counterMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>
      {/* Sink basin */}
      <mesh position={[-0.4, 0.84, 0.25]} material={porcelainMat}>
        <cylinderGeometry args={[0.14, 0.1, 0.12, 16]} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </mesh>
      {/* Faucet */}
      <mesh position={[-0.4, 1.0, 0.1]} material={fixtureMat}>
        <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
      </mesh>
      <mesh position={[-0.4, 1.08, 0.18]} rotation={[Math.PI / 2, 0, 0]} material={fixtureMat}>
        <cylinderGeometry args={[0.015, 0.01, 0.15, 8]} />
      </mesh>

      {/* Mirror */}
      <RoundedBox args={[0.45, 0.55, 0.015]} radius={0.02} position={[-0.4, 1.5, -0.63]} material={mirrorMat}>
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.4} />
      </RoundedBox>

      {/* Floor */}
      <RoundedBox args={[1.6, 0.03, 1.3]} radius={0.005} position={[0, 0.01, 0]}>
        <meshPhysicalMaterial color="#3a3d45" roughness={0.5} metalness={0.2} />
        <Edges threshold={15} color={EDGE_COLOR} lineWidth={0.3} />
      </RoundedBox>
    </group>
  );
}

interface SceneProps {
  scrollProgress: number;
  model: "seat" | "galley" | "lavatory";
}

function Scene({ scrollProgress, model }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        color="#ffffff"
      />
      <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#C9A96E" />
      <pointLight position={[0, 3, 5]} intensity={0.6} color="#e0d8cc" />
      <spotLight
        position={[0, 6, 0]}
        angle={0.5}
        penumbra={0.8}
        intensity={0.8}
        color="#ffffff"
      />

      <Environment preset="studio" environmentIntensity={0.3} />

      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.2}>
        {model === "seat" && <SeatModel scrollProgress={scrollProgress} />}
        {model === "galley" && <GalleyModel scrollProgress={scrollProgress} />}
        {model === "lavatory" && (
          <LavatoryModel scrollProgress={scrollProgress} />
        )}
      </Float>

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.25}
        scale={6}
        blur={2.5}
        far={4}
      />
    </>
  );
}

interface AircraftSeat3DProps {
  scrollProgress: number;
  model?: "seat" | "galley" | "lavatory";
  className?: string;
}

export default function AircraftSeat3D({
  scrollProgress,
  model = "seat",
  className = "",
}: AircraftSeat3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 1.5, 4.5], fov: 32 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ background: "transparent" }}
        shadows
      >
        <Scene scrollProgress={scrollProgress} model={model} />
      </Canvas>
    </div>
  );
}
