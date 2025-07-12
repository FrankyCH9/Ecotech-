"use client"

import {
  Menu,
  X,
  Phone,
  FileText,
  Search,
  Store,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/* ───────────────  Ícono de WhatsApp (SVG)  ─────────────── */
function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2a9.94 9.94 0 0 0-8.04 15.92L2 22l4.21-1.99A9.94 9.94 0 1 0 12.04 2Zm0 18.13a8.19 8.19 0 1 1 0-16.38 8.19 8.19 0 0 1 0 16.38Zm4.49-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13s-.65.81-.8.97c-.15.17-.3.19-.56.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.39-1.72-.15-.26-.02-.4.11-.53.11-.11.25-.3.38-.46.13-.17.17-.28.26-.47.09-.19.04-.35-.02-.48-.06-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.37 3.89.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.57.21-1.06.15-1.17-.06-.11-.23-.18-.48-.31Z" />
    </svg>
  )
}

export default function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="bg-[#04396B] sticky top-0 z-50 h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="bg-white h-full flex items-center px-6">
            <Link href="/" passHref>
              <div className="w-40 h-40 cursor-pointer flex items-center justify-center">
                <img
                  src="/images/1.png"
                  alt="Logo de la empresa"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Navegación en escritorio */}
          <nav className="hidden md:flex items-center space-x-2 ml-4">
            <Button
              asChild
              variant="ghost"
              className="bg-[#80D0F7] text-[#04396B] font-bold rounded-full px-6 py-2 h-auto hover:bg-[#66C0E6] hover:text-white transition-colors duration-200"
            >
              <Link href="#contacto" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>CONTÁCTANOS</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="bg-[#F7D000] text-[#04396B] font-bold rounded-full px-6 py-2 h-auto hover:bg-[#E6C000] hover:text-white transition-colors duration-200"
            >
              <Link href="#cotizaciones" className="flex items-center space-x-2">
                <WhatsappIcon className="w-4 h-4" /> {/* ← Ícono inline */}
                <span>COTIZACIONES</span>
              </Link>
            </Button>
          </nav>

          {/* Barra de búsqueda */}
          <div className="hidden md:flex items-center ml-6 flex-grow max-w-sm">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Buscar productos"
                className="w-full rounded-l-md rounded-r-none border-none pl-4 pr-10 py-2 text-sm text-gray-700 focus:ring-0 focus:outline-none h-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full rounded-l-none rounded-r-md bg-white text-gray-500 hover:bg-gray-100"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Bandera y menú móvil */}
          <div className="flex items-center space-x-4 ml-6">
            <div className="hidden sm:flex items-center space-x-2 text-white font-medium text-sm">
              <img
                src="https://flagcdn.com/w40/pe.png"
                alt="Bandera de Perú"
                className="w-5 h-4 rounded-sm shadow-sm"
              />
              <ChevronDown className="w-4 h-4" />
              <Store className="w-5 h-5" />
              <span>Tienda Online</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 text-white hover:bg-white/10"
              onClick={toggleMobileMenu}
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4 bg-[#04396B]">
            <a
              href="#contacto"
              className="group flex items-center space-x-3 px-4 py-2 text-white font-medium hover:text-[#80D0F7] hover:bg-white/10 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contáctanos</span>
            </a>
            <a
              href="#cotizaciones"
              className="group flex items-center space-x-3 px-4 py-2 text-white font-medium hover:text-[#F7D000] hover:bg-white/10 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <WhatsappIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Cotizaciones</span>
            </a>
            <div className="flex items-center justify-center space-x-2 text-white">
              <img
                src="https://flagcdn.com/w40/pe.png"
                alt="Bandera de Perú"
                className="w-5 h-4 rounded-sm shadow-sm"
              />
              <Store className="w-5 h-5" />
              <span className="font-medium text-sm">Tienda Online</span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
