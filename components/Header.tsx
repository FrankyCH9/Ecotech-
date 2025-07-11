"use client";

import { Menu, X, Phone, FileText } from "lucide-react";
import { useState } from "react";
import Link from "next/link"; // Asegúrate de tener esto
import { Button } from "@/components/ui/button";

export default function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#04396B] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-20 space-x-6">
          {/* Logo con enlace a la página principal */}
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <div className="w-36 h-36 cursor-pointer">
                <img
                  src="/images/1.png"
                  alt="Logo de la empresa"
                  className="w-full h-full object-contain transition-transform hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Navegación en escritorio */}
          <nav className="hidden md:flex items-center space-x-4">
            <a
              href="#contacto"
              className="group flex items-center space-x-2 text-white font-medium hover:text-[#3B7BA3] transition-colors duration-200"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>CONTÁCTANOS</span>
            </a>

            <a
              href="#cotizaciones"
              className="group flex items-center space-x-2 text-white font-medium hover:text-[#3B7BA3] transition-colors duration-200"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>COTIZACIONES</span>
            </a>
          </nav>

          {/* Espaciador para empujar a la derecha */}
          <div className="flex-grow" />

          {/* Bandera y botón de menú móvil */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w40/pe.png"
                alt="Bandera de Perú"
                className="w-5 h-4 rounded-sm shadow-sm"
              />
              <span className="text-white font-medium text-sm">
                Tienda Online
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
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
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4 bg-white">
            <a
              href="#contacto"
              className="group flex items-center space-x-3 px-4 py-2 text-gray-700 font-medium hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contáctanos</span>
            </a>

            <a
              href="#cotizaciones"
              className="group flex items-center space-x-3 px-4 py-2 text-gray-700 font-medium hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Cotizaciones</span>
            </a>

            <div className="flex items-center justify-center space-x-2">
              <img
                src="https://flagcdn.com/w40/pe.png"
                alt="Bandera de Perú"
                className="w-5 h-4 rounded-sm shadow-sm"
              />
              <span className="text-gray-700 font-medium text-sm">
                Tienda Online
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
