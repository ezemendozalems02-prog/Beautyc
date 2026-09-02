import { SparkleIcon } from "@/components/icons/beauty-icons"

const items = [
  "Extensiones de pestañas",
  "Lifting de pestañas",
  "Diseño de cejas",
  "Laminado de cejas",
  "Beauty Academy",
  "Uñas & Manicuría",
]

export function ServicesMarquee() {
  return (
    <div className="relative bg-[#111111] border-y border-white/10 py-4 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[items, items].map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-shrink-0" aria-hidden={groupIndex === 1}>
            {group.map((item, i) => (
              <span
                key={`${groupIndex}-${i}`}
                className="mx-6 flex items-center gap-6 text-white/60 text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap"
              >
                {item}
                <SparkleIcon className="w-3 h-3 text-rose-primary flex-shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
