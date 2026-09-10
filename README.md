# Cenit Studio — Landing

Implementación de la landing de Cenit Studio siguiendo el mockup visual definitivo.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3 sobre tokens CSS propios
- Lucide React para iconos de interfaz

Sin librerías de animación, sliders, WebGL ni frameworks de UI.

## Ejecutar

```bash
npm install
npm run dev
```

Producción:

```bash
npm run build
npm start
```

## Estructura

```
app/
  layout.tsx        Montserrat (500/600/700) y metadata
  page.tsx          Composición de la home
  globals.css       Tokens, tipografías base y máscaras diagonales
components/
  Header.tsx        Nav sticky, sección activa y menú mobile
  CenitLogo.tsx     Logo e isotipo SVG, versión clara y navy
  Hero.tsx          HeroImagePlaceholder.tsx
  Services.tsx      ServiceBlock.tsx
  Process.tsx       ProcessLine.tsx
  ContactSection.tsx  MapPlaceholder.tsx
  Footer.tsx
  Button.tsx        WhatsAppButton.tsx
  ImagePlaceholder.tsx
lib/
  content.ts        Textos, navegación y datos de contacto
public/images/      Huecos para las fotos definitivas
```

## Sistema visual

La diagonal ascendente del isotipo gobierna la composición: recorte diagonal
del hero, máscara de las fotos de servicios, línea de proceso que asciende
hacia el punto azul y arco de marca sobre el navy. El punto azul funciona
siempre como marcador de llegada.

Reparto de color aproximado: 70% blanco roto, 25% navy, 5% azul eléctrico.
El azul queda reservado a botones, puntos del isotipo, indicadores y hover.

## Tokens

Definidos una sola vez en `app/globals.css` y expuestos a Tailwind en
`tailwind.config.ts`. No hay colores sueltos en los componentes.

| Token | Valor |
| --- | --- |
| `--bg` | `#F8F7F4` |
| `--surface` | `#FFFFFF` |
| `--navy` | `#071C2F` |
| `--navy-light` | `#0F2747` |
| `--text` | `#0F2747` |
| `--text-muted` | `#5B6878` |
| `--border` | `#D7DDE5` |
| `--accent` | `#1D4ED8` |
| `--accent-bright` | `#2563EB` |
| `--accent-focus` | `#60A5FA` |

Sobre navy: `--dark-bg`, `--dark-surface`, `--dark-text`, `--dark-muted`,
`--dark-border`.

## Imágenes

Todos los espacios fotográficos son placeholders en un gris neutro
(`--photo-slot`, que no es color de marca y desaparece al colocar las fotos).
Ver `public/images/README.md` para los nombres de archivo y cómo activarlos.
El hueco fija ratio, recorte y posición, así que reemplazar el placeholder
por la foto real no altera el layout.

## Responsive

Verificado en 1440, 1280, 1024, 768, 390 y 375 px. Los servicios pasan a
columna por debajo de 1024, el proceso se convierte en recorrido vertical y
el hero apila texto e imagen conservando la diagonal.

## Accesibilidad

Contraste AA en texto sobre claro y sobre navy, foco visible en todos los
interactivos, `aria-label` en los enlaces de contacto y redes, y respeto por
`prefers-reduced-motion`.

## Contacto

Zona Norte · GBA, Buenos Aires, Argentina · Lunes a viernes de 9 a 17 h (GMT-3)
WhatsApp +54 9 11 5724-5814 · cenit.estudio.com.ar
