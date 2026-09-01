import type { Metadata } from "next"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | Beauty Studio & Academy",
  description: "Escribinos por WhatsApp, Instagram o dejanos tu consulta.",
}

const info = [
  { icon: MessageCircle, label: "WhatsApp", value: "+54 9 11 0000-0000", href: "https://wa.me/5491100000000" },
  { icon: Instagram, label: "Instagram", value: "@beauty.studio", href: "https://www.instagram.com/" },
  { icon: MapPin, label: "Ubicación", value: "Dirección DEMO 123, Buenos Aires" },
  { icon: Clock, label: "Horarios", value: "Martes a sábado, 9:00 a 19:00" },
]

export default function ContactoPage() {
  return (
    <main className="theme-light-surface min-h-screen bg-white">
      <Header />
      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        description="Estamos para ayudarte a elegir el servicio o la formación ideal para vos."
      />

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <div className="space-y-5 mb-10">
              {info.map((item) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-black/8 p-6 hover:border-rose-primary/40 transition-colors">
                    <div className="w-11 h-11 rounded-full bg-rose-pastel flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-rose-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-[#111111]/45 mb-1">{item.label}</p>
                      <p className="text-[#111111] font-medium">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-black/8 p-8 lg:p-10 bg-[#FAF7F5]">
              <h2 className="font-serif text-2xl text-[#111111] mb-6">Envianos tu consulta</h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
