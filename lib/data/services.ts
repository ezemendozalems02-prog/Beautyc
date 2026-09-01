export type ServiceOption = {
  name: string
  description: string
}

export type ServiceFaq = {
  question: string
  answer: string
}

export type Service = {
  slug: string
  category: "Pestañas" | "Cejas"
  name: string
  tagline: string
  shortDescription: string
  longDescription: string
  duration: string
  priceDemo: string
  icon: "lash" | "lift" | "brow" | "laminate"
  options?: ServiceOption[]
  benefits: string[]
  forWho: string[]
  procedure: string[]
  faqs: ServiceFaq[]
}

export const services: Service[] = [
  {
    slug: "extensiones-de-pestanas",
    category: "Pestañas",
    name: "Extensiones de pestañas",
    tagline: "Una mirada a tu medida",
    shortDescription:
      "Realzá tu mirada con extensiones diseñadas según la forma de tus ojos y el resultado que buscás.",
    longDescription:
      "Estudiamos la forma de tu rostro, la implantación de tu pestaña natural y el efecto que soñás para diseñar una mirada única. Cada aplicación es artesanal, pestaña por pestaña, con materiales premium libres de crueldad animal y una técnica pensada para cuidar tu pestaña natural.",
    duration: "2 hs aprox.",
    priceDemo: "$45.000 DEMO",
    icon: "lash",
    options: [
      { name: "Clásicas", description: "Una extensión por pestaña natural. Efecto natural y delicado." },
      { name: "Volumen", description: "Abanicos livianos que multiplican densidad sin perder ligereza." },
      { name: "Volumen híbrido", description: "Combinación de clásico y volumen para un efecto texturizado." },
      { name: "Diseños personalizados", description: "Mapeo de mirada a medida según forma de ojo y efecto deseado." },
    ],
    benefits: [
      "Mirada definida las 24 horas, sin rímel ni curvador",
      "Materiales premium, livianos y libres de crueldad animal",
      "Diseño personalizado según la forma de tu rostro",
      "Resultado duradero con mantenimiento simple",
    ],
    forWho: [
      "Quienes buscan una mirada intensa sin maquillaje diario",
      "Pieles y ojos sensibles (trabajamos con adhesivos de bajo residuo)",
      "Quienes quieren un cambio de imagen sutil o dramático, a elección",
    ],
    procedure: [
      "Diagnóstico de mirada y elección de efecto junto a tu especialista",
      "Limpieza y preparación de la pestaña natural",
      "Aplicación artesanal, pestaña por pestaña, en ambiente relajado",
      "Sellado final y recomendaciones de cuidado",
    ],
    faqs: [
      {
        question: "¿Las extensiones dañan mi pestaña natural?",
        answer:
          "No, cuando la técnica y el mapeo son correctos, la extensión respeta el ciclo natural de tu pestaña. Por eso trabajamos siempre con un diagnóstico previo.",
      },
      {
        question: "¿Cuánto duran las extensiones?",
        answer:
          "Acompañan el ciclo de tu pestaña natural, entre 3 y 4 semanas. Recomendamos un retoque cada 2-3 semanas para mantener la densidad.",
      },
      {
        question: "¿Puedo maquillarme después?",
        answer:
          "Sí, pero recomendamos evitar productos oil-free en la zona de los ojos y no usar máscara de pestañas para conservar mejor la extensión.",
      },
    ],
  },
  {
    slug: "lifting-de-pestanas",
    category: "Pestañas",
    name: "Lifting de pestañas",
    tagline: "Natural, abierta y definida",
    shortDescription:
      "Una mirada más abierta, natural y definida sin necesidad de extensiones.",
    longDescription:
      "El lifting realza tu pestaña natural desde la raíz, generando una curvatura elegante que abre la mirada. Sumamos tinte para dar profundidad y un efecto de \"despertás así\" que dura semanas sin mantenimiento diario.",
    duration: "1 h aprox.",
    priceDemo: "$28.000 DEMO",
    icon: "lift",
    benefits: [
      "Efecto rímel las 24 horas, sin aplicar nada",
      "Respeta y fortalece tu pestaña natural",
      "Ideal para complementar con tinte incluido",
      "Cero mantenimiento diario",
    ],
    forWho: [
      "Quienes prefieren un resultado 100% natural",
      "Pestañas rectas que buscan curvatura",
      "Rutinas de belleza minimalistas",
    ],
    procedure: [
      "Selección del molde según largo y curvatura natural",
      "Aplicación del producto de lifting y fijación",
      "Tinte de pestañas para mayor profundidad",
      "Nutrición final con sérum reparador",
    ],
    faqs: [
      {
        question: "¿Cuánto dura el lifting?",
        answer: "El resultado dura entre 6 y 8 semanas, acompañando el ciclo de crecimiento de tu pestaña natural.",
      },
      {
        question: "¿Qué cuidados debo tener?",
        answer: "Evitar el contacto con agua y vapor durante las primeras 24 a 48 horas para fijar bien la curvatura.",
      },
    ],
  },
  {
    slug: "diseno-de-cejas",
    category: "Cejas",
    name: "Perfilado y diseño de cejas",
    tagline: "La forma que enmarca tu rostro",
    shortDescription:
      "Definimos la forma de tus cejas respetando tus facciones y buscando un resultado natural y armónico.",
    longDescription:
      "Estudiamos la simetría de tu rostro, la dirección de crecimiento y tu estilo personal para diseñar cejas que enmarquen tu mirada. Trabajamos con depilación de precisión y corrección de color para un acabado prolijo y natural.",
    duration: "40 min aprox.",
    priceDemo: "$18.000 DEMO",
    icon: "brow",
    benefits: [
      "Diseño geométrico personalizado según tu rostro",
      "Técnica de depilación de precisión, sin sobrecorregir",
      "Resultado prolijo y natural, sin exceso de maquillaje",
      "Ideal como base antes de laminado o henna",
    ],
    forWho: [
      "Primera vez diseñando tus cejas o cambio de forma",
      "Mantenimiento periódico de forma ya definida",
      "Corrección de asimetrías",
    ],
    procedure: [
      "Análisis facial y trazado de la forma ideal",
      "Depilación de precisión (cera e hilo o pinza según tipo de piel)",
      "Corrección final y perfilado con tijera",
      "Recomendaciones de mantenimiento",
    ],
    faqs: [
      {
        question: "¿Qué pasa si llego tarde?",
        answer:
          "Contamos con una tolerancia de 10 minutos. Pasado ese tiempo, es posible que debamos reprogramar tu turno para no afectar a la siguiente clienta.",
      },
      {
        question: "¿Con qué frecuencia debo repetirlo?",
        answer: "Recomendamos mantenimiento cada 3 a 4 semanas para conservar la forma.",
      },
    ],
  },
  {
    slug: "laminado-de-cejas",
    category: "Cejas",
    name: "Laminado de cejas",
    tagline: "Orden, volumen y expresión",
    shortDescription:
      "Orden, definición y volumen para conseguir unas cejas prolijas y expresivas.",
    longDescription:
      "El laminado peina cada pelo en la dirección ideal y lo fija, logrando un efecto de cejas más pobladas, prolijas y uniformes. Un tratamiento perfecto para quienes buscan un resultado editorial de bajo mantenimiento diario.",
    duration: "50 min aprox.",
    priceDemo: "$22.000 DEMO",
    icon: "laminate",
    benefits: [
      "Efecto cejas peinadas y pobladas todo el día",
      "Disimula espacios vacíos o asimetrías leves",
      "Se combina perfecto con diseño y tinte",
      "Look editorial de bajo mantenimiento",
    ],
    forWho: [
      "Cejas finas o con poca densidad",
      "Quienes aman el efecto \"soap brows\" sin gel diario",
      "Rostros que buscan un toque más definido y moderno",
    ],
    procedure: [
      "Diseño y perfilado previo de la forma",
      "Aplicación de producto de fijación y peinado direccional",
      "Tinte opcional para mayor profundidad",
      "Nutrición final e hidratación",
    ],
    faqs: [
      {
        question: "¿Cuánto dura el laminado?",
        answer: "Entre 4 y 6 semanas, según el ciclo de crecimiento natural de tu vello.",
      },
      {
        question: "¿Puedo combinarlo con diseño de cejas?",
        answer: "Sí, es la combinación más elegida. Podés reservarlo como combo en el paso de turnos.",
      },
    ],
  },
]

