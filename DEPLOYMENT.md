# Guía de Deployment y SEO

## 🚀 Deployment a Producción

### Configuración Previa

Antes de hacer el deployment, asegúrate de:

1. **Actualizar el dominio en los archivos:**
   - `app/layout.tsx` - Cambiar `metadataBase` URL
   - `app/sitemap.ts` - Cambiar `baseUrl`
   - `app/robots.ts` - Actualizar sitemap URL

2. **Configurar Google Search Console:**
   - Agregar el código de verificación en `app/layout.tsx` (campo `verification.google`)
   - Crear cuenta en [Google Search Console](https://search.google.com/search-console)
   - Agregar tu dominio
   - Verificar la propiedad
   - Enviar el sitemap: `https://tu-dominio.com/sitemap.xml`

3. **Google Analytics (Opcional):**
   - Crear cuenta en Google Analytics
   - Obtener ID de medición (G-XXXXXXXXXX)
   - Agregar script en `app/layout.tsx`

### Deployment en Vercel

1. **Conectar Repositorio:**
   ```bash
   # Desde Vercel Dashboard
   1. Click "Add New Project"
   2. Importar repositorio de GitHub
   3. Seleccionar "stps-agentes-capacitadores"
   ```

2. **Configuración:**
   - Framework Preset: Next.js (auto-detectado)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Variables de Entorno (si es necesario):**
   ```
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
   ```

4. **Dominio Personalizado:**
   - En Vercel Dashboard > Settings > Domains
   - Agregar tu dominio
   - Configurar DNS según instrucciones

### Deployment en Netlify

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Configurar netlify.toml:**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

## 🔍 Optimización SEO Post-Deployment

### 1. Verificación Inicial

Después del deployment, verifica:

- [ ] Sitemap accesible: `https://tu-dominio.com/sitemap.xml`
- [ ] Robots.txt accesible: `https://tu-dominio.com/robots.txt`
- [ ] Meta tags correctos en cada página (view source)
- [ ] Open Graph tags funcionando (prueba en Facebook Debugger)
- [ ] Schema.org datos correctos (prueba en Google Rich Results Test)

### 2. Herramientas de SEO

**Google Search Console:**
```
1. Verificar propiedad del sitio
2. Enviar sitemap
3. Solicitar indexación de páginas principales
4. Monitorear errores de crawling
5. Revisar Core Web Vitals
```

**Google Analytics:**
```
1. Configurar conversiones (formulario de contacto)
2. Configurar eventos personalizados
3. Monitorear páginas más visitadas
4. Analizar fuentes de tráfico
```

**Otras Herramientas:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 3. Estrategia de Contenido SEO

**Keywords Principales por Página:**

**Homepage:**
- agentes capacitadores STPS
- cursos STPS Bajío
- capacitación certificada STPS
- DC-3 STPS

**Página de Cursos:**
- cursos STPS certificados
- capacitación [categoría]
- [nombre del curso] STPS

**Páginas de Estados:**
- capacitación STPS [estado]
- cursos STPS [ciudad]
- agentes capacitadores [estado]

### 4. Link Building

**Directorios:**
- Google My Business
- Yelp
- Páginas Amarillas
- Directorios empresariales locales

**Redes Sociales:**
- Facebook Business Page
- LinkedIn Company Page
- Instagram Business
- YouTube (videos de cursos)

**Backlinks:**
- Artículos en blogs del sector
- Colaboraciones con cámaras de comercio
- Alianzas con universidades
- Certificaciones y membresías

### 5. Contenido Adicional (Futuro)

Para mejorar SEO, considera agregar:

**Blog:**
```
- Artículos sobre seguridad industrial
- Guías de cumplimiento STPS
- Casos de éxito
- Novedades del sector
```

**Recursos:**
```
- Descargables (checklists, guías)
- Videos educativos
- Infografías
- Webinars
```

## 📊 Monitoreo y Métricas

### Métricas Clave a Seguir:

**SEO:**
- Posición en Google para keywords principales
- Tráfico orgánico mensual
- Tasa de rebote
- Tiempo en sitio
- Páginas por sesión

**Conversión:**
- Formularios completados
- Llamadas telefónicas
- Clicks en WhatsApp
- Clicks en email

**Technical SEO:**
- Core Web Vitals (LCP, FID, CLS)
- Errores de crawling
- Cobertura de indexación
- Mobile usability

## 🔧 Mantenimiento

### Mensual:
- Revisar Google Search Console
- Actualizar contenido si hay cambios
- Verificar enlaces rotos
- Revisar velocidad del sitio

### Trimestral:
- Actualizar keywords según tendencias
- Agregar nuevo contenido/cursos
- Revisar competencia
- Optimizar conversiones

## 📱 Local SEO

Para mejorar posicionamiento local:

1. **Google My Business:**
   - Crear perfil completo
   - Agregar fotos
   - Recopilar reseñas
   - Publicar actualizaciones

2. **Directorios Locales:**
   - Registrarse en directorios de cada estado
   - Mantener información consistente (NAP: Name, Address, Phone)

3. **Schema Local Business:**
   - Ya está implementado en el código
   - Actualizar con datos reales cuando estén disponibles

## 🎯 Checklist de Lanzamiento

- [ ] Dominio configurado y SSL activo
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a Google
- [ ] Google Analytics configurado
- [ ] Google My Business creado
- [ ] Meta tags verificados en todas las páginas
- [ ] Velocidad del sitio > 90 en Lighthouse
- [ ] Mobile-friendly test aprobado
- [ ] Structured data sin errores
- [ ] Todos los enlaces funcionando
- [ ] Formulario de contacto probado
- [ ] Redes sociales enlazadas

## 📞 Próximos Pasos

1. **Actualizar información de contacto real** en `app/contacto/page.tsx`
2. **Configurar formulario funcional** (integrar con email o CRM)
3. **Agregar Google Analytics** para tracking
4. **Crear contenido para blog** (opcional pero recomendado)
5. **Configurar WhatsApp Business API**
6. **Obtener backlinks de calidad**

---

Para cualquier duda sobre SEO o deployment, consulta la [documentación de Next.js](https://nextjs.org/docs/deployment).
