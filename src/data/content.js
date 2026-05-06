/* ============================
   Content Data Proxy
   (Wix Headless ready)
   ============================ */

export const siteConfig = {
  companyName: 'DESPERDICIOS INDUSTRIALES CAKYN SA DE CV',
  brandShort: 'CAKYN',
  tagline: 'Materia prima inteligente para la industria',
  phone: '+525500000000',
  email: 'contacto@cakyn.com.mx',
  address: 'Ciudad de México, México',
}

export const heroContent = {
  tag: 'Resinas plásticas industriales',
  title: 'Resinas plásticas vírgenes y recicladas para la industria en México',
  titleAccent: 'vírgenes y recicladas',
  subtitle: 'Suministramos materia prima confiable para producción continua, combinando calidad, ahorro y sustentabilidad.',
  ctaPrimary: 'Solicitar cotización',
  ctaSecondary: 'Ver productos',
  stats: [
    { value: 500, suffix: '+', label: 'Toneladas mensuales' },
    { value: 15, suffix: '+', label: 'Años de experiencia' },
    { value: 200, suffix: '+', label: 'Clientes activos' },
    { value: 98, suffix: '%', label: 'Satisfacción' },
  ],
}

export const differentialContent = {
  tag: 'Dos líneas de suministro',
  title: 'Una sola solución, dos líneas de suministro',
  virgin: {
    title: 'Material Virgen',
    icon: '◆',
    items: [
      'Alta calidad y consistencia',
      'Ideal para procesos críticos',
      'Especificaciones técnicas precisas',
      'Certificaciones de origen',
    ],
    accent: 'blue',
  },
  recycled: {
    title: 'Material Reciclado',
    icon: '♻',
    items: [
      'Reducción de costos significativa',
      'Alternativa sustentable',
      'Aplicaciones industriales versátiles',
      'Economía circular activa',
    ],
    accent: 'green',
  },
}

export const valueProps = {
  tag: 'Ventajas competitivas',
  title: 'Por qué elegir CAKYN',
  items: [
    {
      icon: '⚡',
      title: 'Suministro constante',
      description: 'Garantizamos disponibilidad continua para que tu línea de producción nunca se detenga.',
    },
    {
      icon: '📉',
      title: 'Reducción de costos',
      description: 'Optimiza tu presupuesto de materia prima con nuestras alternativas recicladas de alta calidad.',
    },
    {
      icon: '🔧',
      title: 'Alternativas por proceso',
      description: 'Te asesoramos para seleccionar el material ideal según tu método de manufactura.',
    },
    {
      icon: '🧪',
      title: 'Asesoría técnica',
      description: 'Equipo especializado que entiende los requerimientos técnicos de cada industria.',
    },
    {
      icon: '📦',
      title: 'Flexibilidad en volúmenes',
      description: 'Desde lotes pequeños hasta contratos de suministro a gran escala.',
    },
    {
      icon: '🌿',
      title: 'Compromiso ambiental',
      description: 'Cada kg de material reciclado que usas contribuye a la economía circular.',
    },
  ],
}

export const solutionsContent = {
  tag: 'Procesos industriales',
  title: 'Soluciones en materia prima plástica',
  subtitle: 'Ofrecemos materiales vírgenes y reciclados para procesos industriales adaptados a las necesidades de cada cliente.',
  processes: [
    {
      id: 'injection',
      title: 'Inyección',
      description: 'Resinas optimizadas para procesos de moldeo por inyección con alta fluidez y consistencia dimensional.',
      icon: '🏭',
      features: ['Alta fluidez', 'Consistencia térmica', 'Acabado superficial'],
    },
    {
      id: 'extrusion',
      title: 'Extrusión',
      description: 'Materiales formulados para líneas de extrusión continua con estabilidad de proceso garantizada.',
      icon: '⚙️',
      features: ['Estabilidad de proceso', 'Uniformidad', 'Rendimiento constante'],
    },
    {
      id: 'blowmolding',
      title: 'Soplado',
      description: 'Polímeros seleccionados para soplado de envases y contenedores con excelente resistencia.',
      icon: '🫧',
      features: ['Resistencia al impacto', 'Transparencia', 'Barrera química'],
    },
  ],
}

