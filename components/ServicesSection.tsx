import { SprayCanIcon as Spray, Sparkles, Wrench, Truck } from "lucide-react"

const services = [
  {
    icon: Spray,
    title: "Fumigación",
    items: [
      "Servicio de fumigación",
      "Servicio de desinsectación",
      "Servicio de desratización",
      "Limpieza de tanques y cisternas",
      "Limpieza de pozos sépticos",
      "Fumigación de granos",
    ],
  },
  {
    icon: Sparkles,
    title: "Limpieza",
    items: [
      "Limpieza de fuminer",
      "Limpieza de limas",
      "Limpieza de ventanas",
      "Limpieza de baldosas",
      "Limpieza de fin de obra",
      "Disposición de desmontes",
    ],
  },
  {
    icon: Wrench,
    title: "Gasfitería",
    items: [
      "Instalación de lavatorios",
      "Instalación de fluxómetros",
      "Instalación de urinarios",
      "Instalación de inodoros",
      "Diseño y rediseño de tuberías",
      "Instalación de grifos",
    ],
  },
  {
    icon: Truck,
    title: "Alquiler",
    items: [
      "Fumigadoras",
      "Máquinas a motor",
      "Bombas manuales",
      "ULV eléctricos",
      "Termonebulizadores",
      "Escalera tijera",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">SERVICIOS</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
