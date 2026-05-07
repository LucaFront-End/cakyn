import { useEffect, useRef, useState } from 'react'

/**
 * Animated counter hook.
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms
 * @param {boolean} trigger - When true, starts the animation (use with external ScrollTrigger).
 *                            Pass `null` or `undefined` to use built-in IntersectionObserver.
 */
export function useCountUp(end, duration = 2000, trigger) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  // External trigger mode
  useEffect(() => {
    if (trigger === null || trigger === undefined) return // IO mode
    if (trigger && !hasAnimated.current) {
      hasAnimated.current = true
      animateCount()
    }
  }, [trigger, end])

  // IntersectionObserver mode (when trigger is not provided)
  useEffect(() => {
    if (trigger !== null && trigger !== undefined) return // External mode
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  function animateCount() {
    const startTime = performance.now()
    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return { count, ref }
}