export const industriesContent = {
  tag: 'Sectores',
  title: 'Sectores que atendemos',
  subtitle: 'Trabajamos con industrias que requieren calidad constante, optimización de costos y flexibilidad.',
  sectors: [
    { id: 'packaging', title: 'Empaques y envases', icon: '📦', description: 'Resinas para envases alimenticios, industriales y de consumo con certificaciones.' },
    { id: 'automotive', title: 'Automotriz', icon: '🚗', description: 'Materiales de alto rendimiento para componentes automotrices y autopartes.' },
    { id: 'construction', title: 'Construcción', icon: '🏗️', description: 'Polímeros para tuberías, perfiles y materiales de construcción duraderos.' },
    { id: 'electronics', title: 'Electrónica', icon: '💻', description: 'Resinas técnicas para carcasas, conectores y componentes electrónicos.' },
    { id: 'textile', title: 'Textil', icon: '🧵', description: 'Materiales base para fibras sintéticas y aplicaciones textiles industriales.' },
  ],
}

export const comparatorContent = {
  tag: 'Comparativa',
  title: '¿Qué material necesitas?',
  rows: [
    { feature: 'Calidad', virgin: 'Alta', recycled: 'Alta', virginPct: 95, recycledPct: 78 },
    { feature: 'Consistencia', virgin: 'Alta', recycled: 'Variable', virginPct: 98, recycledPct: 65 },
    { feature: 'Costo', virgin: 'Alto', recycled: 'Bajo', virginPct: 30, recycledPct: 85 },
    { feature: 'Sustentabilidad', virgin: 'Media', recycled: 'Alta', virginPct: 45, recycledPct: 92 },
    { feature: 'Aplicaciones críticas', virgin: 'Sí', recycled: 'Limitado', virginPct: 95, recycledPct: 55 },
  ],
  cta: 'Solicitar asesoría personalizada',
}

export const aboutContent = {
  tag: 'Nuestra historia',
  title: 'Sobre CAKYN',
  description: 'Somos una empresa mexicana enfocada en el suministro y reciclaje de materiales plásticos para la industria, comprometida con la eficiencia productiva y la sustentabilidad.',
  mission: {
    title: 'Misión',
    text: 'Transformar y suministrar materia prima plástica que impulse la productividad de nuestros clientes.',
  },
  vision: {
    title: 'Visión',
    text: 'Ser un referente en soluciones de materiales plásticos en México.',
  },
  values: [
    { icon: '✦', title: 'Calidad', description: 'Materiales que cumplen estándares industriales.' },
    { icon: '🤝', title: 'Compromiso', description: 'Con nuestros clientes y su producción.' },
    { icon: '♻️', title: 'Sustentabilidad', description: 'Economía circular en cada proceso.' },
    { icon: '💡', title: 'Innovación', description: 'Mejora continua en materiales.' },
  ],
}

export const sustainabilityContent = {
  tag: 'Impacto ambiental',
  title: 'Compromiso ambiental',
  keyPhrase: 'Convertimos residuos en recursos productivos',
  pillars: [
    { icon: '🗑️', title: 'Reducción de residuos', description: 'Procesamos residuos plásticos industriales para darles nueva vida.' },
    { icon: '♻️', title: 'Economía circular', description: 'Reintegramos materiales al ciclo productivo.' },
    { icon: '🔄', title: 'Reintegración', description: 'Transformamos scrap en materia prima funcional.' },
    { icon: '🌍', title: 'Impacto positivo', description: 'Cada tonelada reciclada reduce la huella ambiental.' },
  ],
  metrics: [
    { value: 1200, suffix: 'T', label: 'Toneladas recicladas / año' },
    { value: 840, suffix: 'T', label: 'CO₂ evitado / año' },
    { value: 75, suffix: '%', label: 'Material reintegrado' },
  ],
}

