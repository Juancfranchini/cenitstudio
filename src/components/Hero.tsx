import { IconArrow, Swoosh } from './Brand'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-surface">
      <div className="shell grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-10 lg:py-24">
        <div className="max-w-[560px]">
          <p className="eyebrow">Software · Infraestructura · Pauta digital</p>

          <h1 className="h-display mt-6 text-ink">
            Tecnología que hace más eficiente tu{' '}
            <span className="text-primary">operación.</span>
          </h1>

          <p className="body-copy mt-6 max-w-[440px]">
            Desarrollamos software a medida, infraestructura IT segura y campañas
            publicitarias para que tu empresa opere mejor, venda más y crezca.
          </p>

          <a href="#contacto" className="btn-primary mt-9">
            Hablemos
            <IconArrow className="h-4 w-4" />
          </a>
        </div>

        <div className="relative flex items-center gap-6">
          <div className="relative flex-1">
          <div className="clip-hero relative aspect-[4/3] w-full overflow-hidden bg-ink/10">
            <img
              src="/img/hero.svg"
              alt="Planta industrial moderna en el norte del Gran Buenos Aires"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>

          <Swoosh
            className="pointer-events-none absolute -top-4 left-[-10%] h-[120%] w-[114%]"
            stroke="#FFFFFF"
            dot="#2563EB"
            width={2}
          />
          </div>

          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <span className="h-20 w-px bg-primary" />
            <p className="text-[10px] font-medium uppercase leading-[2.2] tracking-eyebrow text-ink">
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
