import { SparkleIcon } from "@/components/icons/beauty-icons"

type EditorialVisualProps = {
  className?: string
  variant?: "hero" | "panel"
}

/**
 * Signature illustrated visual used in place of stock photography, so the
 * brand never leans on imagery tied to the previous hair-salon identity.
 */
export function EditorialVisual({ className = "", variant = "hero" }: EditorialVisualProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#111111] ${className}`}>
      {/* Ambient gradient blobs */}
      <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-[#D9A5AD]/25 blur-3xl animate-drift" />
      <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-[#F2C6CC]/15 blur-3xl animate-drift" style={{ animationDelay: "3s" }} />

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Twinkling sparkles */}
      <SparkleIcon className="absolute top-[14%] left-[18%] w-6 h-6 text-rose-light animate-twinkle" />
      <SparkleIcon className="absolute bottom-[22%] right-[16%] w-4 h-4 text-rose-primary animate-twinkle" style={{ animationDelay: "1.2s" }} />
      <SparkleIcon className="absolute top-[38%] right-[24%] w-3 h-3 text-white/60 animate-twinkle" style={{ animationDelay: "2.1s" }} />

      {/* Central line-art: eye + lash silhouette */}
      <div className="absolute inset-0 flex items-center justify-center animate-float-slow">
        <svg
          viewBox="0 0 320 220"
          className="w-[68%] max-w-md text-rose-light/90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 110c48-72 232-72 280 0" />
          <path d="M20 110c48 60 232 60 280 0" opacity="0.35" />
          <path d="M40 96l-10-30M62 84l-8-32M90 76l-6-34M120 71l-3-35M160 69v-36M200 71l3-35M230 76l6-34M258 84l8-32M280 96l10-30" />
          <circle cx="160" cy="112" r="16" opacity="0.8" />
          <circle cx="160" cy="112" r="5" fill="currentColor" stroke="none" opacity="0.9" />
          <path d="M60 150c30 14 170 14 200 0" opacity="0.25" />
        </svg>
      </div>

      {variant === "hero" && (
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <p className="text-white text-xs uppercase tracking-[0.15em] font-medium">6+ años</p>
            <p className="text-rose-light text-[11px] tracking-wide">creando miradas</p>
          </div>
        </div>
      )}
    </div>
  )
}
