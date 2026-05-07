/* ============================
   Content Data Proxy
   (Wix Headless ready)
   ============================ */

export const siteConfig = {
  companyName: 'DESPERDICIOS INDUSTRIALES CAKYN SA DE CV',
  brandShort: 'CAKYN',
  tagline: 'Materia prima inteligente para la industria',
  phone: '+525500000000',
  email: 'contacto@industrialescakyn.com',
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
    icon: 'Hexagon',
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
    icon: 'Recycle',
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
      icon: 'Zap',
      title: 'Suministro constante',
      description: 'Garantizamos disponibilidad continua para que tu línea de producción nunca se detenga.',
    },
    {
      icon: 'TrendingDown',
      title: 'Reducción de costos',
      description: 'Optimiza tu presupuesto de materia prima con nuestras alternativas recicladas de alta calidad.',
    },
    {
      icon: 'Wrench',
      title: 'Alternativas por proceso',
      description: 'Te asesoramos para seleccionar el material ideal según tu método de manufactura.',
    },
    {
      icon: 'TestTube',
      title: 'Asesoría técnica',
      description: 'Equipo especializado que entiende los requerimientos técnicos de cada industria.',
    },
    {
      icon: 'Package',
      title: 'Flexibilidad en volúmenes',
      description: 'Desde lotes pequeños hasta contratos de suministro a gran escala.',
    },
    {
      icon: 'Leaf',
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
      icon: 'Factory',
      features: ['Alta fluidez', 'Consistencia térmica', 'Acabado superficial'],
    },
    {
      id: 'extrusion',
      title: 'Extrusión',
      description: 'Materiales formulados para líneas de extrusión continua con estabilidad de proceso garantizada.',
      icon: 'Settings',
      features: ['Estabilidad de proceso', 'Uniformidad', 'Rendimiento constante'],
    },
    {
      id: 'blowmolding',
      title: 'Soplado',
      description: 'Polímeros seleccionados para soplado de envases y contenedores con excelente resistencia.',
      icon: 'Droplets',
      features: ['Resistencia al impacto', 'Transparencia', 'Barrera química'],
    },
  ],
}

