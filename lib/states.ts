export interface State {
  id: string;
  name: string;
  slug: string;
  description: string;
  cities: string[];
}

export const bajioStates: State[] = [
  {
    id: "1",
    name: "Guanajuato",
    slug: "guanajuato",
    description: "Servicios de capacitación STPS en todo el estado de Guanajuato. Cobertura en León, Irapuato, Celaya, Salamanca y más ciudades.",
    cities: [
      "León",
      "Irapuato",
      "Celaya",
      "Salamanca",
      "Guanajuato Capital",
      "San Miguel de Allende",
      "Silao",
      "San Francisco del Rincón",
      "Pénjamo",
      "Valle de Santiago"
    ]
  },
  {
    id: "2",
    name: "Querétaro",
    slug: "queretaro",
    description: "Agentes capacitadores certificados en Querétaro. Atendemos empresas en la capital y municipios circundantes.",
    cities: [
      "Santiago de Querétaro",
      "San Juan del Río",
      "Corregidora",
      "El Marqués",
      "Tequisquiapan",
      "Cadereyta de Montes"
    ]
  },
  {
    id: "3",
    name: "Aguascalientes",
    slug: "aguascalientes",
    description: "Capacitación empresarial certificada STPS en Aguascalientes. Cursos para industria automotriz y manufactura.",
    cities: [
      "Aguascalientes Capital",
      "Jesús María",
      "Calvillo",
      "Rincón de Romos",
      "Pabellón de Arteaga"
    ]
  },
  {
    id: "4",
    name: "San Luis Potosí",
    slug: "san-luis-potosi",
    description: "Servicios de capacitación STPS en San Luis Potosí. Atención a empresas en la zona industrial y comercial.",
    cities: [
      "San Luis Potosí Capital",
      "Soledad de Graciano Sánchez",
      "Ciudad Valles",
      "Matehuala",
      "Rioverde"
    ]
  },
  {
    id: "5",
    name: "Jalisco (Zona Bajío)",
    slug: "jalisco",
    description: "Cobertura en la región del Bajío de Jalisco. Capacitación STPS para empresas en Lagos de Moreno y zonas aledañas.",
    cities: [
      "Lagos de Moreno",
      "San Juan de los Lagos",
      "Tepatitlán",
      "Arandas",
      "La Barca"
    ]
  }
];
