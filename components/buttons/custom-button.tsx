"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function CustomButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
}: CustomButtonProps) {
  const baseClasses =
    "font-mono font-bold tracking-wide transition-all duration-300 border-2 relative overflow-hidden group cursor-pointer inline-block";

  const variants = {
    primary:
      "bg-primary border-primary text-white hover:bg-secondary hover:text-primary hover:shadow-lg",
    secondary:
      "bg-secondary border-secondary text-primary hover:bg-transparent hover:text-secondary hover:shadow-lg",
    outline:
      "bg-transparent border-white text-white hover:bg-white hover:text-primary hover:shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonStyles = {
    // S'assurer que le bouton est toujours visible
    opacity: 1,
    visibility: "visible" as const,
    transform: "translateY(0)",
    minHeight: size === "lg" ? "60px" : size === "md" ? "48px" : "40px",
    position: "relative" as const,
    zIndex: 10,
  };

  const content = (
    <>
      {/* Content - toujours visible */}
      <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 block">
        {children}
      </span>

      {/* Corner accent - plus subtil */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-secondary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-l-[8px] group-hover:border-t-[8px]"></div>

      {/* Subtle glow - réduit pour éviter les problèmes de visibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} hover-lift`}
        style={buttonStyles}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${
        sizes[size]
      } ${className} hover-lift ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      style={buttonStyles}
    >
      {content}
    </button>
  );
}
