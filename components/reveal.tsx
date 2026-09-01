"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "span"
}

export function Reveal({ children, className = "", delay, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as
  return (
    <Tag
      ref={ref as never}
      className={`${className} ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
