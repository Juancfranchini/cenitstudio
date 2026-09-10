import { useEffect, useState } from 'react'
import { Logo, IconArrow, IconWhatsApp } from './Brand'
import { nav, site } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0.01, 0.25, 0.5] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/90 backdrop-blur">
      <div className="shell flex h-[76px] items-center justify-between gap-8">
        <a href="#inicio" aria-label={`${site.name} — inicio`}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => {
              const isActive = active === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative block py-2 text-[14px] transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-ink hover:text-primary'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-primary transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary hidden px-6 py-3 text-[14px] sm:inline-flex"
          >
            <IconWhatsApp className="h-[18px] w-[18px]" />
            WhatsApp
            <IconArrow className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label="Abrir menú"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line lg:hidden"
          >
            <span className="h-[2px] w-5 bg-ink" />
            <span className="h-[2px] w-5 bg-ink" />
            <span className="h-[2px] w-5 bg-ink" />
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-line bg-surface lg:hidden"
      >
        <ul className="shell flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/70 py-3.5 text-[15px] text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary w-full justify-center"
            >
              <IconWhatsApp className="h-[18px] w-[18px]" /> WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
