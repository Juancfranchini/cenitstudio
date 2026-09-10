import ServiceBlock from './ServiceBlock'
import { services } from '@/lib/content'

export default function Services() {
  return (
    <section
      id="servicios"
      className="border-t"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="shell py-14 lg:pb-[64px] lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,1fr)] lg:gap-0">
          <div >
            <p className="eyebrow" style={{ color: 'var(--accent-bright)' }}>
              Nuestros servicios
            </p>
            <h2 className="h-section mt-6" style={{ color: 'var(--text)' }}>
              Soluciones reales
              <br />
              para tu operación.
            </h2>
          </div>

          <div
            className="border-l pl-7 lg:mt-1 lg:self-start lg:pt-1"
            style={{ borderColor: 'var(--border)' }}
          >
            <p className="body-copy max-w-[275px]">
              Tres áreas, un mismo objetivo: que tu empresa sea más eficiente, segura y
              rentable.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-14 lg:grid-cols-3 lg:gap-0">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={
                index > 0 ? 'lg:border-l lg:pl-8 lg:pr-6' : 'lg:pr-6'
              }
              style={index > 0 ? { borderColor: 'var(--border)' } : undefined}
            >
              <ServiceBlock
                number={service.number}
                titleLines={service.titleLines}
                copy={service.copy}
                imageAlt={service.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
