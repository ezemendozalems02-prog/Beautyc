import { Star } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"
import { Reveal } from "@/components/reveal"

export function Testimonials() {
  return (
    <section className="bg-[#FAF7F5] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mb-14">
          <span className="text-rose-primary text-xs uppercase tracking-[0.25em] font-medium">Testimonios</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] mt-4 leading-tight">
            Lo que dicen nuestras clientas
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100 + 100}>
              <div className="rounded-2xl bg-white border border-black/8 p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-rose-primary text-rose-primary" />
                  ))}
                </div>
                <p className="text-[#111111]/70 leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">{t.name}</p>
                  <p className="text-xs text-[#111111]/45">{t.service}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
