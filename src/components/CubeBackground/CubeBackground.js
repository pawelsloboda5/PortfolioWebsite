import React, { useLayoutEffect, useRef, useState } from 'react';
import * as THREE from 'three';


const CubeBackground = ( props ) => {
    const mountRef = useRef(null);
    
  useLayoutEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, 
            window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        mountRef.current.appendChild(renderer.domElement);

        const adjustRendererSize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', adjustRendererSize);
        adjustRendererSize();

    // Create multiple cubes
    const cubes = [];
    let cubeSize = Math.random() * 0.03 + 0.01;
    const scale = 1; // Adjust this scale to change the size of the bounds
    const boundsX = props.bounds.width / 2 - cubeSize;
    const boundsY = props.bounds.height / 0.8 - cubeSize;
    const positionSpread = 1;
    for (let i = 0; i < 30; i++) {
      cubeSize = Math.random() * 0.03 + 0.01;
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const material = [
        new THREE.MeshBasicMaterial({ color: 0x505050 }), // Dark gray
        new THREE.MeshBasicMaterial({ color: 0x585858 }), // Slightly lighter gray
        new THREE.MeshBasicMaterial({ color: 0x606060 }), // And so on...
        new THREE.MeshBasicMaterial({ color: 0x686868 }),
        new THREE.MeshBasicMaterial({ color: 0x707070 }),
        new THREE.MeshBasicMaterial({ color: 0x787878 })  // Lightest gray
    ];
      const cube = new THREE.Mesh(geometry, material);

      // Set random position within bounds
      cube.position.x = positionSpread * (Math.random() - 0.5) * boundsX;
      cube.position.y = (positionSpread * (Math.random() - 0.5) * boundsY)+0.5;
      cube.position.z = positionSpread * (Math.random() - 0.5) * boundsX; // Similar bounds for z-axis

    // Set random movement speed within a smaller range
    cube.moveSpeedX = (Math.random() * 0.0012 - 0.0010) ;
    cube.moveSpeedY = (Math.random() * 0.0012 - 0.0010) ;
    cube.directionX = 1;
    cube.directionY = 1;

      scene.add(cube);
      cubes.push(cube);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        
        cubes.forEach(cube => {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
      
          // Update position based on speed and direction
          cube.position.x += cube.moveSpeedX * cube.directionX;
          cube.position.y += cube.moveSpeedY * cube.directionY;
      
          // Check for boundary collision and reverse direction if needed
        if (cube.position.x >= boundsX || cube.position.x <= -boundsX) {
            console.log(`Cube at X boundary: ${cube.position.x}`);
            console.log(`boundsX: ${boundsX}`);
            cube.directionX *= -1; // Reverse direction for bounce
        }
        if (cube.position.y >= boundsY || cube.position.y <= -boundsY) {
            console.log(`Cube at Y boundary: ${cube.position.y}`);
            console.log(`boundsY: ${boundsY}`);
            cube.directionY *= -1; // Reverse direction for bounce
        }
      
        });
      
        renderer.render(scene, camera);
      };
      

      animate();

      return () => {
        window.removeEventListener('resize', adjustRendererSize);
        mountRef.current.removeChild(renderer.domElement);
      };
  }, []); // Depend on props.bounds

  return <div ref={mountRef} className="cube-background bg-transparent" />;
};

export default CubeBackground;
