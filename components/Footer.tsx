import { Instagram, Linkedin } from 'lucide-react'
import CenitLogo from './CenitLogo'
import { brand, navLinks } from '@/lib/content'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg)' }}>
      <div className="shell">
        <div className="flex flex-col gap-8 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-7">
            <a href="#inicio" aria-label="Cenit Studio, ir al inicio">
              <CenitLogo />
            </a>
            <span
              aria-hidden="true"
              className="hidden h-9 w-px lg:block"
              style={{ backgroundColor: 'var(--border)' }}
            />
            <p
              className="hidden text-[14px] font-medium lg:block"
              style={{ color: 'var(--text-muted)' }}
            >
              {brand.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
            <nav aria-label="Navegación del pie">
              <ul className="flex flex-wrap items-center gap-7">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[14px] font-semibold transition-colors duration-200 hover:opacity-70"
                      style={{ color: 'var(--text)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex items-center gap-3">
              <li>
                <a
                  href={brand.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Cenit Studio en LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] border transition-colors duration-200 hover:border-accent-bright"
                  style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                >
                  <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Cenit Studio en Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] border transition-colors duration-200 hover:border-accent-bright"
                  style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                >
                  <Instagram className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col gap-2 border-t py-4 text-[12px] font-medium sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <p>© 2025 Cenit Studio. Todos los derechos reservados.</p>
          <p>{brand.location}</p>
        </div>
      </div>
    </footer>
  )
}
