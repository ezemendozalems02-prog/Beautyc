import type { Metadata } from "next"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { PageHero } from "@/components/page-hero"
import { BookingFlow } from "@/components/booking/booking-flow"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Agendar turno | Beauty Studio & Academy",
  description: "Reservá tu turno en simples pasos.",
}

export default function TurnosPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B]">
      <Header />
      <PageHero eyebrow="Turnos" title="Agendá tu momento" />
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-10">
          <BookingFlow />
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
