import { useLayoutEffect, useRef } from "react";
import styles from "./index.module.css";

interface ParticlesComponentProps {
  width?: number;
  height?: number;
  amount: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const ParticlesComponent = ({
  width,
  height,
  amount,
}: ParticlesComponentProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && width && height) {
      const particles: Particle[] = [];
      const particleCount = amount;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 3 - 1.5,
          speedY: Math.random() * 3 - 1.5,
        });
      }

      const update = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "white";
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x > width) {
            p.x = 0;
          }
          if (p.x < 0) {
            p.x = width;
          }
          if (p.y > height) {
            p.y = 0;
          }
          if (p.y < 0) {
            p.y = height;
          }
        });
        particles.forEach((p1) => {
          particles.forEach((p2) => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < amount * 1.5) {
              ctx.globalAlpha = 1 - dist / (amount * 1.5);
              ctx.beginPath();
              ctx.strokeStyle = "white";
              ctx.lineWidth = 1;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          });
        });

        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(update);
      };

      update();
    }
  }, [height, width]);

  return (
    <div className={styles["container"]}>
      <canvas
        className={styles["canvas"]}
        width={width}
        height={height}
        ref={canvasRef}
      />
    </div>
  );
};

export default ParticlesComponent;
