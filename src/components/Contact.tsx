import { IconArrow, IconMail, IconWhatsApp, Swoosh } from './Brand'
import { site } from '../data/site'

/** Mapa esquemático de la Zona Norte del GBA, dibujado como línea. */
function ZonaNorteMap() {
  return (
    <svg
      viewBox="0 0 260 240"
      fill="none"
      className="h-full w-full"
      role="img"
      aria-label="Mapa esquemático de la Zona Norte del Gran Buenos Aires"
    >
      <g stroke="#2563EB" strokeOpacity="0.5" strokeWidth="1">
        <path d="M96 8 47 58l6 40-27 34 18 36-13 30 34 26 40-14 33 12 26-30-6-38 24-30-18-34-31-6-18-30-19-4Z" />
        <path d="M96 8 78 56l-31 2M78 56l27 26-32 38-20-24M105 82l45-12M150 70l14 42-42 12M122 124l-8 44-41-14M114 168l40 10 12-32M154 178l32-18M166 146l24-24" />
      </g>
      <circle cx="150" cy="106" r="16" fill="#2563EB" fillOpacity="0.18" />
      <circle cx="150" cy="106" r="6" fill="#2563EB" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-bg text-white">
      <Swoosh
        className="pointer-events-none absolute -right-10 top-4 hidden h-52 w-[300px] opacity-70 lg:block"
        stroke="#FFFFFF"
        dot="#2563EB"
        width={1.5}
      />

      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.05fr_0.9fr_1fr] lg:gap-10 lg:py-24">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-white/55">
            Contacto
          </p>
          <h2 className="h-section mt-5 text-white">
            Cerca tuyo,
            <br /> en el norte del GBA.
          </h2>
          <p className="mt-6 max-w-[380px] text-[15px] font-light leading-[1.75] text-white/70">
            Trabajamos con empresas y comercios de la zona. Si nos conocés por
            recomendación, mejor.
          </p>
          <a href={site.whatsapp.href} target="_blank" rel="noreferrer noopener" className="btn-primary mt-9">
            Contactános
            <IconArrow className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-[240px] w-[260px] max-w-full">
            <ZonaNorteMap />
          </div>
          <p className="whitespace-nowrap text-[13px] font-light leading-snug text-white/85">
            Zona Norte
            <br />
            GBA
          </p>
        </div>

        <div className="lg:border-l lg:border-white/15 lg:pl-10">
          <h3 className="text-[22px] font-semibold text-white">Contacto directo</h3>
          <p className="mt-4 max-w-[300px] text-[14px] font-light leading-[1.7] text-white/70">
            Hablemos por WhatsApp o escribinos por mail. Respondemos rápido.
          </p>

          <ul className="mt-8 space-y-7">
            <li>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 group-hover:border-primary group-hover:bg-primary">
                  <IconWhatsApp className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[14px] text-white/60">WhatsApp</span>
                  <span className="block text-[16px] text-white">
                    {site.whatsapp.display}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={site.mail.href} className="group flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 group-hover:border-primary group-hover:bg-primary">
                  <IconMail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[14px] text-white/60">Mail</span>
                  <span className="block text-[16px] text-white">
                    {site.mail.display}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
