/* ─── PAINTECH Expo 2027 — Main JS ─── */
/* Nav, mobile menu, and footer are handled by components.js  */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Scroll Reveal ────────────────────────── */
    window.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => window.scrollObserver.observe(el));

    /* ── Counter Animation ────────────────────── */
    function animateCounter(el, target, suffix = '') {
        const duration = 1800;
        const startTime = performance.now();
        const isDecimal = target % 1 !== 0;
        function update(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = isDecimal ? value.toFixed(1) + suffix : Math.floor(value) + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = 'true';
                const target = parseFloat(entry.target.dataset.target);
                const suffix = entry.target.dataset.suffix || '';
                animateCounter(entry.target, target, suffix);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

    /* ── Contact / Registration Form ─────────── */
    const form = document.querySelector('#enquiry-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('[type="submit"]');
            const success = document.querySelector('.form-success');
            const original = btn.textContent;
            btn.textContent = 'Sending…';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = '✓ Sent!';
                if (success) success.style.display = 'block';
                form.reset();
                setTimeout(() => {
                    btn.textContent = original;
                    btn.disabled = false;
                    if (success) success.style.display = 'none';
                }, 4000);
            }, 1200);
        });
    }

    /* ── Info Strip — duplicate for seamless marquee */
    const strip = document.querySelector('.info-strip-inner');
    if (strip) strip.innerHTML += strip.innerHTML;

});
