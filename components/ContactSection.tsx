import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">CONTACTO</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Dirección</h3>
            <p className="text-gray-600 text-sm">
              Calle Los Rosales 123
              <br />
              Lince, Lima - Perú
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Teléfono</h3>
            <p className="text-gray-600 text-sm">(+51) 01 921 7732</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">contacto@tentech.com.pe</p>
          </div>
        </div>

        {/* Map */}
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <img
            src="/placeholder.svg?height=300&width=800"
            alt="Mapa de ubicación"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
