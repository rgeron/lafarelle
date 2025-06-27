"use client"

import type { ReactNode } from "react"

interface CustomButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export default function CustomButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: CustomButtonProps) {
  const baseClasses =
    "font-mono font-bold tracking-wide transition-all duration-300 border-2 relative overflow-hidden group cursor-pointer"

  const variants = {
    primary: "bg-primary border-primary text-white hover:bg-transparent hover:text-primary hover:shadow-lg",
    secondary: "bg-secondary border-secondary text-primary hover:bg-transparent hover:text-secondary hover:shadow-lg",
    outline: "bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} hover-lift`}
      onClick={onClick}
      style={{
        // S'assurer que le bouton est toujours visible
        opacity: 1,
        visibility: "visible",
        transform: "translateY(0)",
        minHeight: size === "lg" ? "60px" : size === "md" ? "48px" : "40px",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Content - toujours visible */}
      <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 block">{children}</span>

      {/* Corner accent - plus subtil */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-secondary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-l-[8px] group-hover:border-t-[8px]"></div>

      {/* Subtle glow - réduit pour éviter les problèmes de visibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>
  )
}
