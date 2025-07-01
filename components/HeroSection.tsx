"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

const backgroundImages = [
  "/placeholder.svg?height=800&width=1400",
  "/placeholder.svg?height=800&width=1400",
  "/placeholder.svg?height=800&width=1400",
]

const features = [
  { icon: Shield, text: "Servicios Certificados" },
  { icon: Clock, text: "Atención 24/7" },
  { icon: Award, text: "15+ Años de Experiencia" },
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-emerald-300 rounded-full animate-bounce opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-600/20 text-emerald-300 rounded-full text-sm font-medium backdrop-blur-sm border border-emerald-500/30">
                ✨ Servicios Profesionales de Calidad
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Soluciones
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Integrales
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Especialistas en fumigación, limpieza, gasfitería y alquiler de equipos.
              <span className="text-emerald-400 font-semibold"> Más de 15 años</span> brindando servicios de excelencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all transform hover:scale-105 group">
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all bg-transparent"
              >
                Ver Servicios
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <feature.icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? "bg-emerald-400 scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      
    </section>
  )
}
