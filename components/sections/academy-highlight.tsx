import Link from "next/link"
import { courses } from "@/lib/data/courses"
import { CourseCard } from "@/components/course-card"
import { Reveal } from "@/components/reveal"

export function AcademyHighlight() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-rose-primary/10 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-rose-light text-xs uppercase tracking-[0.28em] font-semibold">
            Beauty Academy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-4 leading-tight text-balance">
            Convertí tu pasión por la belleza en una profesión.
          </h2>
          <p className="text-white/60 leading-relaxed">
            Formaciones profesionales en pestañas y cejas, con práctica supervisada,
            acompañamiento y certificación.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={(i % 4) * 100 + 100}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <Link
            href="/academy"
            className="inline-block px-8 py-4 rounded-full border border-white/25 text-white text-xs uppercase tracking-[0.16em] font-semibold hover:border-rose-light hover:text-rose-light transition-colors"
          >
            Conocer Beauty Academy
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
