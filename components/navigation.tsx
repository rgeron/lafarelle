"use client"

import { useState } from "react"
import Link from "next/link"
import CustomButton from "./custom-button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "ACCUEIL" },
    { href: "/about", label: "A PROPOS" },
    { href: "/case-studies", label: "ETUDES DE CAS" },
    { href: "/services", label: "SERVICES" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="bg-white border-b-4 border-primary sticky top-0 z-50 font-mono">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-primary text-white px-4 py-2">
              <span className="text-xl font-bold tracking-wider">LAFARELLE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary hover:text-secondary font-bold text-sm tracking-wide transition-colors relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
            <CustomButton variant="primary" size="sm">
              CONSULTATION
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden bg-primary text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-primary bg-gray-50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-primary hover:text-secondary font-bold text-sm tracking-wide transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <CustomButton variant="primary" size="sm">
                  CONSULTATION
                </CustomButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
