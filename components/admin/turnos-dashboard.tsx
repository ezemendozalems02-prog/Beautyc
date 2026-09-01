"use client"

import { useMemo, useState } from "react"
import { mockAppointments, type Appointment } from "@/lib/data/booking"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"

const services = Array.from(new Set(mockAppointments.map((a) => a.service)))
const professionalNames = Array.from(new Set(mockAppointments.map((a) => a.professional)))

const statusStyles: Record<Appointment["status"], string> = {
  Confirmado: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Pendiente: "bg-amber-100 text-amber-700 border-amber-200",
  Cancelado: "bg-rose-100 text-rose-600 border-rose-200",
}

export function TurnosDashboard() {
  const [dayFilter, setDayFilter] = useState<"Todos" | "Hoy" | "Mañana">("Todos")
  const [serviceFilter, setServiceFilter] = useState("Todos")
  const [professionalFilter, setProfessionalFilter] = useState("Todos")
  const [statusFilter, setStatusFilter] = useState("Todos")

  const filtered = useMemo(() => {
    return mockAppointments.filter((a) => {
      if (dayFilter !== "Todos" && a.day !== dayFilter) return false
      if (serviceFilter !== "Todos" && a.service !== serviceFilter) return false
      if (professionalFilter !== "Todos" && a.professional !== professionalFilter) return false
      if (statusFilter !== "Todos" && a.status !== statusFilter) return false
      return true
    })
  }, [dayFilter, serviceFilter, professionalFilter, statusFilter])

  const today = mockAppointments.filter((a) => a.day === "Hoy")
  const tomorrow = mockAppointments.filter((a) => a.day === "Mañana")
  const pendientes = mockAppointments.filter((a) => a.status === "Pendiente")
  const confirmados = mockAppointments.filter((a) => a.status === "Confirmado")
  const ingresos = confirmados.length * 15000

  const stats = [
    { label: "Turnos de hoy", value: today.length },
    { label: "Turnos de mañana", value: tomorrow.length },
    { label: "Turnos pendientes", value: pendientes.length },
    { label: "Turnos confirmados", value: confirmados.length },
    { label: "Ingresos por señas (DEMO)", value: `$${ingresos.toLocaleString("es-AR")}` },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-black/8 bg-white p-5">
            <p className="text-2xl font-serif text-[#111111]">{s.value}</p>
            <p className="text-xs text-[#111111]/50 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-black/8 bg-white p-6">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <FilterSelect
                value={dayFilter}
                onChange={(v) => setDayFilter(v as typeof dayFilter)}
                options={["Todos", "Hoy", "Mañana"]}
                placeholder="Día"
              />
              <FilterSelect
                value={serviceFilter}
                onChange={setServiceFilter}
                options={["Todos", ...services]}
                placeholder="Servicio"
              />
              <FilterSelect
                value={professionalFilter}
                onChange={setProfessionalFilter}
                options={["Todos", ...professionalNames]}
                placeholder="Profesional"
              />
              <FilterSelect
                value={statusFilter}
                onChange={setStatusFilter}
                options={["Todos", "Confirmado", "Pendiente", "Cancelado"]}
                placeholder="Estado"
              />
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hora</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Servicio</TableHead>
                    <TableHead>Profesional</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Pago</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((a, i) => (
                    <TableRow key={`${a.time}-${a.client}-${i}`}>
                      <TableCell className="font-medium">{a.time}</TableCell>
                      <TableCell>{a.client}</TableCell>
                      <TableCell>{a.service}</TableCell>
                      <TableCell>{a.professional}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={statusStyles[a.status]}>
                          {a.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#111111]/60">{a.payment}</TableCell>
                    </TableRow>
                  ))}
                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-[#111111]/40 py-10">
                        No hay turnos que coincidan con los filtros seleccionados.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/8 bg-white p-6">
          <p className="text-sm font-semibold text-[#111111] mb-4">Calendario</p>
          <Calendar mode="single" className="w-full" />
        </div>
      </div>
    </div>
  )
}

function FilterSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