export type Combo = {
  id: string
  name: string
  includes: string[]
  priceDemo: string
  duration: string
}

export const combos: Combo[] = [
  {
    id: "combo-lifting-diseno",
    name: "Lifting + Diseño de cejas",
    includes: ["Lifting de pestañas", "Perfilado y diseño de cejas"],
    priceDemo: "$40.000 DEMO",
    duration: "1 h 30 min aprox.",
  },
  {
    id: "combo-extensiones-diseno",
    name: "Extensiones + Diseño de cejas",
    includes: ["Extensiones de pestañas", "Perfilado y diseño de cejas"],
    priceDemo: "$58.000 DEMO",
    duration: "2 h 30 min aprox.",
  },
  {
    id: "combo-laminado-lifting",
    name: "Laminado + Lifting",
    includes: ["Laminado de cejas", "Lifting de pestañas"],
    priceDemo: "$45.000 DEMO",
    duration: "1 h 40 min aprox.",
  },
]

export type ComplementaryService = {
  name: string
  description: string
  icon: "nails" | "manicure" | "hair"
}

export const complementaryServices: ComplementaryService[] = [
  {
    name: "Uñas",
    description: "Esculpidas, soft gel y nail art, a cargo de nuestras especialistas en uñas.",
    icon: "nails",
  },
  {
    name: "Manicuría",
    description: "Manicuría clásica y spa para el cuidado diario de tus manos.",
    icon: "manicure",
  },
  {
    name: "Peluquería",
    description: "Color, cortes y tratamientos capilares realizados por profesionales del salón.",
    icon: "hair",
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
