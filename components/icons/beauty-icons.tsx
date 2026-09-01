import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function LashIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M8 36c8-14 40-14 48 0" />
      <path d="M14 34l-3-8M22 31l-2-9M32 30v-9M42 31l2-9M50 34l3-8" />
      <circle cx="32" cy="38" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LiftIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M8 38c8-16 40-16 48 0" />
      <path d="M16 33c1-4 3-6 4-6M26 29c1-3 2-5 2-6M36 29c-1-3-2-5-2-6M46 33c-1-4-3-6-4-6" />
    </svg>
  )
}

export function BrowIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M8 30c6-9 20-12 26-6" />
      <path d="M30 24c8-6 20-3 26 6" />
    </svg>
  )
}

export function LaminateIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M8 32c6-10 20-13 26-7" />
      <path d="M12 30c4-6 12-9 18-6M18 33c3-5 9-7 13-5" />
    </svg>
  )
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M32 10c1.5 8 5 11.5 13 13-8 1.5-11.5 5-13 13-1.5-8-5-11.5-13-13 8-1.5 11.5-5 13-13Z" />
      <path d="M50 42c.8 4 2.5 5.7 6.5 6.5-4 .8-5.7 2.5-6.5 6.5-.8-4-2.5-5.7-6.5-6.5 4-.8 5.7-2.5 6.5-6.5Z" />
    </svg>
  )
}

export function NailsIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M22 12c-3 4-4 10-4 16 0 10 5 18 14 18s14-8 14-18c0-6-1-12-4-16" />
      <path d="M22 12c3-2 7-3 10-3s7 1 10 3" />
    </svg>
  )
}

export function ManicureIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M14 40c0-12 6-22 18-22s18 10 18 22" />
      <path d="M20 40v-14M27 40v-18M37 40v-18M44 40v-14" />
      <path d="M12 40h40" />
    </svg>
  )
}

export function HairIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M20 14c-6 6-8 16-6 30M44 14c6 6 8 16 6 30" />
      <path d="M20 14c4-4 8-6 12-6s8 2 12 6" />
      <path d="M24 26c3-2 5-2 8-2s5 0 8 2" />
    </svg>
  )
}

export function RibbonIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="32" cy="24" r="12" />
      <path d="M24 34l-6 20 14-8 14 8-6-20" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="32" cy="32" r="20" />
      <path d="M32 20v12l9 6" />
    </svg>
  )
}
