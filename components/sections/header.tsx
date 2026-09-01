"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/academy", label: "Beauty Academy" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0B0B0B]/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/images/logo-nuevo.png" alt="Logo" width={44} height={44} className="w-11 h-11 rounded-full" />
            <span className="font-serif text-sm sm:text-base tracking-[0.08em] text-white">
              Beauty Studio
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 xl:px-4 py-2 text-[11px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-rose-light ${
                  pathname === link.href ? "text-rose-light" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/turnos"
              className="ml-3 px-6 py-2.5 rounded-full bg-rose-primary text-[#111111] text-[11px] uppercase tracking-[0.14em] font-semibold hover:bg-rose-light transition-colors shadow-sm"
            >
              Agendar turno
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#111111] border border-white/10 rounded-2xl shadow-xl mb-4 overflow-hidden animate-scale-in">
            <nav className="p-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 text-white text-sm hover:bg-white/5 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/turnos"
                className="block text-center mt-2 py-3 px-4 rounded-xl bg-rose-primary text-[#111111] text-sm font-semibold uppercase tracking-[0.14em] hover:bg-rose-light transition-colors"
              >
                Agendar turno
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
