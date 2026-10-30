// Legger base-adressen foran en sti, så lenker og bilder virker både på
// GitHub Pages (/firstblood/...) og på et eget domene senere (base '/').
const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export const u = (sti: string) => base + sti
