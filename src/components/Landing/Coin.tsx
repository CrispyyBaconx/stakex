import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import OcclusionComposer from '@/components/Landing/Scripts/OcclusionComposer';

const Coin: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevTimestamp = useRef<number>(0);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
    
        const canvas = canvasRef.current;
    
        // Create Scene + Camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
    
        // Create WebGLRenderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    
        // Create Occulsion Composer
        const occlusionComposer = new OcclusionComposer(renderer, scene, camera);
    
        // Add Ambient Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
    
        // Add Point Light
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.set(2, 3, 4);
        scene.add(pointLight);
    
        // Generic
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0x156289 });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
    
        // Update Function
        const update = (time: number) => {
            sphere.rotation.x = time * 0.005;
            sphere.rotation.y = time * 0.005;
            sphere.rotation.z = time * 0.005;
        };
    
        // Animation loop
        const animate = (timestamp) => {
            const delta = timestamp - prevTimestamp.current;
            prevTimestamp.current = timestamp;
            
            update(delta);
            
            // Render using OcclusionComposer
            occlusionComposer.render(delta);
            
            requestAnimationFrame(animate);
        };
    
        // Start the animation loop
        requestAnimationFrame(animate);
    
        return () => {
            // Clean up resources on unmount
            renderer.dispose();
        };
    }, []);

    return (
        <canvas ref={canvasRef} />
    );
};

export default Coin;