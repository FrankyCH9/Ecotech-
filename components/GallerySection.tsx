"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=180&width=240",
    alt: "Señalización vial con líneas amarillas",
  },
  {
    src: "/placeholder.svg?height=180&width=240",
    alt: "Trabajadores en pavimentación",
  },
  {
    src: "/placeholder.svg?height=180&width=240",
    alt: "Mantenimiento de paso peatonal",
  },
  {
    src: "/placeholder.svg?height=180&width=240",
    alt: "Trabajador en superficie vial",
  },
  {
    src: "/placeholder.svg?height=180&width=240",
    alt: "Construcción de carretera",
  },
  {
    src: "/placeholder.svg?height=180&width=240",
    alt: "Obras de infraestructura",
  },
]

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 4
  const maxIndex = Math.max(0, galleryImages.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const visibleImages = galleryImages.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="relative py-16 bg-gray-900">
      {/* Background con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/background-construction.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Título más pequeño */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white tracking-wider">OBRAS</h2>
        </div>

        {/* Contenedor del carrusel */}
        <div className="relative flex items-center">
          {/* Flecha izquierda */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 z-20 p-2 text-white/80 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={32} strokeWidth={2} />
          </button>

          {/* Grid de imágenes más compacto */}
          <div className="flex gap-4 justify-center mx-8">
            {visibleImages.map((image, index) => (
              <div key={currentIndex + index} className="group cursor-pointer">
                <div className="bg-white p-2 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-56 h-36 object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute -right-4 z-20 p-2 text-white/80 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={32} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}