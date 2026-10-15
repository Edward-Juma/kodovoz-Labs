import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ padding: '4rem 0 5rem' }}>
        <h1>About Kodovoz Labs</h1>
        <p className="lead">
          Kodovoz Labs is a product engineering studio helping teams design, build, and scale digital products.
        </p>
        <p>
          We combine product strategy, design, software engineering, and cloud delivery so that ambitious teams can
          move faster without sacrificing quality or accountability.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
