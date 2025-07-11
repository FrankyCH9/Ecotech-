import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Gestión de la Calidad e Inocuidad",
  "Saneamientos Ambiental y Control de Plagas",
  "Desarrollo de Nuevos Productos",
];

const differentiators = [
  "Enfoque práctico y personalizado, adaptado a cada negocio",
  "Capacitaciones actualizadas, alineadas con las últimas tendencias y regulaciones",
  "Compromiso con la excelencia, garantizando una formación de calidad para mejorar la competitividad del sector",
];

export default function VideoSection() {
  return (
    <section className="py-16 bg-[#04396B] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video container */}
          <div className="relative">
            <div className="p-8 rounded-3xl bg-white/10 border border-white/30">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Corporativo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#2c6fad] text-white px-4 py-2 rounded-2xl shadow-lg font-semibold text-sm">
                ▶ Video Corporativo
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="block text-white">¿QUIÉNES SOMOS?</span>
            </h2>

            <p className="text-base mb-4">
              En <strong>Maia Consultores</strong>, brindamos asesoría y capacitación especializada en:
            </p>

            {/* Services */}
            <div className="space-y-3 mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#04396B]" />
                  </div>
                  <span className="text-base">{service}</span>
                </div>
              ))}
            </div>

            <p className="text-base mb-4">
              Desde 2018, asesoramos empresas del sector alimentario y saneamiento ambiental, optimizando procesos y cumpliendo normativas vigentes.
            </p>

            <p className="text-lg font-semibold mb-4">Nos diferenciamos por:</p>

            {/* Differentiators */}
            <div className="space-y-3 mb-6">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-[#04396B]" />
                  </div>
                  <span className="text-base">{diff}</span>
                </div>
              ))}
            </div>

            <p className="text-base">
              Ofrecemos las herramientas necesarias para que tu empresa crezca y se mantenga a la vanguardia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
