import { Facebook, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
          >
            <span className="text-white font-bold">W</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 TenTech. Todos los derechos reservados.</p>
        </div>

       
      </div>
    </footer>
  )
}
