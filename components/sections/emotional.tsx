import { Reveal } from "@/components/reveal"

export function Emotional() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-10 max-w-3xl text-center">
        <Reveal>
          <span className="text-rose-primary text-xs uppercase tracking-[0.25em] font-medium">
            Más que belleza
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] mt-5 mb-10 leading-tight text-balance">
            Un momento para vos.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[#111111]/60 text-lg sm:text-xl leading-relaxed text-balance">
            A veces no necesitás cambiarlo todo. Solo necesitás regalarte un momento. Un espacio
            para desconectar, cuidarte y volver a mirarte con otros ojos.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
