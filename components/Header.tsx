"use client";

import { useState } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = {
    fumigacion: [
      "Servicio de fumigación",
      "Servicio de desinsectación",
      "Servicio de desratización",
      "Servicio de desinfección",
      "Limpieza de tanques y cisternas",
      "Limpieza de pozos sépticos",
      "Limpieza trampa de grasa",
      "Fumigación de granos",
    ],
    limpieza: [
      "Limpieza de fuminer",
      "Limpieza de limas",
      "Limpieza de ventanas",
      "Limpieza de fachadas",
      "Limpieza de baldosas",
      "Limpieza de fin de obra",
      "Limpieza de partes altas",
      "Disposición de desmontes",
      "Limpieza de ambientes",
    ],
    gasfiteria: [
      "Instalación de lavatorios",
      "Instalación de fluxómetros",
      "Instalación de urinarios",
      "Instalación de inodoros",
      "Instalación de lavaderos",
      "Diseño y rediseño de tuberías",
      "Instalación de grifos",
    ],
    alquiler: [
      "Fumigadoras",
      "Máquinas a motor",
      "Bombas manuales",
      "ULV eléctricos",
      "ULV nebulizadores",
      "Termonebulizadores",
      "Escalera tijera",
    ],
  };

  return (
    <header className="bg-white shadow-xl relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-white">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">01-921 7732</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">922-778631 / 924-421056</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">contacto@tentech.com.pe</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://flagcdn.com/w40/pe.png"
              alt="Bandera de Perú"
              className="w-6 h-4 rounded-sm shadow-sm"
            />
            <span className="font-bold text-emerald-100">Tenchy Group</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-4 py-6 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <span className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                EcoTech
              </span>
              <p className="text-xs text-gray-500">Servicios Profesionales</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium"
                >
                  <span>Fumigación</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-2 bg-white shadow-2xl border-0 rounded-xl">
                {services.fumigacion.map((service, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="p-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    <span className="text-sm">{service}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium"
                >
                  <span>Limpieza</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-2 bg-white shadow-2xl border-0 rounded-xl">
                {services.limpieza.map((service, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="p-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <span className="text-sm">{service}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium"
                >
                  <span>Gasfitería</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-2 bg-white shadow-2xl border-0 rounded-xl">
                {services.gasfiteria.map((service, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="p-3 rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  >
                    <span className="text-sm">{service}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium"
                >
                  <span>Alquiler</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-2 bg-white shadow-2xl border-0 rounded-xl">
                {services.alquiler.map((service, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="p-3 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    <span className="text-sm">{service}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Contactar
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
