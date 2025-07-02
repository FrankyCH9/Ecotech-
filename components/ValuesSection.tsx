import { Shield, Users, Clock, Award, Target, Leaf } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Excelencia",
    description: "Comprometidos con la calidad en cada servicio que brindamos",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    hoverColor: "hover:bg-emerald-100",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Trabajamos con dedicación para superar las expectativas",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos los tiempos acordados con nuestros clientes",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
  },
  // {
  //   icon: Award,
  //   title: "Experiencia",
  //   description: "Años de experiencia nos respaldan en cada proyecto",
  //   color: "from-purple-500 to-pink-500",
  //   bgColor: "bg-purple-50",
  //   hoverColor: "hover:bg-purple-100",
  // },
  // {
  //   icon: Target,
  //   title: "Precisión",
  //   description: "Soluciones exactas para cada necesidad específica",
  //   color: "from-teal-500 to-cyan-500",
  //   bgColor: "bg-teal-50",
  //   hoverColor: "hover:bg-teal-100",
  // },
  // {
  //   icon: Leaf,
  //   title: "Eco-Amigable",
  //   description: "Cuidamos el medio ambiente en todos nuestros procesos",
  //   color: "from-green-500 to-emerald-500",
  //   bgColor: "bg-green-50",
  //   hoverColor: "hover:bg-green-100",
  // },
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Valores que nos
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Definen
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estos son los pilares fundamentales que guían cada una de nuestras acciones y nos permiten brindar servicios
            de excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`${value.bgColor} ${value.hoverColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden h-full`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>

                  {/* Decorative element */}
                  <div
                    className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${value.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para experimentar la diferencia?</h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a cientos de clientes satisfechos que confían en nuestros valores
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
