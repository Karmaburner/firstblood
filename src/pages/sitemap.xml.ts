import type { APIRoute } from 'astro'
import { u } from '../lib/url'

// Sidene som skal finnes i søk. Menysiden er bare navigasjon og er utelatt.
const sider = ['/', '/galleri/', '/om/', '/kontakt/']

export const GET: APIRoute = ({ site }) => {
  const idag = new Date().toISOString().slice(0, 10)
  const adresser = sider
    .map((s) => `  <url><loc>${new URL(u(s), site).href}</loc><lastmod>${idag}</lastmod></url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${adresser}\n</urlset>\n`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
