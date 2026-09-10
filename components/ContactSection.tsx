import { Mail } from 'lucide-react'
import Button from './Button'
import MapPlaceholder from './MapPlaceholder'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { brand } from '@/lib/content'

function ContactItem({
  href,
  label,
  value,
  icon,
  external = false,
}: {
  href: string
  label: string
  value: string
  icon: React.ReactNode
  external?: boolean
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className="group flex items-center gap-4"
        aria-label={`${label}: ${value}`}
      >
        <span
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border transition-colors duration-200 group-hover:border-accent-bright"
          style={{ borderColor: 'var(--dark-border)', color: 'var(--dark-text)' }}
        >
          {icon}
        </span>
        <span>
          <span className="block text-[13px] font-medium" style={{ color: 'var(--dark-muted)' }}>
            {label}
          </span>
          <span className="block text-[16px] font-semibold" style={{ color: 'var(--dark-text)' }}>
            {value}
          </span>
        </span>
      </a>
    </li>
  )
}

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--dark-bg)' }}
    >
      {/* Arco de marca sobre el navy */}
      <svg
        viewBox="0 0 300 190"
        fill="none"
        className="pointer-events-none absolute -right-2 top-6 hidden h-[150px] w-[230px] xl:block"
        aria-hidden="true"
      >
        <path
          d="M6 184C86 168 158 122 206 66C228 40 244 20 254 6"
          stroke="#FFFFFF"
          strokeOpacity="0.9"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="259" cy="6" r="7" fill="var(--accent-bright)" />
      </svg>

      <div className="shell grid gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-10 lg:py-[88px]">
        <div >
          <p className="eyebrow" style={{ color: 'var(--dark-muted)' }}>
            Contacto
          </p>

          <h2 className="h-section mt-6" style={{ color: 'var(--dark-text)' }}>
            Cerca tuyo,
            <br />
            en el norte del GBA.
          </h2>

          <p
            className="mt-7 max-w-[380px] text-[15px] font-medium leading-[1.72]"
            style={{ color: 'var(--dark-muted)' }}
          >
            Trabajamos con empresas y comercios de la zona. Si nos conocés por
            recomendación, mejor.
          </p>

          <Button
            href={brand.whatsapp.href}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-9"
          >
            Contactános
          </Button>
        </div>

        <div className="flex items-start gap-5 lg:pt-2">
          <MapPlaceholder className="h-[250px] w-auto max-w-full lg:h-[300px]" />
          <p
            className="whitespace-nowrap pt-[52px] text-[13px] font-medium leading-snug"
            style={{ color: 'var(--dark-text)' }}
          >
            Zona Norte
            <br />
            GBA
          </p>
        </div>

        <div
          className="lg:border-l lg:pl-10"
          style={{ borderColor: 'var(--dark-border)' }}
        >
          <h3 className="text-[21px] font-bold" style={{ color: 'var(--dark-text)' }}>
            Contacto directo
          </h3>

          <p
            className="mt-4 max-w-[268px] text-[14px] font-medium leading-[1.7]"
            style={{ color: 'var(--dark-muted)' }}
          >
            Hablemos por WhatsApp o escribinos por mail. Respondemos rápido.
          </p>

          <ul className="mt-8 space-y-7">
            <ContactItem
              href={brand.whatsapp.href}
              label="WhatsApp"
              value={brand.whatsapp.label}
              icon={<WhatsAppIcon className="h-5 w-5" />}
              external
            />
            <ContactItem
              href={brand.mail.href}
              label="Mail"
              value={brand.mail.label}
              icon={<Mail className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />}
            />
          </ul>
        </div>
      </div>
    </section>
  )
}
