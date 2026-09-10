export const site = {
  name: 'Cenit Studio',
  tagline: 'Tecnología que impulsa tu negocio.',
  region: 'Zona Norte · GBA, Buenos Aires, Argentina',
  whatsapp: {
    display: '+54 9 11 5724-5814',
    href: 'https://wa.me/5491157245814',
  },
  mail: {
    display: 'cenit.estudio.com.ar',
    href: 'mailto:hola@cenit.estudio.com.ar',
  },
  social: {
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
}

export const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

/**
 * Las imágenes son placeholders con la misma temática del diseño original.
 * Reemplazá cada `image` por el archivo definitivo en /public/img.
 */
export const services = [
  {
    number: '01',
    title: ['Software', 'a medida'],
    copy: 'Aplicaciones que se adaptan a tu proceso y crecen con vos.',
    image: '/img/software.svg',
    alt: 'Editor de código en una notebook',
  },
  {
    number: '02',
    title: ['Infraestructura IT'],
    copy: 'Servidores, redes y seguridad para que tu operación no se detenga.',
    image: '/img/infra.svg',
    alt: 'Rack de servidores en un datacenter',
  },
  {
    number: '03',
    title: ['Pauta publicitaria'],
    copy: 'Llegá a más clientes con campañas en Google y Meta, medibles y orientadas a resultados.',
    image: '/img/pauta.svg',
    alt: 'Aplicaciones de redes sociales en un celular',
  },
]

export const steps = [
  {
    number: '01',
    title: 'Relevamiento',
    copy: 'Escuchamos tu necesidad, analizamos tu contexto y definimos el alcance.',
  },
  {
    number: '02',
    title: 'Propuesta escrita',
    copy: 'Te presentamos una propuesta técnica y económica, clara y sin letra chica.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    copy: 'Implementamos la solución, con comunicación constante y entregas en tiempo.',
  },
  {
    number: '04',
    title: 'Mantenimiento mensual',
    copy: 'Nos ocupamos de que todo siga funcionando, con soporte y mejoras continuas.',
  },
]
