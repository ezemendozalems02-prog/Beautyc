import Link from "next/link"
import { services, combos } from "@/lib/data/services"
import { ServiceCard } from "@/components/service-card"
import { Reveal } from "@/components/reveal"

export function Services() {
  return (
    <section id="servicios" className="bg-[#FAF7F5] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mb-16">
          <span className="text-rose-primary text-xs uppercase tracking-[0.25em] font-medium">Servicios</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] mt-4 leading-tight">
            Encontrá tu momento
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 100 + 100}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-20">
          <h3 className="font-serif text-2xl text-[#111111] mb-8">Combos de mirada</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {combos.map((combo) => (
              <div
                key={combo.name}
                className="rounded-2xl border border-black/8 bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-serif text-lg text-[#111111] mb-2">{combo.name}</h4>
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
      </div>
    </section>
  )
}