export const industriesContent = {
  tag: 'Sectores',
  title: 'Sectores que atendemos',
  subtitle: 'Trabajamos con industrias que requieren calidad constante, optimización de costos y flexibilidad.',
  sectors: [
    { id: 'packaging', title: 'Empaques y envases', icon: 'Package', description: 'Resinas para envases alimenticios, industriales y de consumo con certificaciones.' },
    { id: 'automotive', title: 'Automotriz', icon: 'Car', description: 'Materiales de alto rendimiento para componentes automotrices y autopartes.' },
    { id: 'construction', title: 'Construcción', icon: 'HardHat', description: 'Polímeros para tuberías, perfiles y materiales de construcción duraderos.' },
    { id: 'electronics', title: 'Electrónica', icon: 'Cpu', description: 'Resinas técnicas para carcasas, conectores y componentes electrónicos.' },
    { id: 'textile', title: 'Textil', icon: 'Scissors', description: 'Materiales base para fibras sintéticas y aplicaciones textiles industriales.' },
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
  heroHeadline: 'Más que resina,\nsomos industria.',
  heroSub: 'Desde hace más de 15 años transformamos la cadena de suministro de resinas plásticas en México. Operamos en la intersección de calidad industrial, innovación circular y compromiso con cada línea de producción.',
  description: 'Somos una empresa mexicana enfocada en el suministro y reciclaje de materiales plásticos para la industria, comprometida con la eficiencia productiva y la sustentabilidad.',
  capacity: [
    { value: 500, suffix: '+', label: 'Toneladas / mes', detail: 'Capacidad de procesamiento' },
    { value: 3500, suffix: '', label: 'm² operativos', detail: 'Planta industrial' },
    { value: 4, suffix: '', label: 'Líneas de extrusión', detail: 'Producción continua' },
    { value: 24, suffix: 'h', label: 'Tiempo de respuesta', detail: 'Cotización garantizada' },
  ],
  timeline: [
    { year: '2008', title: 'Fundación', img: '/images/timeline/2008.png', desc: 'CAKYN inicia operaciones en la Ciudad de México como comercializadora de materiales plásticos industriales, atendiendo a pequeños y medianos transformadores.' },
    { year: '2011', title: 'Primera planta propia', img: '/images/timeline/2011.png', desc: 'Se inaugura la primera planta de procesamiento con capacidad de molienda y clasificación de scrap plástico post-industrial.' },
    { year: '2014', title: 'Línea de reciclaje', img: '/images/timeline/2014.png', desc: 'Incorporación de la primera línea de extrusión para peletizado de materiales reciclados, ampliando la oferta a resinas de segunda vida.' },
    { year: '2017', title: 'Expansión regional', img: '/images/timeline/2017.png', desc: 'Se consolida la red de distribución nacional cubriendo Bajío, Monterrey y Guadalajara. Se duplica la capacidad instalada.' },
    { year: '2020', title: 'Laboratorio de calidad', img: '/images/timeline/2020.png', desc: 'Implementación de laboratorio interno para control de MFI, densidad y pruebas de impacto, elevando los estándares de cada lote.' },
    { year: '2023', title: 'Material a la medida', img: '/images/timeline/2023.png', desc: 'Lanzamiento de la división de formulaciones personalizadas, desarrollando mezclas específicas para procesos de inyección, extrusión y soplado.' },
  ],
  mission: {
    title: 'Misión',
    text: 'Transformar y suministrar materia prima plástica que impulse la productividad de nuestros clientes, garantizando calidad constante, precios competitivos y un compromiso real con la economía circular.',
  },
  vision: {
    title: 'Visión',
    text: 'Ser el referente nacional en soluciones de materiales plásticos, reconocidos por la excelencia técnica, la innovación sustentable y la confiabilidad de cada entrega.',
  },
  values: [
    { icon: 'Star', title: 'Calidad', description: 'Cada lote pasa por control de laboratorio antes de salir de planta. Sin excepciones.' },
    { icon: 'Handshake', title: 'Compromiso', description: 'Tu línea de producción es nuestra prioridad. Cumplimos fechas, volúmenes y especificaciones.' },
    { icon: 'Recycle', title: 'Sustentabilidad', description: 'Economía circular en cada proceso. Transformamos residuos en recursos productivos.' },
    { icon: 'Lightbulb', title: 'Innovación', description: 'Mejora continua: desarrollamos formulaciones y optimizamos materiales para cada cliente.' },
  ],
}

export const sustainabilityContent = {
  tag: 'Impacto ambiental',
  title: 'Compromiso ambiental',
  heroHeadline: 'Convertimos residuos\nen recursos.',
  heroSub: 'Cada tonelada de plástico que reciclamos es una tonelada menos en rellenos sanitarios. Operamos un modelo de economía circular que beneficia a la industria y al planeta.',
  keyPhrase: 'Convertimos residuos en recursos productivos',
  process: [
    { step: '01', title: 'Recolección', desc: 'Adquisición de scrap plástico post-industrial de más de 200 fuentes verificadas en todo México.', icon: 'Truck' },
    { step: '02', title: 'Clasificación', desc: 'Separación por tipo de polímero, color y grado de contaminación en nuestra planta de clasificación.', icon: 'Search' },
    { step: '03', title: 'Trituración', desc: 'Molienda controlada para obtener hojuelas uniformes con tamaño de partícula consistente.', icon: 'Settings' },
    { step: '04', title: 'Extrusión', desc: 'Peletizado mediante extrusión a temperatura controlada para obtener resina reciclada de alta calidad.', icon: 'Flame' },
    { step: '05', title: 'Control de calidad', desc: 'Cada lote se analiza en laboratorio: MFI, densidad, color y pruebas mecánicas antes de la entrega.', icon: 'Microscope' },
    { step: '06', title: 'Reintegración', desc: 'El material vuelve al ciclo productivo como materia prima funcional para inyección, extrusión o soplado.', icon: 'Recycle' },
  ],
  pillars: [
    { icon: 'Trash2', title: 'Reducción de residuos', description: 'Procesamos residuos plásticos industriales para darles nueva vida útil en la cadena productiva.' },
    { icon: 'Repeat', title: 'Economía circular', description: 'Reintegramos materiales al ciclo productivo, reduciendo la dependencia de resinas vírgenes.' },
    { icon: 'RefreshCw', title: 'Reintegración', description: 'Transformamos scrap en materia prima funcional con especificaciones técnicas verificables.' },
    { icon: 'Globe', title: 'Impacto positivo', description: 'Cada tonelada reciclada reduce la huella de carbono equivalente a 2.5 toneladas de CO₂.' },
  ],
  metrics: [
    { value: 1200, suffix: 'T', label: 'Toneladas recicladas / año', detail: 'Plástico post-industrial procesado' },
    { value: 840, suffix: 'T', label: 'CO₂ evitado / año', detail: 'Emisiones reducidas vs. virgen' },
    { value: 75, suffix: '%', label: 'Material reintegrado', detail: 'Tasa de reintegración al mercado' },
    { value: 200, suffix: '+', label: 'Fuentes de scrap', detail: 'Proveedores industriales activos' },
  ],
  commitment: 'No hacemos greenwashing. Cada dato de impacto que publicamos está respaldado por nuestros registros de producción y el control de laboratorio de cada lote procesado.',
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
  heroHeadline: 'No solo vendemos\nresina.',
  heroSub: 'Somos socios estratégicos de tu línea de producción. Desde el suministro hasta la asesoría técnica, cada servicio está diseñado para mantener tu operación funcionando sin interrupciones.',
  services: [
    {
      icon: 'Factory',
      title: 'Suministro de resinas vírgenes',
      description: 'Entrega constante de PP, HDPE, LDPE y PS virgen con especificaciones técnicas claras para tus procesos más exigentes. Trabajamos con proveedores certificados para garantizar consistencia lote a lote.',
      features: ['Certificados de origen', 'Fichas técnicas por lote', 'Entregas programadas'],
    },
    {
      icon: 'Recycle',
      title: 'Suministro de resinas recicladas',
      description: 'Alternativas rentables y sustentables procesadas en nuestra planta. Cada lote de material reciclado pasa por control de calidad antes de salir a tu línea de producción.',
      features: ['Control MFI y densidad', 'Hasta 40% ahorro vs. virgen', 'Grado inyección disponible'],
    },
    {
      icon: 'Inbox',
      title: 'Compra de scrap plástico',
      description: 'Adquirimos tus residuos plásticos industriales y los transformamos en materia prima. Convertimos tu desperdicio en un ingreso para tu operación.',
      features: ['Recolección en planta', 'Cotización inmediata', 'Todo tipo de polímero'],
    },
    {
      icon: 'Settings',
      title: 'Procesamiento de materiales',
      description: 'Servicio integral de clasificación, trituración y peletizado. Si tienes material que necesita ser procesado, lo hacemos por ti con estándares industriales.',
      features: ['Molienda controlada', 'Peletizado por extrusión', 'Mezclado a especificación'],
    },
    {
      icon: 'TestTube',
      title: 'Asesoría técnica',
      description: 'Nuestro equipo te ayuda a seleccionar el material ideal según tu proceso productivo. Optimizamos costo, rendimiento y sustentabilidad en cada recomendación.',
      features: ['Análisis de compatibilidad', 'Pruebas en laboratorio', 'Acompañamiento continuo'],
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
