import Link from "next/link"
import { complementaryServices } from "@/lib/data/services"
import { NailsIcon, ManicureIcon, HairIcon } from "@/components/icons/beauty-icons"
import { Reveal } from "@/components/reveal"

const icons = { nails: NailsIcon, manicure: ManicureIcon, hair: HairIcon }

export function Complementary() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mb-12">
          <span className="text-rose-primary text-xs uppercase tracking-[0.25em] font-medium">
            También encontrás en nuestro espacio
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] mt-4 leading-tight">
            Un salón completo, a cargo de profesionales
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {complementaryServices.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.name} delay={(i % 3) * 100 + 100}>
                <div className="rounded-2xl border border-black/8 p-7 h-full hover:border-rose-primary/40 transition-colors">
                  <Icon className="w-9 h-9 text-[#111111]/50 mb-5" />
                  <h3 className="font-serif text-lg text-[#111111] mb-2">{s.name}</h3>
                  <p className="text-sm text-[#111111]/55 leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={300} className="mt-10">
          <Link
            href="/servicios"
            className="inline-block text-xs uppercase tracking-[0.14em] font-semibold text-[#111111] border-b border-[#111111] pb-1 hover:text-rose-primary hover:border-rose-primary transition-colors"
          >
            Conocer todos los servicios
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
