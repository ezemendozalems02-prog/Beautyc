export type FaqItem = {
  question: string
  answer: string
  category: "Servicios" | "Turnos" | "Pagos" | "Academy"
}

export const faqItems: FaqItem[] = [
  {
    category: "Servicios",
    question: "¿Las extensiones dañan las pestañas naturales?",
    answer:
      "No, cuando el mapeo y la técnica son correctos, la extensión respeta el ciclo de crecimiento natural de tu pestaña. Por eso siempre hacemos un diagnóstico previo a la aplicación.",
  },
  {
    category: "Servicios",
    question: "¿Cuánto dura el lifting?",
    answer: "El resultado dura entre 6 y 8 semanas, acompañando el ciclo natural de tu pestaña.",
  },
  {
    category: "Servicios",
    question: "¿Cuánto duran las extensiones?",
    answer: "Entre 3 y 4 semanas. Recomendamos un retoque cada 2-3 semanas para mantener la densidad ideal.",
  },
  {
    category: "Servicios",
    question: "¿Puedo maquillarme después?",
    answer: "Sí, aunque recomendamos evitar productos oil-free en la zona de ojos para conservar mejor el tratamiento.",
  },
  {
    category: "Servicios",
    question: "¿Qué cuidados debo tener?",
    answer:
      "Evitar agua, vapor y productos oleosos en las primeras 24-48 horas. Cada servicio incluye una guía de cuidados personalizada.",
  },
  {
    category: "Turnos",
    question: "¿Qué pasa si llego tarde?",
    answer:
      "Contamos con una tolerancia de 10 minutos. Pasado ese tiempo es posible que debamos reprogramar tu turno para no afectar a la siguiente clienta.",
  },
  {
    category: "Turnos",
    question: "¿Puedo cancelar mi turno?",
    answer:
      "Sí, podés cancelar o reprogramar con al menos 24 horas de anticipación escribiéndonos por WhatsApp desde la confirmación de tu reserva.",
  },
  {
    category: "Pagos",
    question: "¿Cómo funciona la seña?",
    answer:
      "Para confirmar tu turno solicitamos una seña que se descuenta del valor total del servicio el día de tu cita.",
  },
  {
    category: "Pagos",
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos Mercado Pago, transferencia y efectivo en el salón para abonar el resto del servicio.",
  },
  {
    category: "Academy",
    question: "¿Los cursos incluyen certificación?",
    answer: "Sí, todas nuestras formaciones incluyen certificado de finalización avalado por el estudio.",
  },
  {
    category: "Academy",
    question: "¿Necesito experiencia previa para hacer un curso?",
    answer:
      "Depende del curso. Nuestras formaciones de nivel inicial parten desde cero, mientras que las de perfeccionamiento requieren experiencia previa en la técnica.",
  },
]

export const faqCategories = ["Servicios", "Turnos", "Pagos", "Academy"] as const
