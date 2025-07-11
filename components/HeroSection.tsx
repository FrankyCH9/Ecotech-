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

/* ─────────────────────  Servicios  ───────────────────── */
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

/* ─────────────────────  Componente  ───────────────────── */
export default function HeroSection() {
  const [clientes, setClientes] = useState(0);
  const [sedes, setSedes] = useState(0);
  const [accidentes, setAccidentes] = useState(0);
  const [showPhones, setShowPhones] = useState(false);

  /* Animaciones numéricas */
  useEffect(() => {
    const animate = (end: number, setter: (v: number) => void, dur = 2000) => {
      let s = 0;
      const step = Math.ceil(dur / end);
      const id = setInterval(() => {
        s += 1;
        setter(s);
        if (s >= end) clearInterval(id);
      }, step);
    };
    animate(500, setClientes);
    animate(4, setSedes);
    animate(0, setAccidentes);
    setTimeout(() => setShowPhones(true), 1000);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* ──────────── Header ──────────── */}
      <header className="bg-[#04396B] shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex justify-center">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
              <a
                href="#"
                className="text-white font-medium hover:text-[#3B7BA3] transition-colors"
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
                        className="flex items-center space-x-1 text-white hover:text-gray-900 p-0 h-auto font-medium"
                      >
                        <span className="capitalize">{key}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-72 p-2 bg-white shadow-2xl border rounded-xl">
                      {items.map((service, i) => (
                        <DropdownMenuItem
                          key={i}
                          className={`p-3 rounded-lg ${colorClasses[
                            key as keyof typeof colorClasses
                          ]} transition-colors cursor-pointer`}
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
      </header>

      {/* ──────────── Main ──────────── */}
      <main className="relative">
        {/* ── Imágenes y Teléfonos ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 h-[50vh] sm:h-[calc(100vh-120px)] relative">
          {/* Imagen izquierda */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Imagen de servicios 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Imagen derecha + botones */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Imagen de servicios 2"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {showPhones && (
              <div className="absolute bottom-4 right-2 sm:bottom-6 sm:right-4 lg:bottom-[80px] lg:right-8 flex flex-col gap-3 z-30">
                {/* Teléfono fijo */}
                <PhoneButton
                  fixed
                  number="01-621 7996"
                  label="CONSULTAS:"
                  classes="w-40 h-10 sm:w-64 sm:h-16 lg:w-72 lg:h-20"
                />
                {/* Celulares */}
                <PhoneButton
                  numbers={["824-421056", "922-776631"]}
                  classes="w-40 h-14 sm:w-64 sm:h-20 lg:w-72 lg:h-24"
                />
              </div>
            )}
          </div>
        </div>

        {/* ── Cuadro de estadísticas ── */}
        <div
          className="
            relative mt-4 px-2
            sm:absolute sm:inset-x-0 sm:bottom-0 sm:translate-y-1/2 sm:mt-0
            flex justify-center z-20 pointer-events-none
          "
        >
          <div
            className="
              bg-white border-2 sm:border-4 border-[#04396B] rounded-2xl
              px-2 py-3 sm:px-8 sm:py-8 lg:px-12 lg:py-10 shadow-2xl
              max-w-[17rem] sm:max-w-2xl lg:max-w-4xl w-full mx-2
              scale-80 sm:scale-100 transition-transform
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
              <Stat label1="Clientes" label2="Satisfechos" value={clientes} />
              <Stat label1="Sedes" value={sedes} />
              <Stat label1="Accidentes" value={accidentes} />
            </div>
          </div>
        </div>
      </main>

      {/* ──────────── Espaciador blanco ──────────── */}
      <section className="bg-white h-32 sm:h-40 lg:h-48" />
    </div>
  );
}

/* ─────────────────────  Sub‑componentes  ───────────────────── */

function Stat({
  label1,
  label2,
  value,
}: {
  label1: string;
  label2?: string;
  value: number;
}) {
  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
      <div className="text-lg sm:text-2xl lg:text-4xl font-extrabold text-[#04396B]">
        {value}+
      </div>
      <div className="text-[11px] sm:text-sm lg:text-lg text-gray-700 font-medium">
        {label1}
      </div>
      {label2 && (
        <div className="text-[11px] sm:text-sm lg:text-lg text-gray-700 font-medium">
          {label2}
        </div>
      )}
    </div>
  );
}

function PhoneButton({
  fixed = false,
  number,
  numbers,
  label,
  classes,
}: {
  fixed?: boolean;
  number?: string;
  numbers?: string[];
  label?: string;
  classes: string;
}) {
  return (
    <Button
      variant="outline"
      className={`${classes} bg-[#04396B] border-2 border-[#1e3a8a] hover:bg-[#1e40af] rounded-xl shadow-lg px-3 py-2 flex ${
        fixed ? "items-center" : "items-start"
      } gap-3 text-left transition-all duration-300`}
    >
      {/* Si también deseas quitar este icono, elimina la siguiente línea */}
      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-0.5" />

      <div className={`${fixed ? "" : "space-y-0.5 sm:space-y-1"}`}>
        {label && (
          <div className="text-[10px] sm:text-xs text-white leading-none">
            {label}
          </div>
        )}
        {number && (
          <div className="text-xs sm:text-lg lg:text-2xl font-bold text-white leading-none">
            {number}
          </div>
        )}
        {numbers &&
          numbers.map((n) => (
            <div
              key={n}
              className="text-xs sm:text-lg lg:text-2xl font-bold text-white leading-none"
            >
              {n}
            </div>
          ))}
      </div>
    </Button>
  );
}
