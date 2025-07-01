const productCategories = [
  {
    title: "Insecticidas",
    items: [
      "Desinfectantes",
      "Rodenticidas",
      "Desinfectantes",
      "Cebaderos",
      "Fumigadoras",
      "Capturadoras",
      "lorem ipsum",
    ],
  },
  {
    title: "Limpia vidrios",
    items: [
      "Paño microfibra",
      "Mangas telescópicas",
      "Escobillas",
      "Quitasarro",
      "lorem ipsum",
      "Insecto Capturadoras",
    ],
  },
  {
    title: "Detergentes",
    items: ["Papel toalla", "Papel higiénico", "Guantes quirúrgicos", "mascarillas", "Botas", "Trajes tyvek", "Bolsas"],
  },
]

export default function ProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">PRODUCTOS</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-800 rounded mr-3">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-sm">👤</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
