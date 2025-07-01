"use client"

import { useState, useEffect } from "react"

const clients = [
  { name: "AnsaldoSTS", logo: "/placeholder.svg?height=80&width=120", color: "from-blue-500 to-blue-600" },
  { name: "Client 2", logo: "/placeholder.svg?height=80&width=120", color: "from-green-500 to-green-600" },
  { name: "BIZARRO", logo: "/placeholder.svg?height=80&width=120", color: "from-purple-500 to-purple-600" },
  { name: "Client 4", logo: "/placeholder.svg?height=80&width=120", color: "from-orange-500 to-orange-600" },
  { name: "Client 5", logo: "/placeholder.svg?height=80&width=120", color: "from-red-500 to-red-600" },
  { name: "Client 6", logo: "/placeholder.svg?height=80&width=120", color: "from-teal-500 to-teal-600" },
]

const stats = [
  { number: 500, label: "Clientes Satisfechos", suffix: "+" },
  { number: 15, label: "Años de Experiencia", suffix: "+" },
  { number: 0, label: "Accidentes", suffix: "+" },
  { number: 24, label: "Atención Horas", suffix: "/7" },
]

export default function ClientsSection() {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        let current = 0
        const increment = stat.number / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev]
            newStats[index] = Math.floor(current)
            return newStats
          })
        }, 30)
      }, index * 200)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Clientes</h3>
          <p className="text-lg text-gray-600">Empresas que confían en nuestros servicios</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredClient(index)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="mt-3 text-center">
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
