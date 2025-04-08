import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

// Import logo assets
import amazonLogo from '../assets/amazonLogo.png';
import amazonDarkLogo from '../assets/amazonDarkLogo.png';
import shopifyLogo from '../assets/shopifyBagLogo.png';
import googleLogo from '../assets/Ga4BarLogo.png';
import metaLogo from '../assets/metaAdsLogo.png';
import klaviyoLogo from '../assets/klaviyoLogo.png';  

const DataFlowAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Check for dark mode
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Setup scene
    const scene = new THREE.Scene();
    
    // Setup camera with correct aspect ratio
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 10;
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Setup lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x4361EE, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Create platform logos (source platforms)
    const platforms = [
      { name: 'Amazon', position: new THREE.Vector3(-6, 3, 0), color: 0xff9900, texture: isDarkMode ? amazonDarkLogo : amazonLogo },
      { name: 'Shopify', position: new THREE.Vector3(-6, 1, 0), color: 0x7ab55c, texture: shopifyLogo },
      { name: 'Google Ads', position: new THREE.Vector3(-6, -1, 0), color: 0x4285f4, texture: googleLogo },
      { name: 'Meta Ads', position: new THREE.Vector3(-5, 4, 0), color: 0x3b5998, texture: metaLogo },
      { name: 'Klaviyo', position: new THREE.Vector3(-5, -3, 0), color: 0x00c1b2, texture: klaviyoLogo }
    ];
    
    // Create central hub with Channel IQ logo
    const hubSize = 1.5;
    const hubGeometry = new THREE.CircleGeometry(hubSize, 32);
    
    // Use the uploaded logo texture for the central hub
    const logoTexture = new THREE.TextureLoader().load('/lovable-uploads/505aad03-5415-492d-9eb4-1411287042fc.png');
    const hubMaterial = new THREE.MeshBasicMaterial({ 
      map: logoTexture,
      transparent: true
    });
    
    const hub = new THREE.Mesh(hubGeometry, hubMaterial);
    hub.position.set(0, 0, 0); // Centered position
    scene.add(hub);
    
    // Enhanced AI Brain at the intersection with futuristic look
    const brainSize = 0.8;
    const brainGeometry = new THREE.CircleGeometry(brainSize, 32);
    
    // Create an enhanced futuristic brain texture
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Clear background
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a more intense radial gradient for the glow effect
      const gradient = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(76, 201, 240, 1)');
      gradient.addColorStop(0.3, 'rgba(67, 97, 238, 0.9)');
      gradient.addColorStop(0.6, 'rgba(67, 97, 238, 0.5)');
      gradient.addColorStop(1, 'rgba(67, 97, 238, 0)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw futuristic brain design
      context.fillStyle = 'white';
      
      // Draw brain circuits
      context.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      context.lineWidth = 2;
      
      // Draw circuit lines
      context.beginPath();
      context.moveTo(canvas.width * 0.3, canvas.height * 0.4);
      context.lineTo(canvas.width * 0.45, canvas.height * 0.45);
      context.lineTo(canvas.width * 0.55, canvas.height * 0.55);
      context.lineTo(canvas.width * 0.7, canvas.height * 0.6);
      context.stroke();
      
      context.beginPath();
      context.moveTo(canvas.width * 0.3, canvas.height * 0.6);
      context.lineTo(canvas.width * 0.4, canvas.height * 0.5);
      context.lineTo(canvas.width * 0.6, canvas.height * 0.5);
      context.lineTo(canvas.width * 0.7, canvas.height * 0.4);
      context.stroke();
      
      // Draw nodes at circuit intersections
      context.fillStyle = 'rgba(114, 225, 255, 0.9)';
      
      // Nodes
      [
        [0.45, 0.45],
        [0.55, 0.55],
        [0.4, 0.5],
        [0.6, 0.5]
      ].forEach(([x, y]) => {
        context.beginPath();
        context.arc(canvas.width * x, canvas.height * y, 4, 0, Math.PI * 2);
        context.fill();
      });
      
      // Central brain shape
      context.fillStyle = 'rgba(255, 255, 255, 0.25)';
      context.beginPath();
      context.ellipse(
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width * 0.2, 
        canvas.height * 0.25, 
        0, 0, Math.PI * 2
      );
      context.fill();
      
      // Draw brain outline
      context.strokeStyle = 'rgba(114, 225, 255, 0.8)';
      context.lineWidth = 3;
      context.beginPath();
      context.ellipse(
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width * 0.2, 
        canvas.height * 0.25, 
        0, 0, Math.PI * 2
      );
      context.stroke();
    }
    
    const brainTexture = new THREE.CanvasTexture(canvas);
    const brainMaterial = new THREE.MeshBasicMaterial({
      map: brainTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const brain = new THREE.Mesh(brainGeometry, brainMaterial);
    brain.position.set(0, 0, 0.1); // Slightly in front of the hub
    scene.add(brain);
    
    // Create platform logos and data flow particles
    const platformMeshes: THREE.Mesh[] = [];
    const dataParticles: THREE.Points[] = [];
    const connectionLines: THREE.Line[] = [];
    
    // Load textures for platform logos
    const textureLoader = new THREE.TextureLoader();
    
    platforms.forEach(platform => {
      // Create platform logo using the actual logo texture
      const iconGeometry = new THREE.PlaneGeometry(1.5, 1.5);
      const iconTexture = textureLoader.load(platform.texture, (texture) => {
        // Enable high-quality texture filtering
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.needsUpdate = true;
      });
      
      const iconMaterial = new THREE.MeshBasicMaterial({ 
        map: iconTexture,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        depthTest: true,
        side: THREE.DoubleSide
      });
      
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      icon.position.copy(platform.position);
      icon.scale.set(1.1, 1.1, 1.1);
      
      // Add a slight rotation to face the camera better
      icon.rotation.y = Math.PI * 0.1;
      
      scene.add(icon);
      platformMeshes.push(icon);
      
      // Create permanent connection line from platform to hub
      const points = [];
      points.push(new THREE.Vector3(platform.position.x, platform.position.y, platform.position.z));
      points.push(new THREE.Vector3(hub.position.x, hub.position.y, hub.position.z));
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: platform.color,
        transparent: true,
        opacity: 0.3,
        linewidth: 1
      });
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      connectionLines.push(line);
      
      // Create data flow particles
      const particleCount = 30; // Reduced for cleaner look
      const particlesGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      
      // Initialize particles along the path from platform to hub
      for (let i = 0; i < particleCount; i++) {
        const t = i / particleCount;
        // Direct path to the hub
        const x = platform.position.x + (hub.position.x - platform.position.x) * t;
        const y = platform.position.y + (hub.position.y - platform.position.y) * t;
        const z = platform.position.z + (hub.position.z - platform.position.z) * t;
        
        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        color: platform.color,
        size: 0.1,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });
      
      const particles = new THREE.Points(particlesGeometry, particleMaterial);
      scene.add(particles);
      dataParticles.push(particles);
    });
    
    // Create output metrics/features as rectangular displays
    const metrics = [
      { name: 'AI powered recommendations', position: new THREE.Vector3(6.5, 3.5, 0.1), color: 0x4CC9F0 },
      { name: 'Omnichannel unified analytics', position: new THREE.Vector3(6.5, 1.0, 0.1), color: 0x4CC9F0 },
      { name: 'Business health metric', position: new THREE.Vector3(6.5, -1.5, 0.1), color: 0x4CC9F0 },
      { name: 'Self service reports', position: new THREE.Vector3(6.5, -4.0, 0.1), color: 0x4CC9F0 }
    ];
    
    const metricMeshes: THREE.Mesh[] = [];
    const metricLines: THREE.Line[] = [];
    
    // Create metrics displays as rectangles with text
    metrics.forEach(metric => {
      // Create text canvas
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 2048;
      canvas.height = 768;
      
      if (context) {
        // Clear background
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Add stronger gradient background
        const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(76, 201, 240, 1)');
        gradient.addColorStop(0.3, 'rgba(76, 201, 240, 0.95)');
        gradient.addColorStop(0.7, 'rgba(76, 201, 240, 0.9)');
        gradient.addColorStop(1, 'rgba(76, 201, 240, 0.8)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add glowing border with multiple strokes
        context.strokeStyle = 'rgba(76, 201, 240, 1)';
        context.lineWidth = 20;
        context.strokeRect(0, 0, canvas.width, canvas.height);
        
        // Add inner glow
        context.strokeStyle = 'rgba(255, 255, 255, 1)';
        context.lineWidth = 12;
        context.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
        
        // Add text with better visibility
        context.font = 'bold 160px Arial';
        context.fillStyle = '#ffffff';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        // Add stronger text shadow
        context.shadowColor = 'rgba(0, 0, 0, 1)';
        context.shadowBlur = 40;
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
        
        // Split text into lines if needed
        const words = metric.name.split(' ');
        let lines = [];
        let currentLine = words[0];
        
        for (let i = 1; i < words.length; i++) {
          const testLine = currentLine + ' ' + words[i];
          const metrics = context.measureText(testLine);
          if (metrics.width < canvas.width - 1500) {
            currentLine = testLine;
          } else {
            lines.push(currentLine);
            currentLine = words[i];
          }
        }
        lines.push(currentLine);
        
        // Calculate total text height
        const lineHeight = 220;
        const totalTextHeight = lines.length * lineHeight;
        
        // Calculate starting Y position to center all lines
        const startY = (canvas.height - totalTextHeight) / 2 + lineHeight / 2;
        
        // Draw text lines with perfect centering
        lines.forEach((line, index) => {
          const y = startY + (index * lineHeight);
          
          // Draw text outline for better readability
          context.strokeStyle = 'rgba(0, 0, 0, 1)';
          context.lineWidth = 15;
          context.strokeText(line, canvas.width / 2, y);
          
          // Draw main text
          context.fillText(line, canvas.width / 2, y);
        });
      }
      
      const metricGeometry = new THREE.PlaneGeometry(5.0, 2.0);
      const metricTexture = new THREE.CanvasTexture(canvas);
      const metricMaterial = new THREE.MeshBasicMaterial({
        map: metricTexture,
        transparent: true,
        opacity: 1.0,
        side: THREE.DoubleSide
      });
      
      const metricMesh = new THREE.Mesh(metricGeometry, metricMaterial);
      metricMesh.position.copy(metric.position);
      metricMesh.visible = false;
      scene.add(metricMesh);
      metricMeshes.push(metricMesh);
      
      // Create connecting lines from hub to metrics with better visibility
      const points = [];
      points.push(new THREE.Vector3(hub.position.x, hub.position.y, hub.position.z - 0.1));
      points.push(new THREE.Vector3(metric.position.x, metric.position.y, metric.position.z - 0.1));
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: metric.color,
        transparent: true,
        opacity: 0.9,
        linewidth: 6
      });
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      line.visible = false;
      scene.add(line);
      metricLines.push(line);
      
      // Show line with metric after delay
      setTimeout(() => {
        line.visible = true;
      }, 3000);
    });
    
    // Animate the data flow
    const animateDataFlow = () => {
      dataParticles.forEach((particles, index) => {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        const platform = platforms[index];
        
        for (let i = 0; i < positions.length / 3; i++) {
          // Move particle toward hub
          const dx = hub.position.x - positions[i * 3];
          const dy = hub.position.y - positions[i * 3 + 1];
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // If close to hub, reset to platform
          if (distance < 0.3) {
            positions[i * 3] = platform.position.x;
            positions[i * 3 + 1] = platform.position.y;
            positions[i * 3 + 2] = platform.position.z;
          } else {
            // Move toward hub
            positions[i * 3] += dx * 0.02;
            positions[i * 3 + 1] += dy * 0.02;
          }
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
      });
    };
    
    // Show metrics with enhanced animation
    setTimeout(() => {
      metricMeshes.forEach((metric, index) => {
        setTimeout(() => {
          metric.visible = true;
          // Enhanced animation
          metric.scale.set(0, 0, 0);
          metric.position.z = -2; // Start further behind
          new TWEEN.Tween(metric.scale)
            .to({ x: 1, y: 1, z: 1 }, 1200)
            .easing(TWEEN.Easing.Elastic.Out)
            .start();
          new TWEEN.Tween(metric.position)
            .to({ z: 0 }, 1200)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
        }, index * 1000); // Increased delay between boxes
      });
    }, 3000);
    
    // Enhanced pulse animation for hub
    const pulseHub = () => {
      new TWEEN.Tween(hub.scale)
        .to({ x: 1.1, y: 1.1, z: 1.1 }, 1000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .yoyo(true)
        .repeat(Infinity)
        .start();
    };
    
    // Add heartbeat animation for the brain
    const pulseBrain = () => {
      // Starting scale
      brain.scale.set(1, 1, 1);
      
      // First quick expansion (systole)
      new TWEEN.Tween(brain.scale)
        .to({ x: 1.2, y: 1.2, z: 1.2 }, 150)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onComplete(() => {
          // Quick contraction
          new TWEEN.Tween(brain.scale)
            .to({ x: 1.05, y: 1.05, z: 1.05 }, 100)
            .easing(TWEEN.Easing.Quadratic.In)
            .onComplete(() => {
              // Second smaller beat
              new TWEEN.Tween(brain.scale)
                .to({ x: 1.15, y: 1.15, z: 1.15 }, 120)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onComplete(() => {
                  // Return to normal with pause
                  new TWEEN.Tween(brain.scale)
                    .to({ x: 1, y: 1, z: 1 }, 300)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .delay(200) // Pause before next beat
                    .onComplete(() => {
                      // Restart the heartbeat after a pause
                      setTimeout(pulseBrain, 800);
                    })
                    .start();
                })
                .start();
            })
            .start();
        })
        .start();
    };
    
    pulseHub();
    pulseBrain();
    
    // Add light beams emanating from the brain to create visual interest
    const createLightBeam = (startAngle: number, endAngle: number) => {
      const curve = new THREE.EllipseCurve(
        0, 0,            // Center x, y
        1.5, 1.5,        // xRadius, yRadius
        startAngle, endAngle, // Start angle, end angle
        false,           // Clockwise
        0                // Rotation
      );
      
      const points = curve.getPoints(50);
      const beamGeometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const beamMaterial = new THREE.LineBasicMaterial({
        color: 0x4CC9F0,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      });
      
      const beam = new THREE.Line(beamGeometry, beamMaterial);
      beam.position.set(0, 0, 0.05); // Slightly in front of the hub
      beam.rotation.z = Math.random() * Math.PI * 2; // Random rotation
      scene.add(beam);
      
      // Animate the beam rotation
      new TWEEN.Tween(beam.rotation)
        .to({ z: beam.rotation.z + Math.PI * 2 }, 8000 + Math.random() * 4000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .repeat(Infinity)
        .start();
      
      // Fade in and out
      new TWEEN.Tween(beamMaterial)
        .to({ opacity: 0.1 }, 2000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .yoyo(true)
        .repeat(Infinity)
        .start();
    };
    
    // Create a few light beams
    for (let i = 0; i < 3; i++) {
      createLightBeam(0, Math.PI / 2 + Math.random() * Math.PI / 4);
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate hub slowly
      hub.rotation.y += 0.005;
      
      // Rotate brain at a different speed for interesting effect
      brain.rotation.y -= 0.008;
      
      // Update data flow
      animateDataFlow();
      
      // Update TWEEN
      TWEEN.update();
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      // Dispose of geometries and materials
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 rounded-xl overflow-hidden"
      aria-label="Interactive visualization of Channel IQ's data flow"
    />
  );
};

export default DataFlowAnimation;
