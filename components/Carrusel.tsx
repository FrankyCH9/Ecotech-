"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Client {
  name: string
  logo: string
  color: string
}

const clients: Client[] = [
  {
    name: "AnsaldoSTS",
    logo: "/placeholder.svg?height=80&width=160&text=AnsaldoSTS",
    color: "bg-red-50",
  },
  {
    name: "Mountain Resort",
    logo: "/placeholder.svg?height=80&width=160&text=Mountain+Resort",
    color: "bg-green-50",
  },
  {
    name: "BIZARRO",
    logo: "/placeholder.svg?height=80&width=160&text=BIZARRO",
    color: "bg-black text-white",
  },
  {
    name: "Brett Gourmet",
    logo: "/placeholder.svg?height=80&width=160&text=Brett+Gourmet",
    color: "bg-blue-50",
  },
  {
    name: "Tech Corp",
    logo: "/placeholder.svg?height=80&width=160&text=Tech+Corp",
    color: "bg-purple-50",
  },
  {
    name: "Global Solutions",
    logo: "/placeholder.svg?height=80&width=160&text=Global+Solutions",
    color: "bg-orange-50",
  },
]

export default function Carrusel() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationFrame: number

    const scroll = () => {
      if (!isPaused) {
        scrollElement.scrollLeft += 1
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 3) {
          scrollElement.scrollLeft = 0
        }
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused])

  const extendedClients = [...clients, ...clients, ...clients]

  return (
    <div className="w-full bg-white from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <p className="text-[#3B7BA3] text-sm font-semibold mb-3 tracking-wide uppercase">
            Confían en Nosotros
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B7BA3] mx-auto" />
        </div>

        {/* Carrusel */}
        <div
          className="relative overflow-hidden bg-white border-4 border-[#3B7BA3] rounded-2xl p-8 shadow-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradientes laterales */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 items-center overflow-x-hidden whitespace-nowrap scroll-smooth"
          >
            {extendedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`flex-shrink-0 w-52 h-28 rounded-xl shadow-lg border-2 border-gray-100 flex items-center justify-center p-6 hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ${client.color}`}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={90}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
