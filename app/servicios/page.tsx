import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { ServiceCard } from "@/components/service-card"
import { services, combos, complementaryServices } from "@/lib/data/services"
import { NailsIcon, ManicureIcon, HairIcon } from "@/components/icons/beauty-icons"

export const metadata: Metadata = {
  title: "Servicios | Beauty Studio & Academy",
  description: "Extensiones de pestañas, lifting, diseño y laminado de cejas.",
}

const icons = { nails: NailsIcon, manicure: ManicureIcon, hair: HairIcon }

export default function ServiciosPage() {
  return (
    <main className="theme-light-surface min-h-screen bg-white">
      <Header />
      <PageHero
        eyebrow="Servicios"
        title="Encontrá tu momento"
        description="Especialistas en pestañas y cejas, con tratamientos diseñados a tu medida y un servicio pensado para que te regales un espacio propio."
      />

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <Reveal className="mb-24">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-8">Combos de mirada</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {combos.map((combo) => (
                <div key={combo.name} className="rounded-2xl border border-black/8 bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-lg text-[#111111] mb-2">{combo.name}</h3>
                  <ul className="text-sm text-[#111111]/60 mb-4 space-y-1">
                    {combo.includes.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-xs text-[#111111]/50 mb-5 pt-3 border-t border-black/5">
                    <span>{combo.duration}</span>
                    <span className="font-semibold text-[#111111]">{combo.priceDemo}</span>
                  </div>
                  <Link
                    href="/turnos"
                    className="block text-center py-2.5 rounded-full bg-[#111111] text-white text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-rose-primary hover:text-[#111111] transition-colors"
                  >
                    Agendar combo
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl bg-[#FAF7F5] p-10 lg:p-14">
              <span className="text-rose-primary text-xs uppercase tracking-[0.25em] font-medium">
                También encontrás en nuestro espacio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] mt-4 mb-10 leading-tight">
                Un salón completo, a cargo de profesionales
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {complementaryServices.map((s) => {
                  const Icon = icons[s.icon]
                  return (
                    <div key={s.name} className="rounded-2xl bg-white p-7 border border-black/8">
                      <Icon className="w-9 h-9 text-[#111111]/50 mb-5" />
                      <h3 className="font-serif text-lg text-[#111111] mb-2">{s.name}</h3>
                      <p className="text-sm text-[#111111]/55 leading-relaxed">{s.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
