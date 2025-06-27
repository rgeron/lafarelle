"use client";

import { useEffect, useState } from "react";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export default function FloatingElements({
  count = 5,
  className = "",
}: FloatingElementsProps) {
  const [elements, setElements] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      delay: number;
      size: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      size: Math.random() * 8 + 4,
      duration: 6 + Math.random() * 4, // Random duration between 6-10s
    }));
    setElements(newElements);
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-10 transition-opacity duration-1000 ease-in-out"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
        >
          <div
            className="bg-secondary rounded-full"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationName: "float",
              animationDuration: `${element.duration}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${element.delay}s`,
              animationFillMode: "both",
            }}
          />
        </div>
      ))}
    </div>
  );
}
