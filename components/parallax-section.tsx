"use client"

import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        let transform = ""
        switch (direction) {
          case "up":
            transform = `translateY(${rate}px)`
            break
          case "down":
            transform = `translateY(${-rate}px)`
            break
          case "left":
            transform = `translateX(${rate}px)`
            break
          case "right":
            transform = `translateX(${-rate}px)`
            break
        }
        sectionRef.current.style.transform = transform
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
