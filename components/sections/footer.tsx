import Link from "next/link"
import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/academy", label: "Beauty Academy" },
  { href: "/turnos", label: "Turnos" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white py-14 md:py-16">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl md:text-2xl mb-4">Beauty Studio</h3>
            <p className="text-white/50 leading-relaxed mb-6 text-sm">
              Belleza, confianza y formación.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-primary hover:text-[#111111] hover:border-rose-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-primary hover:text-[#111111] hover:border-rose-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg mb-4">Estudio</h4>
            <div className="space-y-2.5 text-white/50 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-light flex-shrink-0 mt-0.5" />
                <span>Dirección DEMO 123, Buenos Aires</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-rose-light flex-shrink-0 mt-0.5" />
                <span>Mar a Sáb: 9:00 - 19:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg mb-4">Beauty Academy</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              Formación profesional en pestañas y cejas, con certificación.
            </p>
            <Link href="/academy" className="text-sm text-rose-light hover:text-rose-primary transition-colors">
              Ver formaciones →
            </Link>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg mb-4">Enlaces</h4>
            <nav className="space-y-2 text-sm">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="block text-white/50 hover:text-rose-light transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs md:text-sm">
            <p>© {new Date().getFullYear()} Beauty Studio &amp; Academy. Todos los derechos reservados.</p>
            <p>Belleza, confianza y formación.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
