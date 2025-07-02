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

        {/* Mapa embebido de Google Maps */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Ubicación en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.131157054084!2d-77.03567228565655!3d-12.093132846997708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c88c5f72e3b5%3A0xa8b4e6f37ecf09b5!2sLince%2C%20Lima%2015018%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1720200000000!5m2!1ses!2spe"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
