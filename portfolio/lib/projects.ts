export interface Project {
  id: string
  title: string
  category: string
  year: number
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'vimaan',
    title: 'Vimaan',
    category: 'App Design',
    year: 2026,
    description:
      'Thai inclusive community platform featuring Gay-Goggle Effect, 4 Houses system, and AI-powered interactions',
    image: '/projects/vimaan.jpg',
    tags: ['Community', 'Next.js', 'AI', 'Mobile'],
  },
  {
    id: 'greentein',
    title: 'Greentein',
    category: 'Branding',
    year: 2025,
    description:
      'Sustainable eco-packaging brand with innovative 3-Petal Dome Closure design (Patent Pending)',
    image: '/projects/greentein.jpg',
    tags: ['Sustainability', 'Product Design', 'Branding'],
  },
  {
    id: 'export',
    title: 'Thai Export Co.',
    category: 'Business',
    year: 2025,
    description:
      'Export business strategy and brand identity for Thai-Laos trade operations',
    image: '/projects/export.jpg',
    tags: ['Strategy', 'B2B', 'International'],
  },
]
