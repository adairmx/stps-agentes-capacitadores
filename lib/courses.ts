export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Seguridad e Higiene en el Trabajo",
    description: "Curso fundamental sobre prevención de riesgos laborales y normativas de seguridad industrial.",
    duration: "20 horas",
    category: "Seguridad",
    level: "Básico"
  },
  {
    id: "2",
    title: "Primeros Auxilios en el Entorno Laboral",
    description: "Capacitación en técnicas de primeros auxilios y respuesta ante emergencias médicas.",
    duration: "16 horas",
    category: "Seguridad",
    level: "Básico"
  },
  {
    id: "3",
    title: "Uso y Manejo de Extintores",
    description: "Entrenamiento práctico en el uso adecuado de extintores y prevención de incendios.",
    duration: "8 horas",
    category: "Seguridad",
    level: "Básico"
  },
  {
    id: "4",
    title: "Trabajo en Alturas",
    description: "Capacitación especializada en seguridad para trabajos en altura y uso de equipos de protección.",
    duration: "24 horas",
    category: "Seguridad",
    level: "Intermedio"
  },
  {
    id: "5",
    title: "Manejo de Montacargas",
    description: "Curso teórico-práctico para operadores de montacargas con certificación STPS.",
    duration: "32 horas",
    category: "Operación",
    level: "Intermedio"
  },
  {
    id: "6",
    title: "Liderazgo y Trabajo en Equipo",
    description: "Desarrollo de habilidades de liderazgo y colaboración efectiva en equipos de trabajo.",
    duration: "20 horas",
    category: "Desarrollo Humano",
    level: "Intermedio"
  },
  {
    id: "7",
    title: "Comunicación Efectiva en el Trabajo",
    description: "Técnicas de comunicación asertiva y resolución de conflictos en el ámbito laboral.",
    duration: "16 horas",
    category: "Desarrollo Humano",
    level: "Básico"
  },
  {
    id: "8",
    title: "Gestión del Tiempo y Productividad",
    description: "Herramientas para optimizar el tiempo, aumentar la productividad y reducir el estrés laboral.",
    duration: "12 horas",
    category: "Desarrollo Humano",
    level: "Básico"
  },
  {
    id: "9",
    title: "Electricidad Industrial Básica",
    description: "Fundamentos de electricidad y seguridad eléctrica en ambientes industriales.",
    duration: "40 horas",
    category: "Técnico",
    level: "Intermedio"
  },
  {
    id: "10",
    title: "Soldadura Básica",
    description: "Introducción a técnicas de soldadura con seguridad y calidad en el trabajo.",
    duration: "40 horas",
    category: "Técnico",
    level: "Básico"
  },
  {
    id: "11",
    title: "Mantenimiento Preventivo de Equipos",
    description: "Procedimientos de mantenimiento preventivo para prolongar la vida útil de maquinaria.",
    duration: "24 horas",
    category: "Técnico",
    level: "Intermedio"
  },
  {
    id: "12",
    title: "Control de Calidad ISO 9001",
    description: "Principios de gestión de calidad y cumplimiento de normas ISO en procesos productivos.",
    duration: "32 horas",
    category: "Calidad",
    level: "Avanzado"
  },
  {
    id: "13",
    title: "5S - Metodología de Mejora Continua",
    description: "Implementación de la metodología 5S para optimización de espacios y procesos.",
    duration: "16 horas",
    category: "Calidad",
    level: "Intermedio"
  },
  {
    id: "14",
    title: "Manejo de Sustancias Químicas Peligrosas",
    description: "Capacitación en identificación, almacenamiento y manejo seguro de sustancias químicas.",
    duration: "20 horas",
    category: "Seguridad",
    level: "Avanzado"
  },
  {
    id: "15",
    title: "Atención al Cliente de Excelencia",
    description: "Desarrollo de habilidades para brindar un servicio al cliente de alta calidad.",
    duration: "16 horas",
    category: "Desarrollo Humano",
    level: "Básico"
  },
  {
    id: "16",
    title: "Gestión de Almacenes e Inventarios",
    description: "Técnicas de organización, control y optimización de almacenes e inventarios.",
    duration: "24 horas",
    category: "Logística",
    level: "Intermedio"
  }
];

export const categories = [
  "Seguridad",
  "Operación",
  "Desarrollo Humano",
  "Técnico",
  "Calidad",
  "Logística"
];
