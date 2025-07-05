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
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Corporativo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-2xl shadow-xl font-bold text-sm">
                ▶ Video Corporativo
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-white">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  ¿QUIÉNES SOMOS?
                </span>
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                En <strong>Maia Consultores</strong>, brindamos asesoría y capacitación especializada en:
              </p>
            </div>

            {/* Services list */}
            <div className="space-y-3 mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base text-gray-300 group-hover:text-white transition-colors">{service}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Desde 2018, asesoramos empresas del sector alimentario y saneamiento ambiental, optimizando procesos y
              cumpliendo normativas vigentes.
            </p>

            <p className="text-lg font-semibold text-emerald-400 mb-4">Nos diferenciamos por:</p>

            {/* Differentiators list */}
            <div className="space-y-3 mb-6">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base text-gray-300 group-hover:text-white transition-colors">{diff}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-300 leading-relaxed">
              Ofrecemos las herramientas necesarias para que tu empresa crezca y se mantenga a la vanguardia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
