export type GalleryItem = {
  category: "Pestañas" | "Lifting" | "Cejas" | "Laminado" | "Diseños"
  icon: "lash" | "lift" | "brow" | "laminate"
  tone: "dark" | "light" | "rose"
  span: "tall" | "normal"
}

export const galleryItems: GalleryItem[] = [
  { category: "Pestañas", icon: "lash", tone: "dark", span: "tall" },
  { category: "Cejas", icon: "brow", tone: "light", span: "normal" },
  { category: "Lifting", icon: "lift", tone: "rose", span: "normal" },
  { category: "Laminado", icon: "laminate", tone: "light", span: "tall" },
  { category: "Diseños", icon: "lash", tone: "rose", span: "normal" },
  { category: "Pestañas", icon: "lift", tone: "dark", span: "normal" },
  { category: "Cejas", icon: "laminate", tone: "rose", span: "tall" },
  { category: "Diseños", icon: "brow", tone: "light", span: "normal" },
]
