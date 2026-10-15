import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Software solutions for Kenyan businesses</p>
            <h1>We build software that grows your business.</h1>
            <p className="lead">
              Kodovoz Labs designs and engineers web products, mobile experiences, and cloud systems
              for teams that want a clear path from idea to launch.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Everything you need to launch and scale</h2>
            </div>
            <div className="card-grid">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
