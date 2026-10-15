export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  { slug: 'web-applications', title: 'Web applications', description: 'Fast, accessible platforms and dashboards built on modern stacks.' },
  { slug: 'mobile-apps', title: 'Mobile apps', description: 'Product experiences designed for iOS and Android audiences.' },
  { slug: 'cloud-devops', title: 'Cloud & DevOps', description: 'Cloud architecture, CI/CD, monitoring, and smart release workflows.' },
  { slug: 'ai-integration', title: 'AI integration', description: 'Practical features that reduce manual work and improve output quality.' },
  { slug: 'security-reviews', title: 'Security reviews', description: 'Threat modelling, hardening, and code audits before launch.' },
  { slug: 'product-design', title: 'Product design', description: 'Research-led UX and interface design to improve conversion and clarity.' }
];
