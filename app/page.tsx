import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ClientsSection from "@/components/ClientsSection"
import VideoSection from "@/components/VideoSection"
import MissionVision from "@/components/MissionVision"
import ValuesSection from "@/components/ValuesSection"
import GallerySection from "@/components/GallerySection"
import ServicesSection from "@/components/ServicesSection"
import ProductsSection from "@/components/ProductsSection"
import ContactSection from "@/components/ContactSection"
import CertificationsSection from "@/components/CertificationsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ClientsSection />
      <VideoSection />
      <MissionVision />
      <ValuesSection />
      <GallerySection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
      <CertificationsSection />
      <Footer />
    </div>
  )
}
