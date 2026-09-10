# Imágenes

Dejá acá las fotos definitivas con estos nombres:

- `hero-placeholder.jpg` — hero, recorte diagonal ascendente
- `software-placeholder.jpg` — servicio 01
- `infrastructure-placeholder.jpg` — servicio 02
- `advertising-placeholder.jpg` — servicio 03

Para activarlas, pasá la ruta por la prop `src`:

- hero: `components/Hero.tsx` → `<HeroImagePlaceholder src="/images/hero-placeholder.jpg" />`
- servicios: `components/Services.tsx` → `<ServiceBlock ... src={service.imagePath} />`

El hueco conserva ratio, recorte y posición, así que el layout no se mueve
al reemplazar el placeholder por la foto.
