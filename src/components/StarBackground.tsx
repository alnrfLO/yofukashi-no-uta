import { useRef, useEffect } from 'react'
const Tableau = ["pink","purple","white"]

function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current  ;
    if (!canvas) return 
    const ctx = canvas.getContext("2d");
    if (!ctx) return

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 500 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      color: Tableau[Math.floor(Math.random() * Tableau.length)]
    }));
    function animateStars() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.globalAlpha = 0.8 + 0.2 * Math.sin(Date.now() / 300);
      stars.forEach(s => {
        ctx!.fillStyle = s.color ;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > width) s.dx *= -1;
        if (s.y < 0 || s.y > height) s.dy *= -1;
      });
      requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, [])
  
  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0 }} />
}

export default StarBackground