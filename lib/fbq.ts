// Meta (Facebook) Pixel tracking helpers

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Fires a Meta Pixel "Contact" event.
 * Safely no-ops if the pixel (fbq) has not loaded yet.
 */
export function trackWhatsAppContact() {
  if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
    window.fbq("track", "Contact")
  }
}
