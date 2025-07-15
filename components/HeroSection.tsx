"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
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

/* ─────────────────────  Componente principal  ───────────────────── */
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
      {/* ─────────── Main Hero Section ─────────── */}
      <main className="relative">
        {/* Imagen de fondo */}
        <div className="relative h-[calc(100vh-120px)] overflow-hidden">
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Trabajador industrial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Velo negro para mejorar contraste de texto */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Barra social */}
          <SocialBar />

          {/* ─────────── Header de Navegación (overlay) ─────────── */}
          <header className="absolute top-0 left-0 w-full backdrop-blur-sm z-30">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 lg:py-8">
              <nav className="flex justify-center">
                <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                  <Dropdown category="Fumigación" items={services.fumigacion} />
                  <Dropdown category="Limpieza" items={services.limpieza} />
                  <Dropdown category="Gasfitería" items={services.gasfiteria} />
                  <Dropdown category="Alquiler" items={services.alquiler} />
                </div>
              </nav>
            </div>
          </header>

          {/* Botones de teléfono */}
          {showPhones && <PhoneButtons />}
        </div>

        {/* ── Cuadro de estadísticas (sin cambios) ── */}
        <StatsBox
          clientes={clientes}
          sedes={sedes}
          accidentes={accidentes}
        />
      </main>

      {/* Espaciador blanco (para scroll suave) */}
      <section className="bg-white h-32 sm:h-40 lg:h-48" />
    </div>
  );
}

/* ─────────────────────  Sub‑componentes  ───────────────────── */
/* ─────────────────────  Sub‑componentes  ───────────────────── */
function SocialBar() {
  return (
    <div className="absolute left-0 top-40 z-30">
      {/*          ↑↑↑  antes: fixed left‑0 top‑40 …   */}
      <div className="bg-white/95 rounded-r-lg px-3 py-4 flex flex-col items-center gap-6 shadow-lg">
        <a href="#" aria-label="Facebook" className="hover:scale-110 transition">
          <Facebook className="w-8 h-8 text-black hover:text-[#04396B] transition-colors" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:scale-110 transition">
          <Instagram className="w-8 h-8 text-black hover:text-[#04396B] transition-colors" />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition">
          <Linkedin className="w-8 h-8 text-black hover:text-[#04396B] transition-colors" />
        </a>
      </div>
    </div>
  );
}


/* ─────────────────────  Botones de teléfono estilo Precor  ───────────────────── */
/* ─────────────────────  Botones de teléfono estilo Precor  ───────────────────── */
function PhoneButtons() {
  return (
    <div className="absolute bottom-6 right-4 flex flex-col gap-4 z-40">
      {/*                 ↑↑↑
           - quitamos:  fixed lg:absolute right-0
           - añadimos:  absolute right-4  (puedes ajustar right‑4 a tu gusto)
       */}
      <PhoneCard title="Distribuidor y Proyectos" number="(01) 705‑4000" />
      <PhoneCard title="Consulta de Materiales" number="(01) 705‑4040" />
    </div>
  );
}


function PhoneCard({ title, number }: { title: string; number: string }) {
  const telHref = `tel:${number.replace(/[^0-9]/g, "")}`;

  return (
    <a
      href={telHref}
      className="group relative isolate flex w-72 items-center gap-4 overflow-hidden
                 rounded-sm bg-[#004481] py-3 pl-4 pr-5 shadow-lg
                 transition-transform duration-200 hover:scale-105"
    >
      <Phone className="flex-none h-8 w-8 text-white opacity-90 group-hover:opacity-100" />
      <div className="flex flex-col">
        <span className="text-xs font-medium tracking-wide text-white/90">
          {title}
        </span>
        <span className="text-xl font-extrabold tracking-wide text-white">
          {number}
        </span>
      </div>
    </a>
  );
}

/* ─────────────────────  Estadísticas (sin modificar) ───────────────────── */
function StatsBox({
  clientes,
  sedes,
  accidentes,
}: {
  clientes: number;
  sedes: number;
  accidentes: number;
}) {
  return (
    <div className="relative mt-4 px-2 sm:absolute sm:inset-x-0 sm:bottom-0 sm:translate-y-1/2 flex justify-center pointer-events-none">
      <div className="bg-white border-2 sm:border-4 border-[#04396B] rounded-2xl px-2 py-3 sm:px-8 sm:py-8 lg:px-12 lg:py-10 shadow-2xl max-w-[17rem] sm:max-w-2xl lg:max-w-4xl w-full mx-2 scale-80 sm:scale-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
          <Stat label1="Clientes" label2="Satisfechos" value={clientes} />
          <Stat label1="Sedes" value={sedes} />
          <Stat label1="Accidentes" value={accidentes} />
        </div>
      </div>
    </div>
  );
}

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

/* ─────────────────────  Dropdown reutilizable ───────────────────── */
function Dropdown({ category, items }: { category: string; items: string[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-1 text-white text-base sm:text-lg lg:text-xl hover:text-gray-900 p-0 h-auto font-medium"
        >
          <span>{category}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-3 bg-white shadow-2xl border rounded-xl">
        {items.map((service, i) => (
          <DropdownMenuItem
            key={i}
            className="p-2 rounded-lg hover:text-emerald-600 hover:bg-emerald-50 cursor-pointer text-sm"
          >
            {service}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
