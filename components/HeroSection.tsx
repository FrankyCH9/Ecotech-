"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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

export default function HeroSection() {
  const [clientes, setClientes] = useState(0);
  const [sedes, setSedes] = useState(0);
  const [accidentes, setAccidentes] = useState(0);
  const [showPhones, setShowPhones] = useState(false);

  useEffect(() => {
    const animate = (
      end: number,
      setter: (val: number) => void,
      duration = 2000
    ) => {
      let start = 0;
      const step = Math.ceil(duration / end);
      const interval = setInterval(() => {
        start++;
        setter(start);
        if (start >= end) clearInterval(interval);
      }, step);
    };

    animate(500, setClientes);
    animate(4, setSedes);
    animate(0, setAccidentes);
    setTimeout(() => setShowPhones(true), 1000);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center relative">
            <nav className="w-full flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                <a
                  href="#"
                  className="text-gray-700 font-medium hover:text-emerald-600 transition-colors"
                >
                  Inicio
                </a>

                {Object.entries(services).map(([key, items]) => {
                  const colorClasses = {
                    fumigacion: "hover:text-emerald-600 hover:bg-emerald-50",
                    limpieza: "hover:text-blue-600 hover:bg-blue-50",
                    gasfiteria: "hover:text-orange-600 hover:bg-orange-50",
                    alquiler: "hover:text-purple-600 hover:bg-purple-50",
                  };

                  return (
                    <DropdownMenu key={key}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors p-0 h-auto font-medium"
                        >
                          <span className="capitalize">{key}</span>
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-72 p-2 bg-white shadow-2xl border rounded-xl">
                        {items.map((service, index) => (
                          <DropdownMenuItem
                            key={index}
                            className={`p-3 rounded-lg ${
                              colorClasses[key as keyof typeof colorClasses]
                            } transition-colors cursor-pointer`}
                          >
                            <span className="text-sm">{service}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-[calc(100vh-80px)] relative">
          {/* Left image */}
          <div className="relative h-full w-full">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Imagen de servicios 1"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Cuadro azul: superpuesto en móvil, abajo izq en desktop */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 sm:top-auto sm:bottom-6 sm:left-12 sm:transform-none w-full sm:w-auto px-4 z-10">
              <div className="bg-white border-4 border-blue-900 rounded-2xl px-4 py-4 sm:px-10 sm:py-8 shadow-2xl max-w-xs sm:max-w-md mx-auto">
                <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center">
                  <div>
                    <div className="text-lg sm:text-3xl font-extrabold text-emerald-600">
                      {clientes}+
                    </div>
                    <div className="text-xs sm:text-base text-gray-700 font-medium">
                      Clientes
                    </div>
                    <div className="text-xs sm:text-base text-gray-700 font-medium">
                      Satisfechos
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-3xl font-extrabold text-gray-800">
                      {sedes}+
                    </div>
                    <div className="text-xs sm:text-base text-gray-700 font-medium">
                      Sedes
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-3xl font-extrabold text-gray-800">
                      {accidentes}+
                    </div>
                    <div className="text-xs sm:text-base text-gray-700 font-medium">
                      Accidentes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image + phones */}
          <div className="relative h-full w-full">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Imagen de servicios 2"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {showPhones && (
              <div className="absolute bottom-6 right-4 sm:bottom-[80px] sm:right-8 flex flex-col gap-4 z-10">
                {/* Teléfono fijo */}
                <Button
                  variant="outline"
                  className="w-64 sm:w-72 h-16 sm:h-20 bg-white border-2 border-emerald-600 hover:bg-emerald-50 rounded-xl shadow-md px-4 py-2 flex items-center gap-3 text-left"
                >
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <div>
                    <div className="text-xs text-gray-500">Consultas</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">
                      01-621 7996
                    </div>
                  </div>
                </Button>

                {/* Celulares */}
                <Button
                  variant="outline"
                  className="w-64 sm:w-72 h-20 sm:h-24 bg-white border-2 border-emerald-600 hover:bg-emerald-50 rounded-xl shadow-md px-4 py-2 flex items-start gap-3 text-left"
                >
                  <Phone className="w-5 h-5 text-emerald-600 mt-1" />
                  <div className="space-y-1">
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">
                      824-421056
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">
                      922-776631
                    </div>
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
