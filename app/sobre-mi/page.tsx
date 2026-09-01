import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EditorialVisual } from "@/components/editorial-visual"
import { Reveal } from "@/components/reveal"
import { SparkleIcon, RibbonIcon, LashIcon } from "@/components/icons/beauty-icons"

export const metadata: Metadata = {
  title: "Sobre mí | Beauty Studio & Academy",
  description: "Especialista en pestañas, cejas y formación profesional en belleza.",
}

const stats = [
  { value: "6+", label: "años de experiencia" },
  { value: "+320", label: "alumnas formadas" },
  { value: "+2.400", label: "miradas transformadas" },
  { value: "+40", label: "capacitaciones dictadas" },
]

const values = [
  { icon: SparkleIcon, title: "Autenticidad", desc: "Cada mirada es distinta. Diseño en base a tus rasgos, no a una tendencia." },
  { icon: RibbonIcon, title: "Profesionalismo", desc: "Formación constante y materiales premium en cada tratamiento y curso." },
  { icon: LashIcon, title: "Pasión por enseñar", desc: "Comparto todo lo que aprendí para que otras mujeres construyan su propio camino." },
]

export default function SobreMiPage() {
  return (
    <main className="theme-light-surface min-h-screen bg-white">
      <Header />

      <section className="relative bg-[#0B0B0B] pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-primary/10 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Reveal>
                <span className="text-rose-light text-xs uppercase tracking-[0.25em] font-medium">Sobre mí</span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-serif text-4xl sm:text-5xl text-white mt-4 mb-6 leading-tight text-balance">
                  Mi propósito es que te sientas, te veas y te elijas diferente.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-white/65 text-lg leading-relaxed">
                  Me dedico al mundo de la belleza hace más de 6 años, especializándome en
                  extensiones de pestañas, lifting y diseño de cejas.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <EditorialVisual variant="panel" className="aspect-[4/5] w-full max-w-md mx-auto" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-3xl text-[#111111] mb-6">Mi trayectoria</h2>
            <p className="text-[#111111]/65 leading-relaxed mb-6">
              Comencé mi camino en el mundo de la belleza formándome en distintas técnicas de
              pestañas y cejas, buscando siempre entender no solo la técnica, sino la sensación
              que un tratamiento puede generar en una mujer.
            </p>
            <p className="text-[#111111]/65 leading-relaxed mb-6">
              Con el tiempo, ese aprendizaje se transformó en un espacio propio: un estudio
              pensado para que cada clienta viva una experiencia de cuidado real, no solo un
              servicio más.
            </p>
            <p className="text-[#111111]/65 leading-relaxed mb-12">
              Pero mi propósito no es solamente ayudarte a sentirte más linda, sino también
              compartir todo lo que aprendí para que otras mujeres puedan transformar su pasión
              por la belleza en una profesión. Así nació Beauty Academy.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 py-10 border-y border-black/8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl text-rose-primary">{stat.value}</p>
                  <p className="text-[#111111]/50 text-xs uppercase tracking-[0.08em] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl text-[#111111] mb-8">Mi filosofía</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-black/8 p-7">
                  <v.icon className="w-9 h-9 text-rose-primary mb-5" />
                  <h3 className="font-serif text-lg text-[#111111] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#111111]/55 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl bg-[#FAF7F5] p-10 lg:p-14 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-4">
                ¿Querés vivir la experiencia o formarte conmigo?
              </h2>
              <p className="text-[#111111]/60 mb-8">
                Elegí el camino que estás buscando: un momento para vos, o el comienzo de tu
                propia carrera profesional.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/turnos"
                  className="px-7 py-3.5 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-rose-light transition-colors"
                >
                  Agendar mi turno
                </Link>
                <Link
                  href="/academy"
                  className="px-7 py-3.5 rounded-full border border-[#111111]/20 text-[#111111] text-xs uppercase tracking-[0.14em] font-semibold hover:border-rose-primary hover:text-rose-primary transition-colors"
                >
                  Conocer Beauty Academy
                </Link>
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
