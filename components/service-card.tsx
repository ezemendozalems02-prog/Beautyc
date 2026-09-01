import Link from "next/link"
import type { Service } from "@/lib/data/services"
import { LashIcon, LiftIcon, BrowIcon, LaminateIcon } from "@/components/icons/beauty-icons"

const icons = {
  lash: LashIcon,
  lift: LiftIcon,
  brow: BrowIcon,
  laminate: LaminateIcon,
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]

  return (
    <div className="group relative rounded-3xl border border-black/8 bg-white p-8 flex flex-col hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500">
      <div className="w-16 h-16 rounded-2xl bg-rose-pastel flex items-center justify-center mb-6 group-hover:bg-rose-light/70 transition-colors">
        <Icon className="w-8 h-8 text-rose-primary" />
      </div>

      <span className="text-[10px] uppercase tracking-[0.18em] text-rose-primary font-semibold mb-2">
        {service.category}
      </span>
      <h3 className="font-serif text-xl text-[#111111] mb-3">{service.name}</h3>
      <p className="text-sm text-[#111111]/60 leading-relaxed mb-6 flex-1">{service.shortDescription}</p>

      <div className="flex items-center justify-between text-xs text-[#111111]/50 mb-6 pt-4 border-t border-black/5">
        <span>{service.duration}</span>
        <span className="font-semibold text-[#111111]">{service.priceDemo}</span>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/servicios/${service.slug}`}
          className="flex-1 text-center py-3 rounded-full border border-black/12 text-[11px] uppercase tracking-[0.12em] font-semibold text-[#111111] hover:border-rose-primary hover:text-rose-primary transition-colors"
        >
          Ver servicio
        </Link>
        <Link
          href="/turnos"
          className="flex-1 text-center py-3 rounded-full bg-rose-primary text-[11px] uppercase tracking-[0.12em] font-semibold text-[#111111] hover:bg-rose-light transition-colors"
        >
          Agendar
        </Link>
      </div>
    </div>
  )
}
