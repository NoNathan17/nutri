import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

const ThreeDLogo = () => {
  useEffect(() => {
    const width = 200;
    const height = 200;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, width / height, 0.01, 20);
    camera.position.z = 3;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 20);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xF1EBE1, 1);
    const container = document.getElementById('threeDLogo');
    
    // Make sure renderer is only appended once
    if (container && !container.contains(renderer.domElement)) {
      container.appendChild(renderer.domElement);
    }

    // Load the 3D Model using GLTFLoader
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      '/dumbbell.glb',  // Adjust the path to your model
      (gltf) => {
        model = gltf.scene;  // Get the model from the GLTF
        scene.add(model);  // Add the model to the scene

        // Optionally scale the model if it's too small/big
        model.scale.set(1, 1, 1);  // Adjust the scale if necessary
        model.position.set(0, 0, 0);  // Position the model at the center
      },
      undefined,  // Optional progress handler (can be added if needed)
      (error) => {  // Error handler
        console.error('Error loading model:', error);
      }
    );

    // Animation Function
    const animate = (time: number) => {
      if (model) {
        // Rotate the model for animation effect
        model.rotation.x = time / 2000;
        model.rotation.y = time / 1500;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate); // Use requestAnimationFrame for smoother animation
    };

    animate(0);  // Start the animation loop

    // Cleanup on component unmount
    return () => {
      renderer.dispose();  // Dispose the renderer when the component unmounts
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };

  }, []);  // Empty dependency array ensures this effect only runs once (on mount)

  return <div id="threeDLogo"/>;
};

export default ThreeDLogo;
