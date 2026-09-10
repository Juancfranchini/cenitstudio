import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Cenit Studio — Tecnología que impulsa tu negocio',
  description:
    'Software a medida, infraestructura IT y pauta publicitaria para PyMEs del norte del Gran Buenos Aires.',
  metadataBase: new URL('https://cenit.estudio.com.ar'),
  openGraph: {
    title: 'Cenit Studio — Tecnología que impulsa tu negocio',
    description:
      'Software a medida, infraestructura IT y pauta publicitaria para PyMEs del norte del Gran Buenos Aires.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  )
}
