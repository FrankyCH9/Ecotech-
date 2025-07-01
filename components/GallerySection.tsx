"use client"

import { useState } from "react"

const galleryImages = [
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Galería</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative cursor-pointer group" onClick={() => setSelectedImage(index)}>
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
