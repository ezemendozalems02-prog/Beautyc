import { Reveal } from "@/components/reveal"

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-[#0B0B0B] pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-primary/10 blur-3xl" />
      <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-3xl">
        <Reveal>
          <span className="text-rose-light text-xs uppercase tracking-[0.25em] font-medium">{eyebrow}</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mt-4 mb-6 leading-tight text-balance">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={200}>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl text-balance">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
