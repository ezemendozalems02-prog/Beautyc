import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Reveal } from "@/components/reveal"
import { courses, getCourseBySlug } from "@/lib/data/courses"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { RibbonIcon, ClockIcon } from "@/components/icons/beauty-icons"

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) return {}
  return {
    title: `${course.name} | Beauty Academy`,
    description: course.tagline,
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  return (
    <main className="min-h-screen bg-[#0B0B0B]">
      <Header />

      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-primary/10 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-3xl">
          <Reveal>
            <span className="text-rose-light text-xs uppercase tracking-[0.25em] font-semibold">
              {course.level} · {course.modality}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-4xl sm:text-5xl text-white mt-4 mb-4 leading-tight text-balance">
              {course.name}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-rose-light/90 text-lg mb-6">{course.tagline}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/65 leading-relaxed max-w-xl mb-8">{course.description}</p>
          </Reveal>
          <Reveal delay={250}>
            <div className="flex flex-wrap items-center gap-6 mb-10 text-white/70 text-sm">
              <span className="flex items-center gap-2"><ClockIcon className="w-4 h-4 text-rose-light" /> {course.duration}</span>
              <span className="flex items-center gap-2"><RibbonIcon className="w-4 h-4 text-rose-light" /> Con certificación</span>
              <span>Desde: <strong className="text-white">{course.priceDemo}</strong></span>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-rose-light transition-colors"
            >
              Quiero inscribirme
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 space-y-14">
            <Reveal>
              <h2 className="font-serif text-2xl text-white mb-6">¿Para quién es este curso?</h2>
              <ul className="space-y-3">
                {course.audience.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-white/65">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-primary flex-shrink-0 mt-2" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl text-white mb-6">¿Qué vas a aprender?</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {course.learn.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-white/65">
                    <Check className="w-5 h-5 text-rose-primary flex-shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl text-white mb-6">Programa del curso</h2>
              <div className="space-y-4">
                {course.program.map((mod, i) => (
                  <div key={mod.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <h3 className="font-serif text-lg text-rose-light mb-3">
                      {i + 1}. {mod.title}
                    </h3>
                    <ul className="space-y-1.5 text-sm text-white/60">
                      {mod.items.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl text-white mb-6">Qué incluye</h2>
              <ul className="space-y-3">
                {course.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-white/65">
                    <Check className="w-5 h-5 text-rose-primary flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-sm mt-6">{course.certification}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl text-white mb-6">Preguntas frecuentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {course.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <div>
            <Reveal className="sticky top-28">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <p className="text-xs uppercase tracking-[0.16em] text-rose-light font-semibold mb-2">
                  {course.level}
                </p>
                <h3 className="font-serif text-xl text-white mb-4">{course.name}</h3>
                <div className="space-y-2 text-sm text-white/60 mb-6">
                  <p>Modalidad: {course.modality}</p>
                  <p>Duración: {course.duration}</p>
                  <p className="text-lg font-semibold text-white">{course.priceDemo}</p>
                </div>
                <Link
                  href="/contacto"
                  className="block text-center py-3.5 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-rose-light transition-colors"
                >
                  Quiero inscribirme
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
