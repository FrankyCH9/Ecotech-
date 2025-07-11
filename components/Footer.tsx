import { Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#04396B] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Redes sociales */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="w-10 h-10 bg-[#04396B] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#04396B] transition-colors"
          >
            <span className="font-bold">W</span>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#04396B] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#04396B] transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#04396B] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#04396B] transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#04396B] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#04396B] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Derechos reservados */}
        <div className="mt-8 text-center text-white/70 text-sm">
          <p>&copy; 2024 TenTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
