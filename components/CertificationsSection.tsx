const certifications = [
  { name: "Certificación 1", logo: "/placeholder.svg?height=80&width=120" },
  { name: "SGS", logo: "/placeholder.svg?height=80&width=120" },
  { name: "MODELPE", logo: "/placeholder.svg?height=80&width=120" },
  { name: "MTC", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Achilles", logo: "/placeholder.svg?height=80&width=120" },
]

export default function CertificationsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">CERTIFICACIONES</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={cert.logo || "/placeholder.svg"} alt={cert.name} className="w-full h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
