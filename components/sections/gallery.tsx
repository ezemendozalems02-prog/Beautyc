import { galleryItems } from "@/lib/data/gallery"
import { LashIcon, LiftIcon, BrowIcon, LaminateIcon } from "@/components/icons/beauty-icons"
import { Reveal } from "@/components/reveal"

const icons = { lash: LashIcon, lift: LiftIcon, brow: BrowIcon, laminate: LaminateIcon }

const tones = {
  dark: "bg-[#111111] text-rose-light",
  light: "bg-[#FAF7F5] text-[#111111]",
  rose: "bg-rose-pastel text-rose-primary",
}

export function Gallery() {
  return (
    <section id="galeria" className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl mb-14">
          <span className="text-rose-primary text-xs uppercase tracking-[0.25em] font-medium">Galería</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] mt-4 leading-tight">
            El resultado habla por sí solo.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[190px]">
          {galleryItems.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal
                key={`${item.category}-${i}`}
                delay={(i % 4) * 100 + 100}
                className={item.span === "tall" ? "row-span-2" : ""}
              >
                <div
                  className={`group relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3 cursor-default transition-transform duration-500 hover:scale-[1.03] ${tones[item.tone]}`}
                >
                  <Icon className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[10px] uppercase tracking-[0.16em] font-semibold opacity-70">
                    {item.category}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
