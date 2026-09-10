import { IconArrow } from './Brand'
import { services } from '../data/site'

export default function Services() {
  return (
    <section id="servicios" className="border-y border-line bg-white/60">
      <div className="shell py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Nuestros servicios</p>
            <h2 className="h-section mt-5 text-ink">
              Soluciones reales
              <br className="hidden sm:block" /> para tu operación.
            </h2>
          </div>
          <div className="border-l border-line pl-6 lg:pt-14">
            <p className="body-copy max-w-[340px]">
              Tres áreas, un mismo objetivo: que tu empresa sea más eficiente, segura
              y rentable.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0">
          {services.map((service, i) => (
            <li
              key={service.number}
              className={`flex flex-col ${
                i > 0 ? 'md:border-l md:border-line md:pl-8' : ''
              } ${i < services.length - 1 ? 'md:pr-8' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="pt-1">
                  <span className="text-[13px] font-medium text-primary">
                    {service.number}
                  </span>
                  <span className="mt-2 block h-px w-14 bg-primary/40" />
                </div>
                <div className="clip-card relative h-[140px] w-[62%] overflow-hidden bg-ink/10">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
                {service.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="body-copy mt-4 max-w-[280px] flex-1">{service.copy}</p>

              <a href="#contacto" className="link-arrow mt-6">
                Ver más
                <IconArrow className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
