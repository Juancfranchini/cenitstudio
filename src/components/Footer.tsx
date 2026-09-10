import { IconInstagram, IconLinkedIn, Logo } from './Brand'
import { nav, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="shell">
        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-8">
            <a href="#inicio" aria-label={`${site.name} — inicio`}>
              <Logo />
            </a>
            <span className="hidden h-10 w-px bg-line lg:block" />
            <p className="hidden text-[14px] font-light text-muted lg:block">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap items-center gap-7">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[14px] text-ink transition-colors duration-200 hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex items-center gap-3">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  <IconLinkedIn className="h-[18px] w-[18px]" />
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  <IconInstagram className="h-[18px] w-[18px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>{site.region}</p>
        </div>
      </div>
    </footer>
  )
}
