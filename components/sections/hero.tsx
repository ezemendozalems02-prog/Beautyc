import Link from "next/link"
import { EditorialVisual } from "@/components/editorial-visual"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0B0B] overflow-hidden pt-28 pb-16 lg:pt-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-rose-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div>
            <Reveal>
              <span className="inline-block text-rose-light text-xs uppercase tracking-[0.25em] font-medium mb-6">
                Estudio de belleza &amp; Beauty Academy
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-white mb-6 text-balance">
                Tu belleza también merece un momento para vos.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg mb-10">
                Especialistas en pestañas y cejas, con una experiencia pensada para que te sientas,
                te veas y te elijas diferente.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/turnos"
                  className="px-8 py-4 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-rose-light hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                >
                  Agendar mi turno
                </Link>
                <Link
                  href="/servicios"
                  className="px-8 py-4 rounded-full border border-white/25 text-white text-xs uppercase tracking-[0.16em] font-semibold hover:border-rose-light hover:text-rose-light transition-colors"
                >
                  Conocer servicios
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-14 flex items-center gap-3 text-white/50">
                <span className="h-px w-10 bg-white/20" />
                <p className="text-xs uppercase tracking-[0.2em]">6+ años creando miradas</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <EditorialVisual variant="hero" className="aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
