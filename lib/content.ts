/** Contenido y datos de la marca. Única fuente de verdad para los textos. */

export const brand = {
  name: 'Cenit Studio',
  tagline: 'Tecnología que impulsa tu negocio.',
  location: 'Zona Norte · GBA, Buenos Aires, Argentina',
  hours: 'Lunes a viernes de 9 a 17 horas (GMT-3)',
  owner: {
    name: 'Juan Cruz Franchini',
    role: 'Socio Fundador · Dirección de Proyectos',
  },
  whatsapp: {
    label: '+54 9 11 5724-5814',
    href: 'https://wa.me/5491157245814',
  },
  mail: {
    label: 'cenit.estudio.com.ar',
    href: 'mailto:hola@cenit.estudio.com.ar',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/cenit-studio',
    instagram: 'https://www.instagram.com/cenit.studio',
  },
} as const

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const services = [
  {
    number: '01',
    titleLines: ['Software', 'a medida'],
    copy: 'Aplicaciones que se adaptan a tu proceso y crecen con vos.',
    imageAlt: 'Software a medida',
    imagePath: '/images/software-placeholder.jpg',
  },
  {
    number: '02',
    titleLines: ['Infraestructura IT'],
    copy: 'Servidores, redes y seguridad para que tu operación no se detenga.',
    imageAlt: 'Infraestructura IT',
    imagePath: '/images/infrastructure-placeholder.jpg',
  },
  {
    number: '03',
    titleLines: ['Pauta publicitaria'],
    copy: 'Llegá a más clientes con campañas en Google y Meta, medibles y orientadas a resultados.',
    imageAlt: 'Pauta publicitaria',
    imagePath: '/images/advertising-placeholder.jpg',
  },
] as const

export const processSteps = [
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
] as const
