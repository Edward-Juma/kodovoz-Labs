(() => {
  'use strict';

  const storageKey = 'kodovozTheme';
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    const isLight = theme === 'light';
    root.dataset.theme = isLight ? 'light' : 'dark';
    document.querySelectorAll('.logo__image, .loader__logo').forEach((logo) => {
      logo.src = isLight ? 'assets/kodovoz-logo.svg' : 'assets/kodovoz-logo-dark.svg';
    });
    themeButton.setAttribute('aria-pressed', String(isLight));
    themeButton.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    themeButton.title = `Switch to ${isLight ? 'dark' : 'light'} mode`;
    themeColor.setAttribute('content', isLight ? '#f4eee7' : '#120e0b');
  }

  applyTheme(root.dataset.theme || 'dark');
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Theme switching still works for this page when storage is unavailable.
    }
  });
})();
