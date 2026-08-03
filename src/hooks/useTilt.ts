import { useRef } from 'react'
import type { MouseEvent } from 'react'

export function useTilt<T extends HTMLElement>(strength = 8) {
  const ref = useRef<T>(null)

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(0)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
