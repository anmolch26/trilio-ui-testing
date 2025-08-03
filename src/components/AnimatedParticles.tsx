import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface AnimatedParticlesProps {
  showAnimation?: boolean;
}

const AnimatedParticles: React.FC<AnimatedParticlesProps> = ({
  showAnimation = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (!showAnimation || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 86; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (3 - 0.5) + 0.5, // Smaller size range: 0.5-3
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.7,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        });
      }
    };
    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set blend mode and background
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#0a1428";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update pulse
        particle.pulse += particle.pulseSpeed;
        const pulseSize =
          particle.size + Math.sin(particle.pulse) * (particle.size * 0.2);

        // Wrap around screen
        if (particle.x > canvas.width + particle.size)
          particle.x = -particle.size;
        if (particle.x < -particle.size)
          particle.x = canvas.width + particle.size;
        if (particle.y > canvas.height + particle.size)
          particle.y = -particle.size;
        if (particle.y < -particle.size)
          particle.y = canvas.height + particle.size;

        // Calculate opacity based on distance from edges
        const distanceFromCenterX =
          Math.abs(particle.x - canvas.width / 2) / (canvas.width / 2);
        const distanceFromCenterY =
          Math.abs(particle.y - canvas.height / 2) / (canvas.height / 2);
        const distanceFromCenter = Math.max(
          distanceFromCenterX,
          distanceFromCenterY
        );
        const edgeOpacity = Math.max(
          0,
          Math.min(0.7, distanceFromCenter * 0.7)
        );

        // Draw particle as simple glowing dot
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        
        // Simple white/light blue glow
        ctx.fillStyle = `rgba(255, 255, 255, ${edgeOpacity * 0.8})`;
        ctx.fill();
        
        // Add subtle glow ring
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 132, 255, ${edgeOpacity * 0.3})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showAnimation]);

  if (!showAnimation) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="particles-canvas" 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }}
    />
  );
};

export default AnimatedParticles;
