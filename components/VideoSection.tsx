import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Servicios certificados y garantizados",
  "Personal altamente capacitado",
  "Equipos de última tecnología",
  "Atención personalizada 24/7",
  "Precios competitivos del mercado",
  "Experiencia comprobada +15 años",
]

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-80"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Cambia este ID por el tuyo
                  title="Video Corporativo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm">
                ▶ Video Corporativo
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-white">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                NUEVA
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  PLATAFORMA
                </span>
              </h2>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">CONTROL DE PLAGAS</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Descubre nuestra nueva plataforma tecnológica que revoluciona el control de plagas con métodos
                innovadores y eco-amigables.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:scale-105">
                Conocer Más
              </Button>
              <Button
                variant="outline"
                className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-all bg-transparent"
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
