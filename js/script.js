/* Portfolio interactions — no external JavaScript libraries required. */
(() => {
  'use strict';
  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));

  function updateMenuLabel() {
    const t = window.portfolioT || (key => key);
    menuButton.setAttribute('aria-label', t(nav.classList.contains('is-open') ? 'nav.closeMenu' : 'nav.openMenu'));
  }
  function closeMenu() {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  }
  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    updateMenuLabel();
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) closeMenu();
  });

  // Highlight the current section without scrolling the page manually.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => {
        const selected = link.getAttribute('href') === '#' + visible.target.id;
        link.classList.toggle('is-active', selected);
        if (selected) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // GitHub Pages is static; mailto composes a draft instead of pretending to send it.
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    if (!name || !email || !message) return;
    const t = window.portfolioT || (key => key);
    const subject = encodeURIComponent(t('contact.mailSubject') + ' — ' + name);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    document.getElementById('formStatus').textContent = t('contact.opening');
    window.location.href = `mailto:muhammadyusufsani@gmail.com?subject=${subject}&body=${body}`;
  });
  window.addEventListener('portfolio:languagechange', () => {
    updateMenuLabel();
    const status = document.getElementById('formStatus');
    if (status) status.textContent = '';
  });
})();
