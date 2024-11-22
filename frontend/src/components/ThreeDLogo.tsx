import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

const ThreeDLogo = () => {
  useEffect(() => {
    const width = 200;
    const height = 200;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, width / height, 0.01, 20);
    camera.position.z = 3;

    const ambientLight = new THREE.AmbientLight(0x404040, 20);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xf1ebe1, 1);
    const container = document.getElementById("threeDLogo");

    if (container && !container.contains(renderer.domElement)) {
      container.appendChild(renderer.domElement);
    }

    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      "/dumbbell.glb",
      (gltf) => {
        model = gltf.scene;
        scene.add(model);

        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const animate = (time: number) => {
      if (model) {
        model.rotation.x = time / 2000;
        model.rotation.y = time / 1500;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      renderer.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="threeDLogo" />;
};

export default ThreeDLogo;
