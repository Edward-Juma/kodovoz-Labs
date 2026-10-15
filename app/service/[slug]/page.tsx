import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { services } from '@/lib/site-data';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="container" style={{ padding: '4rem 0 5rem' }}>
        <p className="eyebrow">Service</p>
        <h1>{service.title}</h1>
        <p className="lead">{service.description}</p>
        <p>
          This service is designed to help businesses launch faster, improve product quality, and reduce delivery risk.
          We combine strategy, design, engineering, and communication into one clear process.
        </p>
        <h2>What is included</h2>
        <ul>
          <li>Discovery and planning</li>
          <li>Design and user flow definition</li>
          <li>Build and testing</li>
          <li>Launch support and documentation</li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
