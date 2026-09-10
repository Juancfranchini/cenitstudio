'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import CenitLogo from './CenitLogo'
import WhatsAppButton from './WhatsAppButton'
import { navLinks } from '@/lib/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#inicio')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0.01, 0.3, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="shell flex h-[80px] items-center gap-6 lg:h-[88px]">
        <a href="#inicio" aria-label="Cenit Studio, ir al inicio">
          <CenitLogo />
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:block lg:ml-[9%]">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className="relative block py-2 text-[14px] font-semibold transition-colors duration-200"
                    style={{ color: isActive ? 'var(--accent-bright)' : 'var(--text)' }}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-[2px] left-0 h-[2px] w-full origin-left transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ backgroundColor: 'var(--accent-bright)' }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <WhatsAppButton className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border lg:hidden"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t lg:hidden"
        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
      >
        <ul className="shell flex flex-col py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b py-4 text-[16px] font-semibold"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-5">
            <WhatsAppButton className="w-full" />
          </li>
        </ul>
      </div>
    </header>
  )
}
