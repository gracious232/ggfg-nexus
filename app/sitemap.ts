import type { MetadataRoute } from 'next';

const baseUrl = 'https://ggfgnexus.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/empower-50k',
    '/impact',
    '/partners',
    '/programs',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
