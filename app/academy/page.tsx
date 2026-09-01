import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Reveal } from "@/components/reveal"
import { CourseCard } from "@/components/course-card"
import { courses } from "@/lib/data/courses"
import { RibbonIcon, ClockIcon, SparkleIcon } from "@/components/icons/beauty-icons"

export const metadata: Metadata = {
  title: "Beauty Academy | Formación Profesional en Pestañas y Cejas",
  description: "Convertí tu pasión por la belleza en una profesión. Cursos, capacitaciones y certificación.",
}

const pillars = [
  { icon: RibbonIcon, title: "Certificación", desc: "Certificado de formación profesional al finalizar cada curso." },
  { icon: ClockIcon, title: "Práctica real", desc: "Práctica supervisada en modelo real, no solo teoría." },
  { icon: SparkleIcon, title: "Acompañamiento", desc: "Seguimiento personalizado durante y después de cada formación." },
]

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B]">
      <Header />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-rose-primary/10 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-2xl">
          <Reveal>
            <span className="text-rose-light text-xs uppercase tracking-[0.28em] font-semibold">
              Beauty Academy
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-4xl sm:text-5xl text-white mt-4 mb-6 leading-tight text-balance">
              Convertí tu pasión por la belleza en una profesión.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/65 text-lg leading-relaxed">
              Formaciones profesionales en extensiones de pestañas, lifting y diseño de cejas,
              pensadas para acompañarte desde el primer día hasta tu certificación.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <p.icon className="w-9 h-9 text-rose-light mb-5" />
                <h3 className="font-serif text-lg text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-white">Nuestras formaciones</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-rose-primary/20 to-transparent border border-white/10 p-10 lg:p-14 text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                ¿Todavía tenés dudas sobre qué formación elegir?
              </h2>
              <p className="text-white/60 mb-8">
                Escribinos y te ayudamos a encontrar el curso ideal según tu experiencia y objetivos.
              </p>
              <Link
                href="/contacto"
                className="inline-block px-8 py-4 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-rose-light transition-colors"
              >
                Quiero información
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
