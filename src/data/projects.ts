import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'ATLAS Dashboard',
    description:
      'Real-time analytics dashboard con visualizzazioni interattive. Stack React, D3.js e WebSocket per streaming dati live.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'HERMES API Gateway',
    description:
      'Gateway API ad alte prestazioni con rate limiting, caching e autenticazione JWT. Architettura microservizi.',
    tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'CORTEX CMS',
    description:
      'Content management system headless con editor WYSIWYG, versioning e API GraphQL.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'NEXUS CLI',
    description:
      'Tool CLI per scaffolding progetti con template personalizzabili e configurazione interattiva.',
    tags: ['Node.js', 'TypeScript', 'Commander'],
    github: 'https://github.com',
  },
];
