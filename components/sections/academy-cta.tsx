import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function AcademyCta() {
  return (
    <section className="relative bg-[#0B0B0B] py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-primary/15 via-transparent to-transparent" />
      <div className="container mx-auto px-6 lg:px-10 relative z-10 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight text-balance">
            ¿Querés convertir tu pasión en una profesión?
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-white/65 leading-relaxed mb-10 text-balance">
            Aprendé técnicas profesionales, perfeccioná tus habilidades y empezá a construir tu
            propio camino dentro del mundo de la belleza.
          </p>
        </Reveal>
        <Reveal delay={250}>
          <Link
            href="/academy"
            className="inline-block px-9 py-4 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-rose-light hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            Conocer Beauty Academy
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
