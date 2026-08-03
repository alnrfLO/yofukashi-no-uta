import { useRef, useEffect } from 'react'
const Tableau = ["#f3f0ff", "#b28dff", "#ff6f9c", "#f2c879"]

function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = document.documentElement.scrollHeight
    let stars: ReturnType<typeof buildStars> = []

    function buildStars(w: number, h: number) {
      const density = 0.00014
      const count = Math.min(1400, Math.max(260, Math.round(w * h * density)))
      return Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        dx: (Math.random() - 0.5) * 0.15,
        dy: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2,
        color: Tableau[Math.floor(Math.random() * Tableau.length)]
      }))
    }

    function resize() {
      if (!canvas) return
      width = window.innerWidth
      height = document.documentElement.scrollHeight
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      stars = buildStars(width, height)
    }

    resize()

    let frameId: number
    function animateStars() {
      ctx!.clearRect(0, 0, width, height)
      stars.forEach(s => {
        const twinkle = 0.5 + 0.5 * Math.sin(Date.now() / 900 + s.phase)
        ctx!.globalAlpha = 0.35 + 0.55 * twinkle
        ctx!.shadowBlur = 6
        ctx!.shadowColor = s.color
        ctx!.fillStyle = s.color
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx!.fill()
        s.x += s.dx
        s.y += s.dy
        if (s.x < 0 || s.x > width) s.dx *= -1
        if (s.y < 0 || s.y > height) s.dy *= -1
      })
      frameId = requestAnimationFrame(animateStars)
    }

    animateStars()

    window.addEventListener("resize", resize)

    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(document.body)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      resizeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }} />
}

export default StarBackground
