import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ padding: '4rem 0 5rem', maxWidth: '900px' }}>
        <h1>Privacy Policy</h1>
        <p>
          Kodovoz Labs is committed to protecting personal data and handling it responsibly in line with the Kenya
          Data Protection Act, 2010.
        </p>
        <p>
          We collect personal information only where necessary to respond to enquiries, provide quotes, and support the
          delivery of our services.
        </p>
        <p>
          Information may include your name, email, phone number, company details and project information. We use this
          information only for the purpose for which it was provided and to meet our legal and operational obligations.
        </p>
        <p>
          We do not sell personal data. We may share it with trusted service providers or where required by law.
        </p>
        <p>
          If you want to make a data access or correction request, contact us at kodovozlabs@gmail.com.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