export const contactContent = {
  tag: 'Cotización',
  title: 'Solicita una cotización',
  subtitle: 'Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en menos de 24 horas.',
  materialTypes: [
    'Polipropileno virgen (PP)',
    'Polietileno virgen (HDPE/LDPE)',
    'Poliestireno virgen',
    'Polietileno reciclado',
    'Polipropileno reciclado',
    'Mezclas industriales',
    'Material a la medida',
  ],
}

export const servicesContent = {
  tag: 'Servicios',
  title: 'Soluciones completas en materia prima plástica',
  services: [
    {
      icon: '🏭',
      title: 'Suministro de resinas vírgenes',
      description: 'Entrega constante con especificaciones técnicas claras para tus procesos más exigentes.',
    },
    {
      icon: '♻️',
      title: 'Suministro de resinas recicladas',
      description: 'Alternativas rentables y sustentables sin comprometer la calidad de tu producción.',
    },
    {
      icon: '📥',
      title: 'Compra de scrap plástico',
      description: 'Adquisición de residuos industriales para reciclaje. Convertimos tu desperdicio en valor.',
    },
    {
      icon: '⚙️',
      title: 'Procesamiento de materiales',
      description: 'Clasificación, trituración y transformación de materiales plásticos industriales.',
    },
    {
      icon: '🧪',
      title: 'Asesoría técnica',
      description: 'Selección de materiales según proceso productivo con acompañamiento especializado.',
    },
  ],
}

export const productsContent = {
  tag: 'Catálogo',
  title: 'Resinas plásticas para cada tipo de operación',
  subtitle: 'Ofrecemos materiales diseñados para adaptarse a distintos procesos industriales, garantizando rendimiento y disponibilidad.',
  categories: [
    {
      id: 'virgin',
      title: 'Material Virgen',
      subtitle: 'Resinas de alto desempeño para procesos exigentes',
      accent: 'blue',
      items: [
        { name: 'Polipropileno virgen (PP)', specs: 'MFI: 10-35 g/10min • Densidad: 0.90 g/cm³' },
        { name: 'Polietileno virgen (HDPE)', specs: 'MFI: 0.3-25 g/10min • Densidad: 0.94-0.96 g/cm³' },
        { name: 'Polietileno virgen (LDPE)', specs: 'MFI: 0.3-25 g/10min • Densidad: 0.91-0.93 g/cm³' },
        { name: 'Poliestireno virgen', specs: 'MFI: 3-30 g/10min • Impacto: Alto' },
      ],
      description: 'Materiales con especificaciones controladas para asegurar consistencia, calidad y estabilidad en producción.',
    },
    {
      id: 'recycled',
      title: 'Material Reciclado',
      subtitle: 'Optimiza costos sin comprometer tu operación',
      accent: 'green',
      items: [
        { name: 'Polietileno reciclado', specs: 'Post-industrial • Alta pureza' },
        { name: 'Polipropileno reciclado', specs: 'Post-industrial • Grado inyección' },
        { name: 'Mezclas industriales', specs: 'Formulaciones a medida • Multi-polímero' },
      ],
      description: 'Soluciones sustentables para aplicaciones donde el costo y volumen son clave.',
    },
    {
      id: 'custom',
      title: 'Material a la medida',
      subtitle: 'Desarrollo personalizado para tu proceso',
      accent: 'gradient',
      items: [
        { name: 'Desarrollo de mezclas personalizadas', specs: 'Según requerimientos específicos' },
        { name: 'Ajuste por aplicación', specs: 'Optimización de propiedades mecánicas' },
        { name: 'Optimización según proceso', specs: 'Inyección • Extrusión • Soplado' },
      ],
      description: 'Formulamos materiales específicos según los requerimientos de tu proceso productivo.',
    },
  ],
}

export const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Productos', path: '/productos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Industrias', path: '/industrias' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Sustentabilidad', path: '/sustentabilidad' },
  { label: 'Contacto', path: '/contacto' },
]
