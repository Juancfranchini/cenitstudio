import { Swoosh } from './Brand'
import { steps } from '../data/site'

export default function Process() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-surface">
      <div className="shell py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-muted">
              Nuestro proceso
            </p>
            <h2 className="h-section mt-5 text-ink">
              De la necesidad
              <br className="hidden sm:block" /> a la solución.
            </h2>
          </div>
          <div className="relative lg:pt-4">
            <p className="body-copy max-w-[300px]">
              Un proceso claro, sin vueltas. Nos enfocamos en lo importante: que
              funcione.
            </p>
            <Swoosh
              className="pointer-events-none absolute right-0 top-6 hidden h-24 w-[70%] lg:block"
              stroke="#2563EB"
              dot="#2563EB"
              width={1.5}
            />
          </div>
        </div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className={`relative lg:pr-8 ${i > 0 ? 'lg:border-l lg:border-line lg:pl-8' : ''}`}
            >
              <div className="relative mb-6 hidden h-3 items-center lg:flex">
                <span className="h-[7px] w-[7px] rounded-full bg-primary" />
                <span className="h-px flex-1 bg-line" />
              </div>

              <span className="text-[12px] font-medium text-primary">{step.number}</span>
              <h3 className="mt-3 text-[19px] font-semibold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="body-copy mt-3 max-w-[240px]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
