# Cenit Studio — Landing

Réplica en React de la landing y el sistema de marca de Cenit Studio.

## Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 (tokens de marca en `tailwind.config.js` y `src/index.css`)

## Uso
```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción en dist/
npm run preview  # sirve el build
```

## Estructura
- `src/data/site.ts` — todo el contenido editable (nav, servicios, proceso, contacto).
- `src/components/Brand.tsx` — logo, isotipo, curva de marca e iconos, en SVG.
- `src/components/` — Header, Hero, Services, Process, Contact, Footer.
- `public/img/` — imágenes.

## Imágenes
Las cuatro imágenes de `public/img` son placeholders SVG con la paleta de marca.
Reemplazalas por las fotos definitivas manteniendo los nombres, o actualizá las
rutas en `src/data/site.ts` (servicios) y `src/components/Hero.tsx` (hero).

## Tokens de color
| Token | Valor |
| --- | --- |
| bg | `#071C2F` |
| surface | `#F8F7F4` |
| text | `#0F2747` |
| text-muted | `#6B7A90` |
| border | `#E5E7EB` |
| primary | `#2563EB` |
| primary-hover | `#1D4ED8` |
| focus | `#93C5FD` |

Acento alternativo para piezas de Meta Ads: `#3B82F6`.
