"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackWhatsAppContact } from "@/lib/fbq"

const whatsappHref =
  "https://wa.me/5491100000000?text=Hola!%20Quiero%20consultar%20por%20un%20turno."

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppContact()}>
        <Button
          className="w-14 h-14 rounded-full bg-rose-primary hover:bg-rose-light shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label="Escribir por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-[#111111]" />
        </Button>
      </a>
    </div>
  )
}
