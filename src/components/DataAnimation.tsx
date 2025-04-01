
import React, { useEffect, useRef } from 'react';

const DataAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Node class for data points with enhanced visuals
    class Node {
      x: number;
      y: number;
      size: number;
      maxSize: number;
      speedX: number;
      speedY: number;
      connections: number[];
      value: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
      pulseDirection: boolean;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.maxSize = this.size * (Math.random() * 1.5 + 1);
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.connections = [];
        this.value = Math.random() * 100;
        
        // More vibrant, sophisticated colors
        const colors = [
          'rgba(67, 97, 238, 0.7)',  // Channel IQ blue
          'rgba(76, 201, 240, 0.7)', // Light blue
          'rgba(58, 12, 163, 0.6)'   // Indigo
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 0.1 + Math.random() * 0.3;
        
        // Pulse animation properties
        this.pulseSpeed = 0.005 + Math.random() * 0.01;
        this.pulseDirection = Math.random() > 0.5;
      }
      
      update(mouseX: number, mouseY: number) {
        // Move the node
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        
        // Pulse animation (grow and shrink)
        if (this.pulseDirection) {
          this.size += this.pulseSpeed;
          if (this.size >= this.maxSize) this.pulseDirection = false;
        } else {
          this.size -= this.pulseSpeed;
          if (this.size <= this.maxSize / 2) this.pulseDirection = true;
        }
        
        // React to mouse proximity
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          // Nodes slightly move away from cursor for an interactive feel
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
          this.size = this.maxSize * 1.3; // Enlarge when near cursor
        }
      }
      
      draw() {
        if (!ctx) return;
        
        // Draw node with gradient for a more premium look
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
    
    // Create data visualization nodes
    const nodeCount = Math.min(Math.floor(window.innerWidth / 30), 70); // Fewer, more premium nodes
    const nodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push(new Node(x, y));
    }
    
    // Add connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const otherNode = nodes[j];
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          
          if (distance < 150) {
            node.connections.push(j);
          }
        }
      }
    }
    
    // Track mouse position for interactive effects
    let mouseX = 0;
    let mouseY = 0;
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
    
    // Data visualization with flowing chart lines
    const drawDataFlowLines = () => {
      if (!ctx) return;
      
      // Draw sophisticated flowing data chart lines
      const chartHeight = 120;
      const segmentWidth = canvas.width / 3;
      const startY = canvas.height / 2 - chartHeight / 2;
      
      // Draw chart lanes with smooth curves
      for (let lane = 0; lane < 3; lane++) {
        const laneY = startY + (lane * chartHeight / 3);
        const phaseOffset = lane * Math.PI / 4; // Offset the sine wave for each lane
        
        ctx.beginPath();
        ctx.moveTo(0, laneY);
        
        for (let x = 0; x <= canvas.width; x += 5) {
          // Create smooth flowing line with sine wave
          const time = Date.now() / 3000;
          const amplitude = 15 * (1 + Math.sin(time / 2 + lane));
          const frequency = 0.01 + lane * 0.005;
          
          // Multiple sine waves combined for organic movement
          const y = laneY + 
                   amplitude * Math.sin(x * frequency + time + phaseOffset) + 
                   amplitude/2 * Math.sin(x * frequency * 2 + time * 1.5);
          
          ctx.lineTo(x, y);
        }
        
        // Use gradient stroke for premium look
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        
        if (lane === 0) {
          gradient.addColorStop(0, 'rgba(67, 97, 238, 0.2)');
          gradient.addColorStop(1, 'rgba(76, 201, 240, 0.3)');
        } else if (lane === 1) {
          gradient.addColorStop(0, 'rgba(76, 201, 240, 0.2)');
          gradient.addColorStop(1, 'rgba(58, 12, 163, 0.3)');
        } else {
          gradient.addColorStop(0, 'rgba(58, 12, 163, 0.2)');
          gradient.addColorStop(1, 'rgba(67, 97, 238, 0.3)');
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with elegant fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw flowing data visualization
      drawDataFlowLines();
      
      // Update and draw nodes
      for (const node of nodes) {
        node.update(mouseX, mouseY);
        node.draw();
        
        // Draw connections with improved aesthetics
        for (const connectionIdx of node.connections) {
          const connectedNode = nodes[connectionIdx];
          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
          );
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            
            // Create gradient connection lines
            const gradient = ctx.createLinearGradient(
              node.x, node.y, connectedNode.x, connectedNode.y
            );
            gradient.addColorStop(0, node.color.replace('0.7', '0.15'));
            gradient.addColorStop(1, connectedNode.color.replace('0.7', '0.15'));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-60"
    />
  );
};

export default DataAnimation;
