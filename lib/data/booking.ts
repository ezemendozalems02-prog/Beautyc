import { services, combos, type Service } from "@/lib/data/services"

export type BookableItem = {
  id: string
  name: string
  duration: string
  priceDemo: string
  categories: Service["category"][]
}

export const bookableItems: BookableItem[] = [
  ...services.map((s) => ({
    id: s.slug,
    name: s.name,
    duration: s.duration,
    priceDemo: s.priceDemo,
    categories: [s.category] as Service["category"][],
  })),
  ...combos.map((c) => ({
    id: c.id,
    name: c.name,
    duration: c.duration,
    priceDemo: c.priceDemo,
    categories: ["Pestañas", "Cejas"] as Service["category"][],
  })),
]

export type Professional = {
  id: string
  name: string
  role: string
  specialties: string[]
}

export const professionals: Professional[] = [
  { id: "sofia", name: "Sofía", role: "Especialista en pestañas", specialties: ["Pestañas"] },
  { id: "valentina", name: "Valentina", role: "Especialista en cejas", specialties: ["Cejas"] },
  { id: "camila", name: "Camila", role: "Especialista en mirada integral", specialties: ["Pestañas", "Cejas"] },
]

export type TimeSlotStatus = "available" | "booked"

export type TimeSlot = {
  time: string
  status: TimeSlotStatus
}

const baseSlots: string[] = ["09:00", "10:00", "11:30", "14:00", "15:30", "17:00", "18:30"]

// Deterministic pseudo-random "occupied" pattern per day so the demo looks alive
// without depending on a real backend.
export function getSlotsForDate(dateKey: string): TimeSlot[] {
  let seed = 0
  for (let i = 0; i < dateKey.length; i++) seed += dateKey.charCodeAt(i)

  return baseSlots.map((time, i) => ({
    time,
    status: (seed + i) % 3 === 0 ? "booked" : "available",
  }))
}

export function getNextDays(count: number): Date[] {
  const days: Date[] = []
  const today = new Date()
  for (let i = 0; i < count; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    days.push(d)
  }
  return days
}

export function formatDateKey(date: Date): string {
  return date.toISOString().split("T")[0]
}

export const dayLabels = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"]

export type AppointmentStatus = "Confirmado" | "Pendiente" | "Cancelado"
export type PaymentStatus = "Seña pagada" | "Pendiente de pago"

export type Appointment = {
  time: string
  client: string
  service: string
  professional: string
  status: AppointmentStatus
  payment: PaymentStatus
  day: "Hoy" | "Mañana"
}

export const mockAppointments: Appointment[] = [
  { time: "09:00", client: "María López", service: "Lifting de pestañas", professional: "Sofía", status: "Confirmado", payment: "Seña pagada", day: "Hoy" },
  { time: "10:00", client: "Julieta Sosa", service: "Diseño de cejas", professional: "Valentina", status: "Confirmado", payment: "Seña pagada", day: "Hoy" },
  { time: "11:30", client: "Agostina Vidal", service: "Extensiones de pestañas", professional: "Camila", status: "Pendiente", payment: "Pendiente de pago", day: "Hoy" },
  { time: "14:00", client: "Milagros Ríos", service: "Laminado de cejas", professional: "Valentina", status: "Confirmado", payment: "Seña pagada", day: "Hoy" },
  { time: "15:30", client: "Brenda Acosta", service: "Combo Lifting + Diseño", professional: "Sofía", status: "Confirmado", payment: "Seña pagada", day: "Hoy" },
  { time: "18:30", client: "Noelia Funes", service: "Extensiones de pestañas", professional: "Camila", status: "Cancelado", payment: "Pendiente de pago", day: "Hoy" },
  { time: "09:00", client: "Pilar Gómez", service: "Diseño de cejas", professional: "Valentina", status: "Confirmado", payment: "Seña pagada", day: "Mañana" },
  { time: "11:30", client: "Florencia Díaz", service: "Extensiones de pestañas", professional: "Sofía", status: "Pendiente", payment: "Pendiente de pago", day: "Mañana" },
  { time: "17:00", client: "Carla Medina", service: "Laminado de cejas", professional: "Camila", status: "Confirmado", payment: "Seña pagada", day: "Mañana" },
]
