"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const fadeTimer = setTimeout(() => setFading(true), 1300)
    const removeTimer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = previousOverflow
    }, 1800)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-[#0B0B0B] transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 64 30"
        className="w-20 h-10 text-rose-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="preloader-path" pathLength={1} d="M4 20c8-13 48-13 56 0" />
        <path
          className="preloader-path"
          pathLength={1}
          style={{ animationDelay: "150ms" }}
          d="M14 17l-3-6M22 15l-2-7M30 14v-7M38 15l2-7M46 17l3-6"
        />
        <circle
          className="preloader-path"
          pathLength={1}
          style={{ animationDelay: "300ms" }}
          cx="30"
          cy="20"
          r="3.4"
          fill="none"
        />
      </svg>

      <p
        className="font-serif text-white/90 text-sm tracking-[0.35em] uppercase opacity-0 animate-fade-in"
        style={{ animationDelay: "500ms" }}
      >
        Beauty Studio
      </p>

      <div className="w-32 h-px bg-white/10 overflow-hidden rounded-full">
        <div className="h-full bg-rose-primary animate-preloader-bar" />
      </div>
    </div>
  )
}
