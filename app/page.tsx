import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { ServicesMarquee } from "@/components/sections/services-marquee"
import { Emotional } from "@/components/sections/emotional"
import { Services } from "@/components/sections/services"
import { Complementary } from "@/components/sections/complementary"
import { AboutTeaser } from "@/components/sections/about-teaser"
import { AcademyHighlight } from "@/components/sections/academy-highlight"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { AcademyCta } from "@/components/sections/academy-cta"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesMarquee />
      <Emotional />
      <Services />
      <Complementary />
      <AboutTeaser />
      <AcademyHighlight />
      <Gallery />
      <Testimonials />
      <AcademyCta />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
