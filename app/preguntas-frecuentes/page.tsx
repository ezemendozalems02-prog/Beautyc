import type { Metadata } from "next"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { faqCategories, faqItems } from "@/lib/data/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Preguntas frecuentes | Beauty Studio & Academy",
  description: "Todo lo que necesitás saber sobre servicios, turnos, pagos y Beauty Academy.",
}

export default function FaqPage() {
  return (
    <main className="theme-light-surface min-h-screen bg-white">
      <Header />
      <PageHero
        eyebrow="Ayuda"
        title="Preguntas frecuentes"
        description="Resolvimos las dudas más comunes sobre servicios, turnos, pagos y nuestras formaciones."
      />

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl space-y-16">
          {faqCategories.map((category) => {
            const items = faqItems.filter((f) => f.category === category)
            if (items.length === 0) return null
            return (
              <Reveal key={category}>
                <h2 className="font-serif text-2xl text-[#111111] mb-6">{category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {items.map((item, i) => (
                    <AccordionItem key={item.question} value={`${category}-${i}`}>
                      <AccordionTrigger className="text-left font-medium text-[#111111]">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#111111]/60 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            )
          })}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
