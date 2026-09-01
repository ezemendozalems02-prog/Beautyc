"use client"

import { useMemo, useState, type FormEvent } from "react"
import Link from "next/link"
import { Check, ChevronLeft, Loader2, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  bookableItems,
  professionals,
  getSlotsForDate,
  getNextDays,
  formatDateKey,
  dayLabels,
} from "@/lib/data/booking"

type Step = 1 | 2 | 3 | 4 | 5 | "payment" | "confirmation"

const stepLabels = ["Servicio", "Profesional", "Fecha", "Horario", "Datos"]

const SEÑA_DEMO = "$15.000 DEMO"
const DIRECCION_DEMO = "Dirección DEMO 123, Buenos Aires"
const WHATSAPP_NUMBER = "5491100000000"

function formatDate(date: Date) {
  return date.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" })
}

export function BookingFlow() {
  const [step, setStep] = useState<Step>(1)
  const [itemId, setItemId] = useState<string | null>(null)
  const [professionalId, setProfessionalId] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [form, setForm] = useState({ nombre: "", apellido: "", whatsapp: "", email: "" })
  const [paying, setPaying] = useState(false)

  const selectedItem = bookableItems.find((i) => i.id === itemId) ?? null
  const selectedProfessional = professionals.find((p) => p.id === professionalId) ?? null

  const availableProfessionals = useMemo(() => {
    if (!selectedItem) return professionals
    return professionals.filter((p) => selectedItem.categories.some((c) => p.specialties.includes(c)))
  }, [selectedItem])

  const days = useMemo(() => getNextDays(14), [])
  const slots = useMemo(() => (selectedDate ? getSlotsForDate(formatDateKey(selectedDate)) : []), [selectedDate])

  const stepIndex = typeof step === "number" ? step : step === "payment" ? 6 : 7

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    setStep("payment")
  }

  function handlePay() {
    setPaying(true)
    setTimeout(() => {
      setPaying(false)
      setStep("confirmation")
    }, 1400)
  }

  const whatsappMessage = selectedItem && selectedDate && selectedTime
    ? `Hola! Acabo de reservar mi turno para ${selectedItem.name} el ${formatDate(selectedDate)} a las ${selectedTime} hs. La seña ya fue abonada.`
    : ""

  return (
    <div className="max-w-3xl mx-auto">
      {typeof step === "number" && (
        <div className="flex items-center justify-between mb-12">
          {stepLabels.map((label, i) => {
            const n = i + 1
            const active = n <= stepIndex
            return (
              <div key={label} className="flex-1 flex items-center">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                      active ? "bg-rose-primary text-[#111111]" : "bg-white/10 text-white/40"
                    }`}
                  >
                    {n < stepIndex ? <Check className="w-4 h-4" /> : n}
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.08em] hidden sm:block ${active ? "text-white" : "text-white/40"}`}>
                    {label}
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div className={`h-px flex-1 mx-2 ${n < stepIndex ? "bg-rose-primary" : "bg-white/10"}`} />
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Step 1: Servicio */}
      {step === 1 && (
        <div>
          <h2 className="font-serif text-2xl text-white mb-6">Elegí tu servicio</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {bookableItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setItemId(item.id)
                  setProfessionalId(null)
                  setStep(2)
                }}
                className={`text-left rounded-2xl border p-5 transition-colors ${
                  itemId === item.id ? "border-rose-primary bg-white/[0.06]" : "border-white/10 hover:border-white/25"
                }`}
              >
                <p className="font-serif text-lg text-white mb-1">{item.name}</p>
                <p className="text-xs text-white/45 mb-3">{item.duration}</p>
                <p className="text-sm font-semibold text-rose-light">{item.priceDemo}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Profesional */}
      {step === 2 && (
        <div>
          <button onClick={() => setStep(1)} className="flex items-center gap-1 text-white/50 text-sm mb-6 hover:text-white">
            <ChevronLeft className="w-4 h-4" /> Volver
          </button>
          <h2 className="font-serif text-2xl text-white mb-6">Elegí tu profesional</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {availableProfessionals.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setProfessionalId(p.id)
                  setStep(3)
                }}
                className={`text-left rounded-2xl border p-5 transition-colors ${
                  professionalId === p.id ? "border-rose-primary bg-white/[0.06]" : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-rose-pastel/20 border border-rose-light/30 flex items-center justify-center mb-4">
                  <span className="font-serif text-rose-light">{p.name[0]}</span>
                </div>
                <p className="font-serif text-lg text-white mb-1">{p.name}</p>
                <p className="text-xs text-white/45">{p.role}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Fecha */}
      {step === 3 && (
        <div>
          <button onClick={() => setStep(2)} className="flex items-center gap-1 text-white/50 text-sm mb-6 hover:text-white">
            <ChevronLeft className="w-4 h-4" /> Volver
          </button>
          <h2 className="font-serif text-2xl text-white mb-6">Elegí una fecha</h2>
          <div className="flex gap-3 overflow-x-auto pb-3">
            {days.map((day) => {
              const isClosed = day.getDay() === 0 || day.getDay() === 1
              const isSelected = selectedDate && formatDateKey(selectedDate) === formatDateKey(day)
              return (
                <button
                  key={day.toISOString()}
                  disabled={isClosed}
                  onClick={() => {
                    setSelectedDate(day)
                    setSelectedTime(null)
                    setStep(4)
                  }}
                  className={`flex-shrink-0 w-16 py-4 rounded-2xl border text-center transition-colors ${
                    isClosed
                      ? "border-white/5 text-white/20 cursor-not-allowed"
                      : isSelected
                        ? "border-rose-primary bg-rose-primary text-[#111111]"
                        : "border-white/10 text-white hover:border-white/25"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.08em] mb-1 opacity-70">{dayLabels[day.getDay()]}</p>
                  <p className="font-serif text-lg">{day.getDate()}</p>
                </button>
              )
            })}
          </div>
          <p className="text-white/35 text-xs mt-4">Cerrado los domingos y lunes.</p>
        </div>
      )}

      {/* Step 4: Horario */}
      {step === 4 && selectedDate && (
        <div>
          <button onClick={() => setStep(3)} className="flex items-center gap-1 text-white/50 text-sm mb-6 hover:text-white">
            <ChevronLeft className="w-4 h-4" /> Volver
          </button>
          <h2 className="font-serif text-2xl text-white mb-2">Elegí un horario</h2>
          <p className="text-white/45 text-sm mb-6">{formatDate(selectedDate)}</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {slots.map((slot) => {
              const isSelected = selectedTime === slot.time
              const isBooked = slot.status === "booked"
              return (
                <button
                  key={slot.time}
                  disabled={isBooked}
                  onClick={() => {
                    setSelectedTime(slot.time)
                    setStep(5)
                  }}
                  className={`py-3.5 rounded-xl border text-sm font-medium transition-colors ${
                    isBooked
                      ? "border-white/5 text-white/20 line-through cursor-not-allowed"
                      : isSelected
                        ? "border-rose-primary bg-rose-primary text-[#111111]"
                        : "border-white/10 text-white hover:border-white/25"
                  }`}
                >
                  {slot.time}
                </button>
              )
            })}
          </div>
          <div className="flex items-center gap-4 mt-6 text-xs text-white/40">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full border border-white/30" /> Disponible</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-white/15" /> Reservado</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-primary" /> Seleccionado</span>
          </div>
        </div>
      )}

      {/* Step 5: Datos */}
      {step === 5 && selectedItem && selectedProfessional && selectedDate && selectedTime && (
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <button onClick={() => setStep(4)} className="flex items-center gap-1 text-white/50 text-sm mb-6 hover:text-white">
              <ChevronLeft className="w-4 h-4" /> Volver
            </button>
            <h2 className="font-serif text-2xl text-white mb-6">Completá tus datos</h2>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-white/70">Nombre</Label>
                  <Input
                    id="nombre"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="bg-white/5 border-white/15 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellido" className="text-white/70">Apellido</Label>
                  <Input
                    id="apellido"
                    required
                    value={form.apellido}
                    onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                    className="bg-white/5 border-white/15 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-white/70">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="bg-white/5 border-white/15 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/70">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/5 border-white/15 text-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-6 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-rose-light"
              >
                Continuar a reserva
              </Button>
            </form>
          </div>

          <BookingSummary
            itemName={selectedItem.name}
            professionalName={selectedProfessional.name}
            date={formatDate(selectedDate)}
            time={selectedTime}
          />
        </div>
      )}

      {/* Payment */}
      {step === "payment" && selectedItem && selectedProfessional && selectedDate && selectedTime && (
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-2xl text-white mb-2 text-center">Reservá tu lugar</h2>
          <p className="text-white/50 text-sm text-center mb-8">
            Para confirmar tu turno se requiere una seña.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 mb-6">
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-white/60">
                <span>Servicio</span>
                <span className="text-white font-medium">{selectedItem.name}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Fecha</span>
                <span className="text-white font-medium">{formatDate(selectedDate)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Hora</span>
                <span className="text-white font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between text-white/60 pt-3 border-t border-white/10">
                <span>Seña</span>
                <span className="text-rose-light font-semibold">{SEÑA_DEMO}</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0090DE]/10 border border-[#0090DE]/30 p-4 mb-6 text-center">
              <p className="text-[#4fb8ee] text-xs uppercase tracking-[0.12em] font-semibold mb-1">
                Simulación de pago · Mercado Pago
              </p>
              <p className="text-white/40 text-[11px]">
                Pantalla de demostración. No se procesa ningún pago real.
              </p>
            </div>

            <Button
              onClick={handlePay}
              disabled={paying}
              className="w-full py-6 rounded-full bg-[#00B1EA] text-[#0B0B0B] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-[#4fc9f2] disabled:opacity-70"
            >
              {paying ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Procesando pago...
                </span>
              ) : (
                "Pagar seña (demo)"
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Confirmation */}
      {step === "confirmation" && selectedItem && selectedProfessional && selectedDate && selectedTime && (
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-rose-primary/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-rose-primary" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-2">¡Tu turno quedó reservado!</h2>
          <p className="text-white/50 text-sm mb-8">Te esperamos en el estudio.</p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 mb-8 text-left">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/60">
                <span>Servicio</span>
                <span className="text-white font-medium">{selectedItem.name}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Profesional</span>
                <span className="text-white font-medium">{selectedProfessional.name}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Fecha</span>
                <span className="text-white font-medium">{formatDate(selectedDate)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Hora</span>
                <span className="text-white font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between text-white/60 pt-3 border-t border-white/10">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Dirección</span>
                <span className="text-white font-medium text-right">{DIRECCION_DEMO}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Seña</span>
                <span className="text-rose-light font-semibold">{SEÑA_DEMO} · Pagada</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 rounded-full bg-[#25D366] text-[#0B0B0B] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-[#3ee07a] transition-colors"
            >
              Confirmar por WhatsApp
            </a>
            <Link
              href="/"
              className="py-4 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.14em] font-semibold hover:border-white/40 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function BookingSummary({
  itemName,
  professionalName,
  date,
  time,
}: {
  itemName: string
  professionalName: string
  date: string
  time: string
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 h-fit sticky top-28">
      <p className="text-xs uppercase tracking-[0.14em] text-rose-light font-semibold mb-4">Resumen</p>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-white/60">
          <span>Servicio</span>
          <span className="text-white text-right">{itemName}</span>
        </div>
        <div className="flex justify-between text-white/60">
          <span>Profesional</span>
          <span className="text-white">{professionalName}</span>
        </div>
        <div className="flex justify-between text-white/60">
          <span>Fecha</span>
          <span className="text-white">{date}</span>
        </div>
        <div className="flex justify-between text-white/60">
          <span>Hora</span>
          <span className="text-white">{time}</span>
        </div>
      </div>
    </div>
  )
}
