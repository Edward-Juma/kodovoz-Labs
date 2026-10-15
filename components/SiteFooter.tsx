export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="/" aria-label="Kodovoz Labs home">
            <img src="/assets/kodovoz-logo.svg" alt="Kodovoz Labs" width={220} height={68} />
          </a>
          <p>Software engineering for ambitious teams.</p>
        </div>

        <div>
          <h4>Services</h4>
          <a href="/service/web-applications">Web applications</a>
          <a href="/service/mobile-apps">Mobile apps</a>
          <a href="/service/cloud-devops">Cloud &amp; DevOps</a>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="/about">About</a>
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/#faq">FAQ</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="mailto:kodovozlabs@gmail.com">kodovozlabs@gmail.com</a>
          <p>+254 799 514 830</p>
          <p>The Piano House, Brookside Drive, Nairobi</p>
        </div>
      </div>
    </footer>
  );
}
