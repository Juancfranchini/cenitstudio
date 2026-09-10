import Button from './Button'
import HeroImagePlaceholder from './HeroImagePlaceholder'

export default function Hero() {
  return (
    <section id="inicio" className="overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* La altura de la sección la define la imagen, como en el mockup */}
      <div className="shell grid items-center gap-12 pb-14 pt-12 lg:grid-cols-[minmax(0,44%)_minmax(0,1fr)] lg:gap-[1.4%] lg:pb-4 lg:pt-4">
        <div>
          <p className="eyebrow" style={{ color: 'var(--text-muted)' }}>
            Software · Infraestructura · Pauta digital
          </p>

          <h1 className="h-display mt-6" style={{ color: 'var(--text)' }}>
            Tecnología que hace más eficiente tu{' '}
            <span style={{ color: 'var(--accent-bright)' }}>operación.</span>
          </h1>

          <p className="body-copy mt-7 max-w-[440px]">
            Desarrollamos software a medida, infraestructura IT segura y campañas
            publicitarias para que tu empresa opere mejor, venda más y crezca.
          </p>

          <Button href="#contacto" className="mt-8">
            Hablemos
          </Button>
        </div>

        <div className="flex items-stretch gap-4 lg:gap-[2.5%]">
          <div className="min-w-0 flex-1 lg:flex-[0_0_85%]">
            <HeroImagePlaceholder />
          </div>

          {/* Rótulo vertical del mockup, con su filete azul */}
          <div className="hidden shrink-0 items-end gap-4 pb-[16%] sm:flex">
            <span
              aria-hidden="true"
              className="h-[76px] w-px lg:h-[86px]"
              style={{ backgroundColor: 'var(--accent-bright)' }}
            />
            <p
              className="text-[10px] font-semibold uppercase leading-[2.1] tracking-eyebrow lg:text-[11px]"
              style={{ color: 'var(--text)' }}
            >
              Tu negocio
              <br />
              en buenas
              <br />
              manos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
