# stps-agentes-capacitadores

Sitio web moderno, robusto y optimizado para SEO de servicios de capacitación de agentes certificados ante STPS.

## 🚀 Características

- **SEO Optimizado**: Meta tags completos, sitemap.xml, robots.txt, y structured data (Schema.org)
- **Rendimiento**: Built con Next.js 16 para máxima velocidad y optimización
- **Responsive**: Diseño adaptable a todos los dispositivos (móvil, tablet, desktop)
- **16 Cursos**: Catálogo completo de cursos certificados STPS en 6 categorías
- **Cobertura Regional**: Páginas dedicadas para 5 estados del Bajío con más de 35 ciudades
- **Modern Stack**: TypeScript, Tailwind CSS, React

## 🛠️ Tecnologías

- [Next.js 16](https://nextjs.org/) - Framework React con SSR/SSG
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - UI Library

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/adairmx/stps-agentes-capacitadores.git

# Entrar al directorio
cd stps-agentes-capacitadores

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Comandos

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en puerto 3000

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
stps-agentes-capacitadores/
├── app/                      # Next.js App Router
│   ├── contacto/            # Página de contacto
│   ├── cursos/              # Página de cursos
│   ├── estados/             # Páginas de cobertura por estado
│   │   └── [slug]/          # Páginas dinámicas por estado
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página principal
│   ├── robots.ts            # Configuración robots.txt
│   └── sitemap.ts           # Generación de sitemap
├── components/              # Componentes React reutilizables
│   ├── Footer.tsx
│   └── Header.tsx
├── lib/                     # Utilidades y datos
│   ├── courses.ts           # Datos de cursos
│   └── states.ts            # Datos de estados
├── public/                  # Archivos estáticos
├── next.config.js           # Configuración Next.js
├── tailwind.config.ts       # Configuración Tailwind
└── tsconfig.json            # Configuración TypeScript
```

## 🎯 SEO Features

- ✅ Meta tags optimizados para cada página
- ✅ Open Graph y Twitter Cards
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Structured Data (JSON-LD) para Schema.org
- ✅ URLs amigables y descriptivas
- ✅ Páginas estáticas pre-renderizadas (SSG)
- ✅ Optimización de imágenes con Next.js Image
- ✅ Keywords específicos por región

## 🌎 Cobertura

El sitio cubre 5 estados del Bajío Mexicano:

- **Guanajuato**: León, Irapuato, Celaya, Salamanca, y más
- **Querétaro**: Santiago de Querétaro, San Juan del Río, Corregidora, y más
- **Aguascalientes**: Aguascalientes Capital, Jesús María, Calvillo, y más
- **San Luis Potosí**: San Luis Potosí Capital, Soledad, Ciudad Valles, y más
- **Jalisco**: Lagos de Moreno, San Juan de los Lagos, Tepatitlán, y más

## 📚 Cursos

16 cursos certificados en 6 categorías:

- **Seguridad**: Seguridad e Higiene, Primeros Auxilios, Extintores, Trabajo en Alturas, Sustancias Químicas
- **Desarrollo Humano**: Liderazgo, Comunicación Efectiva, Gestión del Tiempo, Atención al Cliente
- **Técnico**: Electricidad Industrial, Soldadura, Mantenimiento Preventivo
- **Operación**: Manejo de Montacargas
- **Calidad**: Control de Calidad ISO 9001, Metodología 5S
- **Logística**: Gestión de Almacenes e Inventarios

## 🚀 Deployment

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adairmx/stps-agentes-capacitadores)

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Deploy automático en cada push a main

### Otras Plataformas

El sitio puede desplegarse en cualquier plataforma que soporte Next.js:

- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 📝 Personalización

### Actualizar Información de Contacto

Edita `app/contacto/page.tsx` para actualizar:
- Números de teléfono
- Emails
- Enlaces a redes sociales

### Agregar/Modificar Cursos

Edita `lib/courses.ts` para agregar o modificar cursos.

### Agregar/Modificar Estados/Ciudades

Edita `lib/states.ts` para agregar o modificar cobertura regional.

### Cambiar Colores

Edita `tailwind.config.ts` para personalizar la paleta de colores.

## 📄 Licencia

ISC

## 👤 Autor

Agentes Capacitadores STPS

---

Desarrollado con ❤️ para ofrecer el mejor servicio de capacitación STPS en el Bajío Mexicano.

