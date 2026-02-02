import { MetadataRoute } from 'next'
import { bajioStates } from '@/lib/states'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stps-agentes-capacitadores.com'
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cursos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/estados`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // State pages
  const statePages = bajioStates.map((state) => ({
    url: `${baseUrl}/estados/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...mainPages, ...statePages]
}
