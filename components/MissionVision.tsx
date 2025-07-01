export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold text-red-500">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Brindar servicios integrales de control de plagas, limpieza y gasfitería con los más altos estándares de
              calidad, utilizando tecnología de punta y personal altamente capacitado para garantizar la satisfacción de
              nuestros clientes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">V</span>
              </div>
              <h3 className="text-2xl font-bold text-red-500">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ser la empresa líder en servicios de control de plagas y limpieza en el mercado nacional, reconocida por
              nuestra excelencia, innovación y compromiso con el medio ambiente y la salud pública.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
