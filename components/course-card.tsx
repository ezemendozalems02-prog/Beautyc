import Link from "next/link"
import type { Course } from "@/lib/data/courses"
import { RibbonIcon, ClockIcon } from "@/components/icons/beauty-icons"

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
      <span className="text-[10px] uppercase tracking-[0.18em] text-rose-light font-semibold mb-3">
        {course.level} · {course.modality}
      </span>
      <h3 className="font-serif text-xl text-white mb-2">{course.name}</h3>
      <p className="text-sm text-white/55 leading-relaxed mb-6 flex-1">{course.tagline}</p>

      <div className="flex items-center gap-4 text-xs text-white/45 mb-6">
        <span className="flex items-center gap-1.5">
          <ClockIcon className="w-3.5 h-3.5" /> {course.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <RibbonIcon className="w-3.5 h-3.5" /> Certificación
        </span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10 mb-6">
        <span className="text-white/50 text-xs">Desde</span>
        <span className="font-semibold text-white">{course.priceDemo}</span>
      </div>

      <Link
        href={`/academy/${course.slug}`}
        className="text-center py-3 rounded-full bg-rose-primary text-[#111111] text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-rose-light transition-colors"
      >
        Quiero información
      </Link>
    </div>
  )
}
