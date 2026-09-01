import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EditorialVisual } from "@/components/editorial-visual"
import { Reveal } from "@/components/reveal"
import { services, getServiceBySlug } from "@/lib/data/services"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.name} | Beauty Studio & Academy`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <main className="theme-light-surface min-h-screen bg-white">
      <Header />

      <section className="relative bg-[#0B0B0B] pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-primary/10 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Reveal>
                <span className="text-rose-light text-xs uppercase tracking-[0.25em] font-medium">
                  {service.category}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-serif text-4xl sm:text-5xl text-white mt-4 mb-4 leading-tight text-balance">
                  {service.name}
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-rose-light/90 text-lg mb-6">{service.tagline}</p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-white/65 leading-relaxed max-w-xl mb-8">{service.longDescription}</p>
              </Reveal>
              <Reveal delay={250}>
                <div className="flex flex-wrap items-center gap-6 mb-10 text-white/70 text-sm">
                  <span>Duración: <strong className="text-white">{service.duration}</strong></span>
                  <span>Precio: <strong className="text-white">{service.priceDemo}</strong></span>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <Link
                  href="/turnos"
                  className="inline-block px-8 py-4 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-rose-light transition-colors"
                >
                  Agendar este servicio
                </Link>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <EditorialVisual variant="panel" className="aspect-[4/5] w-full max-w-md mx-auto" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 space-y-14">
            {service.options && (
              <Reveal>
                <h2 className="font-serif text-2xl text-[#111111] mb-6">Opciones disponibles</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.options.map((opt) => (
                    <div key={opt.name} className="rounded-2xl border border-black/8 p-5">
                      <h3 className="font-semibold text-[#111111] mb-1">{opt.name}</h3>
                      <p className="text-sm text-[#111111]/55 leading-relaxed">{opt.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal>
              <h2 className="font-serif text-2xl text-[#111111] mb-6">Beneficios</h2>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#111111]/70">
                    <Check className="w-5 h-5 text-rose-primary flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl text-[#111111] mb-6">¿Para quién está recomendado?</h2>
              <ul className="space-y-3">
                {service.forWho.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#111111]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-primary flex-shrink-0 mt-2" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl text-[#111111] mb-6">¿Cómo es el procedimiento?</h2>
              <ol className="space-y-4">
                {service.procedure.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-pastel text-rose-primary font-serif flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    <span className="text-[#111111]/70 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl text-[#111111] mb-6">Preguntas frecuentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-[#111111]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#111111]/60 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <div>
            <Reveal className="sticky top-28">
              <div className="rounded-3xl border border-black/8 p-8 bg-[#FAF7F5]">
                <p className="text-xs uppercase tracking-[0.16em] text-rose-primary font-semibold mb-2">
                  {service.category}
                </p>
                <h3 className="font-serif text-xl text-[#111111] mb-4">{service.name}</h3>
                <div className="space-y-2 text-sm text-[#111111]/60 mb-6">
                  <p>Duración: {service.duration}</p>
                  <p className="text-lg font-semibold text-[#111111]">{service.priceDemo}</p>
                </div>
                <Link
                  href="/turnos"
                  className="block text-center py-3.5 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-rose-light transition-colors"
                >
                  Agendar este servicio
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
