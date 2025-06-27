"use client"

import { useEffect, useState } from "react"

interface FloatingElementsProps {
  count?: number
  className?: string
}

export default function FloatingElements({ count = 5, className = "" }: FloatingElementsProps) {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      size: Math.random() * 8 + 4,
    }))
    setElements(newElements)
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
          }}
        >
          <div
            className="bg-secondary animate-pulse"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
