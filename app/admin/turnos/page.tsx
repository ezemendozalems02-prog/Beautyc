import type { Metadata } from "next"
import Link from "next/link"
import { TurnosDashboard } from "@/components/admin/turnos-dashboard"

export const metadata: Metadata = {
  title: "Panel de turnos (demo) | Beauty Studio & Academy",
  robots: { index: false, follow: false },
}

export default function AdminTurnosPage() {
  return (
    <main className="theme-light-surface min-h-screen bg-[#FAF7F5]">
      <div className="border-b border-black/8 bg-white">
        <div className="container mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div>
            <p className="font-serif text-lg text-[#111111]">Panel de turnos</p>
            <p className="text-xs text-[#111111]/45">Vista interna · datos de demostración, sin autenticación</p>
          </div>
          <Link href="/" className="text-xs uppercase tracking-[0.12em] text-[#111111]/50 hover:text-rose-primary transition-colors">
            Volver al sitio
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 py-10">
        <TurnosDashboard />
      </div>
    </main>
  )
}
