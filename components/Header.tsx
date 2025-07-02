"use client";

import { Menu, X, Phone, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16 space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg">
              <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
            </div>
            <div className="flex items-center">
              <span className="text-emerald-600 font-bold text-xl tracking-tight">
                Eco
              </span>
              <span className="text-blue-700 font-bold text-xl tracking-tight">
                Tech
              </span>
            </div>
          </div>

          {/* Desktop Navigation (closer to logo now) */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Contáctanos */}
            <a
              href="#contacto"
              className="group flex items-center space-x-2 text-gray-700 font-medium hover:text-emerald-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contáctanos</span>
            </a>

            {/* Cotizaciones */}
            <a
              href="#cotizaciones"
              className="group flex items-center space-x-2 text-gray-700 font-medium hover:text-emerald-600 transition-colors duration-200"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Cotizaciones</span>
            </a>
          </nav>

          {/* Spacer for pushing to right */}
          <div className="flex-grow" />

          {/* Country Flag + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Bandera de Perú + Texto */}
            <div className="hidden sm:flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w40/pe.png"
                alt="Bandera de Perú"
                className="w-5 h-4 rounded-sm shadow-sm"
              />
              <span className="text-gray-700 font-medium text-sm">
                Tienda Online
              </span>
            </div>

            {/* Botón del menú hamburguesa */}
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

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4 bg-white">
            {/* Contáctanos (móvil) */}
            <a
              href="#contacto"
              className="group flex items-center space-x-3 px-4 py-2 text-gray-700 font-medium hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contáctanos</span>
            </a>

            {/* Cotizaciones (móvil) */}
            <a
              href="#cotizaciones"
              className="group flex items-center space-x-3 px-4 py-2 text-gray-700 font-medium hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Cotizaciones</span>
            </a>

            {/* Bandera + texto (móvil) */}
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
