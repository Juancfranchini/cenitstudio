import ProcessLine, { ProcessLineVertical } from './ProcessLine'
import { processSteps } from '@/lib/content'

export default function Process() {
  return (
    <section
      id="nosotros"
      className="overflow-hidden border-t"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="shell py-16 lg:py-[88px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div >
            <p className="eyebrow" style={{ color: 'var(--text-muted)' }}>
              Nuestro proceso
            </p>
            <h2 className="h-section mt-6" style={{ color: 'var(--text)' }}>
              De la necesidad
              <br />
              a la solución.
            </h2>
          </div>

          <div className="lg:mt-2">
            <p className="body-copy max-w-[300px]">
              Un proceso claro, sin vueltas. Nos enfocamos en lo importante: que
              funcione.
            </p>
          </div>
        </div>

        <ProcessLine />

        <ol className="relative mt-10 grid gap-10 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-0">
          <ProcessLineVertical />

          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className={`relative pl-6 lg:pl-0 lg:pr-8 ${
                index > 0 ? 'lg:border-l lg:pl-8' : ''
              }`}
              style={index > 0 ? { borderColor: 'var(--border)' } : undefined}
            >
              <span
                className="absolute left-0 top-[6px] h-[7px] w-[7px] rounded-full lg:hidden"
                style={{ backgroundColor: 'var(--accent-bright)' }}
                aria-hidden="true"
              />

              <span
                className="text-[12px] font-semibold"
                style={{ color: 'var(--accent-bright)' }}
              >
                {step.number}
              </span>

              <h3
                className="mt-3 text-[18px] font-bold leading-snug"
                style={{ color: 'var(--text)' }}
              >
                {step.title}
              </h3>

              <p className="body-copy mt-3 max-w-[230px]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
