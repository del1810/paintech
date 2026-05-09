/* ─────────────────────────────────────────────────────────
   PAINTECH Expo 2027 — Shared Components
   Injects <nav>, mobile-menu, and <footer> into every page.
───────────────────────────────────────────────────────── */

(function () {

    /* ── Detect active page ───────────────────────────── */
    const page = window.location.pathname.split('/').pop() || 'index.html';
    function isActive(href) {
        const h = href.split('/').pop();
        return (h === page || (page === '' && h === 'index.html')) ? ' class="active"' : '';
    }

    /* ── NAV HTML ─────────────────────────────────────── */
    const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a class="nav-logo" href="index.html">
      <img src="assets/images/paintech-logo.png" alt="PAINTECH Expo 2027" />
    </a>
    <ul class="nav-links">
      <li><a href="index.html"${isActive('index.html')}>Home</a></li>
      <li><a href="about.html"${isActive('about.html')}>About</a></li>
      <li><a href="insights.html"${isActive('insights.html')}>Insights</a></li>
      <li><a href="exhibitors.html"${isActive('exhibitors.html')}>Exhibitors</a></li>
      <li><a href="visitors.html"${isActive('visitors.html')}>Visitors</a></li>
      <li><a href="contact.html"${isActive('contact.html')}>Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="exhibitors.html" class="btn btn-outline btn-sm" data-testid="nav-book-stall">Book Stall</a>
      <a href="visitors.html"   class="btn btn-primary btn-sm" data-testid="nav-register">Register Now</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobile-menu">
  <button class="mobile-close" id="mobile-close" aria-label="Close menu">✕</button>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="insights.html">Insights</a>
  <a href="exhibitors.html">Exhibitors</a>
  <a href="visitors.html">Visitors</a>
  <a href="contact.html">Contact</a>
  <a href="exhibitors.html" class="btn btn-primary" style="margin-top:16px;">Book Your Stall</a>
</div>`;

    /* ── FOOTER HTML ──────────────────────────────────── */
    const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/images/paintech-logo.png" alt="PAINTECH Expo" />
        <p>India's Premier International Paint &amp; Coatings Technology Expo — Engineering the Future of Coatings.</p>
        <div class="footer-social">
          <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
          <a href="#" class="social-icon" aria-label="Twitter">𝕏</a>
          <a href="#" class="social-icon" aria-label="Instagram">ig</a>
          <a href="#" class="social-icon" aria-label="YouTube">▶</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Expo</a></li>
          <li><a href="insights.html">Industry Insights</a></li>
          <li><a href="exhibitors.html">Exhibitors</a></li>
          <li><a href="visitors.html">Visitors</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Participate</h4>
        <ul>
          <li><a href="exhibitors.html">Book Exhibition Space</a></li>
          <li><a href="visitors.html">Register to Visit</a></li>
          <li><a href="contact.html">Sponsorship</a></li>
          <li><a href="contact.html">Media Partners</a></li>
          <li><a href="contact.html">Association Partners</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="tel:+919500532234">+91 95005 32234</a></li>
          <li><a href="mailto:info@paintech.in">info@paintech.in</a></li>
          <li><a href="https://www.paintech.in" target="_blank" rel="noopener">www.paintech.in</a></li>
          <li><a href="contact.html">Chennai Trade Centre</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2027 PAINTECH Expo · Organised by <span>Fair Connects India (FCI)</span> · All Rights Reserved</p>
  </div>
</footer>`;

    /* ── Inject nav ───────────────────────────────────── */
    const navSlot = document.getElementById('site-nav');
    if (navSlot) navSlot.outerHTML = NAV_HTML;

    /* ── Inject footer ────────────────────────────────── */
    const footerSlot = document.getElementById('site-footer');
    if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

    /* ── Sticky nav behaviour ─────────────────────────── */
    document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.getElementById('navbar');
        const isHero = !!document.querySelector('.hero-section');

        if (navbar) {
            /* Home page starts transparent; all others start scrolled-style */
            if (isHero) {
                navbar.classList.add('transparent');
            } else {
                navbar.classList.add('dark-nav');
            }

            window.addEventListener('scroll', () => {
                if (window.scrollY > 40) {
                    navbar.classList.remove('transparent', 'dark-nav');
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                    if (isHero) navbar.classList.add('transparent');
                    else navbar.classList.add('dark-nav');
                }
            }, { passive: true });
        }

        /* Mobile menu */
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileClose = document.getElementById('mobile-close');

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
            if (mobileClose) mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
            mobileMenu.querySelectorAll('a').forEach(a =>
                a.addEventListener('click', () => mobileMenu.classList.remove('open'))
            );
        }
    });

})();
