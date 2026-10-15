import type { Service } from '@/lib/site-data';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div style={{ marginTop: '1rem' }}>
        <a href={`/service/${service.slug}`}>Explore service →</a>
      </div>
    </article>
  );
}
