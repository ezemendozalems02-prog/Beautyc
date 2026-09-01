import Link from "next/link"
import { EditorialVisual } from "@/components/editorial-visual"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "6+", label: "años de experiencia" },
  { value: "+320", label: "alumnas formadas" },
  { value: "+2.400", label: "miradas transformadas" },
]

export function AboutTeaser() {
  return (
    <section className="bg-[#0B0B0B] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <EditorialVisual variant="panel" className="aspect-[4/5] w-full max-w-md" />
          </Reveal>

          <div>
            <Reveal>
              <span className="text-rose-light text-xs uppercase tracking-[0.25em] font-medium">Sobre mí</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mt-4 mb-6 leading-tight text-balance">
                Mi propósito es que te sientas, te veas y te elijas diferente.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-white/65 leading-relaxed mb-4">
                Me dedico al mundo de la belleza hace más de 6 años, especializándome en
                extensiones de pestañas, lifting y diseño de cejas.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="text-white/65 leading-relaxed mb-10">
                Pero mi propósito no es solamente ayudarte a sentirte más linda, sino también
                compartir todo lo que aprendí para que otras mujeres puedan transformar su pasión
                por la belleza en una profesión.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-2xl sm:text-3xl text-rose-light">{stat.value}</p>
                    <p className="text-white/50 text-xs uppercase tracking-[0.1em] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={350}>
              <Link
                href="/sobre-mi"
                className="inline-block px-7 py-3.5 rounded-full border border-white/25 text-white text-xs uppercase tracking-[0.14em] font-semibold hover:border-rose-light hover:text-rose-light transition-colors"
              >
                Conocer mi historia
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
