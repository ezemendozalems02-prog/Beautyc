export type CourseFaq = {
  question: string
  answer: string
}

export type Course = {
  slug: string
  name: string
  level: string
  modality: string
  duration: string
  tagline: string
  description: string
  audience: string[]
  learn: string[]
  program: { title: string; items: string[] }[]
  includes: string[]
  certification: string
  priceDemo: string
  faqs: CourseFaq[]
}

export const courses: Course[] = [
  {
    slug: "extensiones-de-pestanas-nivel-inicial",
    name: "Extensiones de Pestañas — Nivel Inicial",
    level: "Inicial",
    modality: "Presencial",
    duration: "4 clases de 4 hs",
    tagline: "Tu primer paso profesional en el mundo de las pestañas",
    description:
      "Un curso pensado para quienes quieren iniciarse en la técnica de extensiones de pestañas desde cero, con una base sólida en anatomía, higiene, mapeo de mirada y aplicación clásica.",
    audience: [
      "Personas sin experiencia previa que quieren iniciarse en el rubro",
      "Estilistas o cosmetólogas que buscan sumar un nuevo servicio",
      "Emprendedoras que quieren generar un ingreso propio",
    ],
    learn: [
      "Anatomía del ojo y ciclo de crecimiento de la pestaña",
      "Bioseguridad e higiene profesional",
      "Mapeo de mirada según forma de ojo",
      "Técnica clásica pestaña a pestaña",
      "Manejo de adhesivos y tiempos de secado",
    ],
    program: [
      { title: "Módulo 1 — Fundamentos", items: ["Anatomía y ciclo de la pestaña", "Bioseguridad", "Herramientas y materiales"] },
      { title: "Módulo 2 — Diseño de mirada", items: ["Tipos de ojo", "Mapeo y selección de curvatura", "Efectos según forma de rostro"] },
      { title: "Módulo 3 — Técnica clásica", items: ["Aislamiento de pestaña natural", "Aplicación uno a uno", "Sellado y finalización"] },
      { title: "Módulo 4 — Práctica supervisada", items: ["Modelo real", "Corrección personalizada", "Evaluación final"] },
    ],
    includes: [
      "Kit de iniciación de materiales",
      "Manual digital del curso",
      "Práctica en modelo real supervisada",
      "Grupo de acompañamiento post-curso",
    ],
    certification: "Certificado de formación profesional avalado por el estudio.",
    priceDemo: "$180.000 DEMO",
    faqs: [
      {
        question: "¿Necesito experiencia previa?",
        answer: "No, este curso está diseñado para arrancar desde cero, con una base teórica y práctica completa.",
      },
      {
        question: "¿El curso incluye certificación?",
        answer: "Sí, al finalizar y aprobar la práctica supervisada entregamos certificado de formación profesional.",
      },
      {
        question: "¿Qué materiales necesito llevar?",
        answer: "El kit de iniciación está incluido en el curso, no necesitás comprar nada por separado para empezar.",
      },
    ],
  },
  {
    slug: "extensiones-de-pestanas-perfeccionamiento",
    name: "Extensiones de Pestañas — Perfeccionamiento",
    level: "Perfeccionamiento",
    modality: "Presencial",
    duration: "3 clases de 4 hs",
    tagline: "Llevá tu técnica al siguiente nivel",
    description:
      "Pensado para quienes ya trabajan con técnica clásica y quieren sumar volumen, volumen híbrido y diseños personalizados de alta gama para diferenciarse profesionalmente.",
    audience: [
      "Técnicas con experiencia en aplicación clásica",
      "Egresadas de nuestro curso de nivel inicial",
      "Profesionales que buscan actualizar su técnica",
    ],
    learn: [
      "Armado de abanicos de volumen ruso",
      "Técnica híbrida y combinación de efectos",
      "Diseños personalizados de alta gama",
      "Corrección de mapeos previos",
      "Velocidad y productividad en la aplicación",
    ],
    program: [
      { title: "Módulo 1 — Volumen", items: ["Armado de abanicos", "Peso y densidad ideal", "Aislamiento avanzado"] },
      { title: "Módulo 2 — Híbrido y diseño", items: ["Combinación clásico + volumen", "Efectos wet look y kim k", "Personalización según pedido"] },
      { title: "Módulo 3 — Práctica avanzada", items: ["Modelo real", "Corrección de trabajos previos", "Evaluación de velocidad y calidad"] },
    ],
    includes: [
      "Material teórico avanzado",
      "Práctica supervisada en modelo real",
      "Feedback personalizado de tu técnica",
    ],
    certification: "Certificado de perfeccionamiento profesional.",
    priceDemo: "$150.000 DEMO",
    faqs: [
      {
        question: "¿Necesito haber hecho el curso inicial?",
        answer: "No es excluyente, pero sí necesitás manejar la técnica clásica con soltura para aprovechar el curso.",
      },
      {
        question: "¿Incluye certificación?",
        answer: "Sí, entregamos certificado de perfeccionamiento al finalizar la práctica evaluada.",
      },
    ],
  },
  {
    slug: "lifting-y-diseno-de-mirada",
    name: "Lifting & Diseño de Mirada",
    level: "Intermedio",
    modality: "Presencial",
    duration: "2 clases de 4 hs",
    tagline: "Dominá el arte del efecto natural",
    description:
      "Formación completa en lifting de pestañas, tinte y diseño de mirada natural, una de las técnicas más solicitadas por su bajo mantenimiento y resultado inmediato.",
    audience: [
      "Personas que quieren sumar un servicio de alta demanda",
      "Profesionales de extensiones que buscan diversificar",
      "Emprendedoras que buscan un servicio rápido y rentable",
    ],
    learn: [
      "Selección de moldes según tipo de pestaña",
      "Aplicación de producto de lifting paso a paso",
      "Tinte de pestañas y cejas",
      "Diseño de mirada integral",
    ],
    program: [
      { title: "Módulo 1 — Teoría y producto", items: ["Química del lifting", "Selección de moldes", "Tiempos de exposición"] },
      { title: "Módulo 2 — Práctica", items: ["Aplicación en modelo real", "Tinte y finalización", "Diagnóstico y venta del servicio"] },
    ],
    includes: ["Kit de moldes", "Manual del curso", "Práctica supervisada"],
    certification: "Certificado de formación en Lifting & Diseño de Mirada.",
    priceDemo: "$120.000 DEMO",
    faqs: [
      {
        question: "¿Es un curso extenso?",
        answer: "No, es una formación intensiva de 2 clases pensada para que salgas operativa rápidamente.",
      },
      {
        question: "¿Incluye tinte de pestañas y cejas?",
        answer: "Sí, el programa incluye la técnica completa de tinte como parte del servicio integral.",
      },
    ],
  },
  {
    slug: "formacion-profesional-en-cejas",
    name: "Formación Profesional en Cejas",
    level: "Inicial a avanzado",
    modality: "Presencial",
    duration: "3 clases de 4 hs",
    tagline: "Diseño, laminado y armonía facial",
    description:
      "Una formación integral en diseño de cejas, laminado y armonía facial para que puedas ofrecer un servicio completo, desde el diagnóstico hasta la técnica de laminado.",
    audience: [
      "Personas que quieren especializarse en cejas",
      "Profesionales de la belleza que buscan sumar un servicio estrella",
      "Emprendedoras que arman su propio espacio de trabajo",
    ],
    learn: [
      "Armonía facial y trazado de forma ideal",
      "Depilación de precisión (cera, hilo y pinza)",
      "Técnica de laminado paso a paso",
      "Corrección de color y henna",
    ],
    program: [
      { title: "Módulo 1 — Diseño", items: ["Armonía facial", "Trazado y proporciones", "Depilación de precisión"] },
      { title: "Módulo 2 — Laminado", items: ["Producto y tiempos", "Peinado direccional", "Nutrición e hidratación"] },
      { title: "Módulo 3 — Práctica integral", items: ["Modelo real", "Diseño + laminado combinado", "Evaluación final"] },
    ],
    includes: ["Kit de laminado", "Manual digital", "Práctica supervisada en modelo real"],
    certification: "Certificado de Formación Profesional en Cejas.",
    priceDemo: "$140.000 DEMO",
    faqs: [
      {
        question: "¿Necesito experiencia previa para hacer un curso?",
        answer:
          "No es necesaria para este curso, arrancamos desde los fundamentos del diseño facial hasta la técnica de laminado.",
      },
      {
        question: "¿Los cursos incluyen certificación?",
        answer: "Sí, todas nuestras formaciones incluyen certificado de finalización avalado por el estudio.",
      },
    ],
  },
]

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug)
}
