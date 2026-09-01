"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-black/8 bg-[#FAF7F5] p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-rose-primary/20 flex items-center justify-center mx-auto mb-5">
          <Check className="w-7 h-7 text-rose-primary" />
        </div>
        <h3 className="font-serif text-xl text-[#111111] mb-2">¡Gracias por tu consulta!</h3>
        <p className="text-[#111111]/60 text-sm">
          Te vamos a responder a la brevedad. Mientras tanto, también podés escribirnos por
          WhatsApp para una atención más rápida.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" required placeholder="Tu nombre" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp</Label>
          <Input id="whatsapp" required placeholder="+54 9 11 0000-0000" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required placeholder="tuemail@ejemplo.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivo">Motivo de consulta</Label>
        <Select defaultValue="servicio">
          <SelectTrigger id="motivo" className="w-full">
            <SelectValue placeholder="Elegí un motivo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="servicio">Consulta por un servicio</SelectItem>
            <SelectItem value="turno">Consulta por un turno</SelectItem>
            <SelectItem value="academy">Consulta por Beauty Academy</SelectItem>
            <SelectItem value="otro">Otro motivo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea id="mensaje" required rows={4} placeholder="Contanos en qué podemos ayudarte" />
      </div>

      <Button
        type="submit"
        className="w-full py-6 rounded-full bg-rose-primary text-[#111111] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-rose-light"
      >
        Enviar consulta
      </Button>
    </form>
  )
}
