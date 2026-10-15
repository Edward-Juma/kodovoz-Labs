export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="/" aria-label="Kodovoz Labs home">
          <img src="/assets/kodovoz-logo.svg" alt="Kodovoz Labs" width={220} height={68} />
        </a>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
