/* ─────────────────────────────────────────────────────────
   PAINTECH Expo 2027 — Shared Components
   Injects <nav>, mobile-menu, download modal, and <footer>.
───────────────────────────────────────────────────────── */

(function () {

    /* ── Configurable Download & Popup Settings ───────── */
    const DOWNLOAD_CONFIG = {
        recipientEmail: 'sales@paintech.in',
        emailjs: {
            serviceId: 'service_sales@paintech',                      // EmailJS Dashboard -> Email Services
            templateId: 'template_gkf8k8b',                           // EmailJS Template ID -> Download Lead Popup
            visitorTemplateId: 'template_r7pwygl',                    // Shared EmailJS Template ID -> Visitor, Space Booking & Sponsor
            spaceBookingTemplateId: 'template_r7pwygl',               // Uses same shared template (template_r7pwygl)
            sponsorTemplateId: 'template_r7pwygl',                    // Uses same shared template (template_r7pwygl)
            publicKey: 'wfK0UO9y9heFyIIB_'                            // EmailJS Dashboard -> Account -> Public Key
        },
        enableNavbarPopup: true, // Set to false to bypass popup when clicking from Navbar dropdown
        items: {
            'brochure': {
                title: 'Brochure',
                pdfUrl: 'assets/pdfs/brochure.pdf',
                fileName: 'PAINTECH-Expo-2027-Brochure.pdf',
                requireForm: true
            },
            'floor-plan': {
                title: 'Floor Plan',
                pdfUrl: 'assets/pdfs/floor-plan.pdf',
                fileName: 'PAINTECH-Expo-2027-Floor-Plan.pdf',
                requireForm: true
            },
            'space-booking-form': {
                title: 'Space Booking Form',
                pdfUrl: 'assets/pdfs/space-booking-form.pdf',
                fileName: 'PAINTECH-Expo-2027-Space-Booking-Form.pdf',
                requireForm: true
            }
        }
    };
    window.PAINTECH_DOWNLOAD_CONFIG = DOWNLOAD_CONFIG;

    /* ── Detect active page ───────────────────────────── */
    const page = window.location.pathname.split('/').pop() || 'index.html';
    function isActive(href) {
        const h = href.split('/').pop();
        return (h === page || (page === '' && h === 'index.html')) ? ' class="active"' : '';
    }
    function isActiveClass(href) {
        const h = href.split('/').pop();
        return (h === page || (page === '' && h === 'index.html')) ? ' active' : '';
    }

    /* ── Shared Social Media Links ────────────────────── */
    const SOCIAL_LINKS_HTML = `
      <a href="https://www.linkedin.com/in/paintech-expo-10ab4740a/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="https://www.instagram.com/paintechexpo/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.facebook.com/profile.php?id=61589505370504" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="https://x.com/Paintechfaircon" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="https://www.youtube.com/@FairConnectsIndia" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>`;

    /* ── NAV HTML ─────────────────────────────────────── */
    const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a class="nav-logo" href="index.html">
      <img src="assets/images/paintech-logo.png" alt="PAINTECH Expo 2027" class="nav-main-logo" />
      <span class="nav-logo-divider" aria-hidden="true"></span>
      <img src="assets/images/isp.png" alt="ISP Logo" class="nav-sponsor-logo" />
    </a>
    <ul class="nav-links">
      <li><a href="index.html"${isActive('index.html')}>Home</a></li>
      <li><a href="about.html"${isActive('about.html')}>About</a></li>
      <li><a href="insights.html"${isActive('insights.html')}>Insights</a></li>
      <li><a href="exhibitors.html"${isActive('exhibitors.html')}>Exhibitors</a></li>
      <li><a href="visitors.html"${isActive('visitors.html')}>Visitors</a></li>
      <li class="nav-dropdown">
        <a href="downloads.html" class="nav-dropdown-toggle${isActiveClass('downloads.html')}" aria-haspopup="true" aria-expanded="false">
          Download <i class="fa-solid fa-chevron-down nav-dropdown-arrow"></i>
        </a>
        <ul class="nav-dropdown-menu" aria-label="Download options">
          <li>
            <a href="assets/pdfs/brochure.pdf" download="PAINTECH-Expo-2027-Brochure.pdf" data-download-key="brochure" data-source="navbar">
              <i class="fa-solid fa-file-pdf"></i> Brochure
            </a>
          </li>
          <li>
            <a href="assets/pdfs/floor-plan.pdf" download="PAINTECH-Expo-2027-Floor-Plan.pdf" data-download-key="floor-plan" data-source="navbar">
              <i class="fa-solid fa-map-location-dot"></i> Floor Plan
            </a>
          </li>
          <li>
            <a href="assets/pdfs/space-booking-form.pdf" download="PAINTECH-Expo-2027-Space-Booking-Form.pdf" data-download-key="space-booking-form" data-source="navbar">
              <i class="fa-solid fa-file-signature"></i> Space Booking Form
            </a>
          </li>
        </ul>
      </li>
      <li><a href="contact.html"${isActive('contact.html')}>Contact</a></li>
    </ul>
    <div class="nav-actions">${SOCIAL_LINKS_HTML}
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
  <div class="mobile-dropdown">
    <div class="mobile-dropdown-header">
      <a href="downloads.html" class="mobile-dropdown-link">Download</a>
      <button class="mobile-dropdown-toggle" type="button" aria-label="Toggle download options" aria-expanded="false">
        <i class="fa-solid fa-chevron-down nav-dropdown-arrow"></i>
      </button>
    </div>
    <div class="mobile-dropdown-menu">
      <a href="assets/pdfs/brochure.pdf" download="PAINTECH-Expo-2027-Brochure.pdf" data-download-key="brochure" data-source="navbar"><i class="fa-solid fa-file-pdf"></i> Brochure</a>
      <a href="assets/pdfs/floor-plan.pdf" download="PAINTECH-Expo-2027-Floor-Plan.pdf" data-download-key="floor-plan" data-source="navbar"><i class="fa-solid fa-map-location-dot"></i> Floor Plan</a>
      <a href="assets/pdfs/space-booking-form.pdf" download="PAINTECH-Expo-2027-Space-Booking-Form.pdf" data-download-key="space-booking-form" data-source="navbar"><i class="fa-solid fa-file-signature"></i> Space Booking Form</a>
    </div>
  </div>
  <a href="contact.html">Contact</a>
  <div class="mobile-social">${SOCIAL_LINKS_HTML}
  </div>
</div>`;

    /* ── DOWNLOAD POPUP MODAL HTML ────────────────────── */
    const DOWNLOAD_MODAL_HTML = `
<div class="dl-modal-overlay" id="download-lead-modal" aria-hidden="true">
  <div class="dl-modal-card" role="dialog" aria-modal="true" aria-labelledby="dl-modal-title">
    <button type="button" class="dl-modal-close" id="dl-modal-close" aria-label="Close modal">✕</button>
    <div class="dl-modal-header">
      <span class="badge badge-grad" id="dl-modal-badge">Download Resource</span>
      <h3 id="dl-modal-title">Download Brochure</h3>
      <p>Select one or more resources below and fill in your details to download in one go.</p>
    </div>
    <form id="dl-lead-form" class="dl-modal-form" novalidate>
      <input type="hidden" id="dl-doc-key" value="brochure" />
      <div class="dl-doc-selector">
        <div class="dl-doc-selector-head">
          <label>Documents to Download *</label>
          <button type="button" class="dl-select-all-btn" id="dl-select-all-btn">Deselect All</button>
        </div>
        <div class="dl-doc-chips" id="dl-doc-chips">
          <label class="dl-doc-chip checked">
            <input type="checkbox" name="dl_docs" value="brochure" checked />
            <i class="fa-solid fa-file-pdf"></i>
            <span>Brochure</span>
          </label>
          <label class="dl-doc-chip checked">
            <input type="checkbox" name="dl_docs" value="floor-plan" checked />
            <i class="fa-solid fa-map-location-dot"></i>
            <span>Floor Plan</span>
          </label>
          <label class="dl-doc-chip checked">
            <input type="checkbox" name="dl_docs" value="space-booking-form" checked />
            <i class="fa-solid fa-file-signature"></i>
            <span>Space Booking Form</span>
          </label>
        </div>
        <small class="dl-field-error" id="err-dl-docs"></small>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="dl-name">Name *</label>
          <input type="text" id="dl-name" name="Name" placeholder="Your full name" required />
          <small class="dl-field-error" id="err-dl-name"></small>
        </div>
        <div class="form-group">
          <label for="dl-company">Company Name *</label>
          <input type="text" id="dl-company" name="Company Name" placeholder="Your company name" required />
          <small class="dl-field-error" id="err-dl-company"></small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="dl-mobile">Mobile *</label>
          <input type="tel" id="dl-mobile" name="Mobile" placeholder="+91 98765 43210" maxlength="16" required />
          <small class="dl-field-error" id="err-dl-mobile"></small>
        </div>
        <div class="form-group">
          <label for="dl-email">Email *</label>
          <input type="email" id="dl-email" name="Email" placeholder="you@company.com" required />
          <small class="dl-field-error" id="err-dl-email"></small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="dl-website">Website <span style="font-weight:400; color:var(--muted);">(Optional)</span></label>
          <input type="text" id="dl-website" name="Website" placeholder="www.yourcompany.com" />
          <small class="dl-field-error" id="err-dl-website"></small>
        </div>
        <div class="form-group">
          <label for="dl-business">Business Line *</label>
          <input type="text" id="dl-business" name="Business Line" placeholder="e.g. Coatings, Raw Materials, Machinery" required />
          <small class="dl-field-error" id="err-dl-business"></small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="dl-exhibit">Want to Exhibit? *</label>
          <select id="dl-exhibit" name="Want to Exhibit?" required>
            <option value="" disabled selected>Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe / Need Info</option>
          </select>
          <small class="dl-field-error" id="err-dl-exhibit"></small>
        </div>
        <div class="form-group">
          <label for="dl-visit">Want to Visit? *</label>
          <select id="dl-visit" name="Want to Visit?" required>
            <option value="" disabled selected>Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe / Need Info</option>
          </select>
          <small class="dl-field-error" id="err-dl-visit"></small>
        </div>
      </div>
      <button type="submit" class="btn btn-primary dl-submit-btn" id="dl-submit-btn">
        <i class="fa-solid fa-download"></i> <span>Submit &amp; Download PDF</span>
      </button>
      <div class="dl-form-status" id="dl-form-status"></div>
    </form>
  </div>
</div>`;

    /* ── FOOTER HTML ──────────────────────────────────── */
    const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-logos">
          <img src="assets/images/paintech-logo.png" alt="PAINTECH Expo" class="footer-main-logo" />
          <span class="footer-logo-divider" aria-hidden="true"></span>
          <img src="assets/images/isp.png" alt="ISP Logo" class="footer-sponsor-logo" />
        </div>
        <p>International Paint &amp; Coatings Technology Expo.</p>
        <div class="footer-social">${SOCIAL_LINKS_HTML}
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
          <li><a href="downloads.html">Download</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Participate</h4>
        <ul>
          <li><a href="book-your-space.html">Book Exhibition Space</a></li>
          <li><a href="become-a-sponsor.html">Sponsorship</a></li>
          <li><a href="visitor-registration.html">Register to Visit</a></li>
          <li><a href="contact.html">Association Partners</a></li>
          <li><a href="contact.html">Media Partners</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="tel:+919500532234">+91 95005 32234</a></li>
          <li><a href="mailto:sales@paintech.in">sales@paintech.in</a></li>
          <li><a href="https://www.paintech.in" target="_blank" rel="noopener">www.paintech.in</a></li>
          <li><a href="contact.html">Chennai Trade Centre</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2027 PAINTECH Expo · Organised by <span>FAIR CONNECTS INDIA LLP</span> · All Rights Reserved</p>
  </div>
</footer>`;

    /* ── Inject nav ───────────────────────────────────── */
    const navSlot = document.getElementById('site-nav');
    if (navSlot) navSlot.outerHTML = NAV_HTML;

    /* ── Inject footer ────────────────────────────────── */
    const footerSlot = document.getElementById('site-footer');
    if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

    /* ── Inject download modal ────────────────────────── */
    document.body.insertAdjacentHTML('beforeend', DOWNLOAD_MODAL_HTML);

    /* ── Helper: Trigger Browser PDF Download ─────────── */
    function triggerPdfDownload(pdfUrl, fileName) {
        const tempLink = document.createElement('a');
        tempLink.href = pdfUrl;
        tempLink.setAttribute('download', fileName || '');
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    }

    /* ── DOM Ready Handlers ───────────────────────────── */
    document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.getElementById('navbar');
        const isHero = !!document.querySelector('.hero-section');

        if (navbar) {
            if (isHero) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.add('scrolled');
            }
        }

        /* Modal Elements */
        const modal = document.getElementById('download-lead-modal');
        const modalClose = document.getElementById('dl-modal-close');
        const modalTitle = document.getElementById('dl-modal-title');
        const modalBadge = document.getElementById('dl-modal-badge');
        const docKeyInput = document.getElementById('dl-doc-key');
        const leadForm = document.getElementById('dl-lead-form');
        const submitBtn = document.getElementById('dl-submit-btn');
        const statusEl = document.getElementById('dl-form-status');

        /* Form Validation Helpers */
        function setFieldError(inputEl, message) {
            if (!inputEl) return false;
            const errEl = document.getElementById('err-' + inputEl.id);
            if (message) {
                inputEl.classList.add('input-error');
                if (errEl) errEl.textContent = message;
                return false;
            } else {
                inputEl.classList.remove('input-error');
                if (errEl) errEl.textContent = '';
                return true;
            }
        }

        function clearAllFormErrors() {
            if (!leadForm) return;
            leadForm.querySelectorAll('input, select').forEach(el => {
                el.classList.remove('input-error');
            });
            leadForm.querySelectorAll('.dl-field-error').forEach(el => {
                el.textContent = '';
            });
        }

        function validateSingleField(inputEl) {
            if (!inputEl) return true;
            const val = inputEl.value.trim();

            switch (inputEl.id) {
                case 'dl-name':
                    if (!val) return setFieldError(inputEl, 'Name is required.');
                    if (val.length < 2 || !/^[A-Za-z\s.'-]+$/.test(val)) {
                        return setFieldError(inputEl, 'Enter a valid name (letters only, min 2 chars).');
                    }
                    return setFieldError(inputEl, '');

                case 'dl-company':
                    if (!val || val.length < 2) {
                        return setFieldError(inputEl, 'Please enter your company name.');
                    }
                    return setFieldError(inputEl, '');

                case 'dl-mobile': {
                    if (!val) return setFieldError(inputEl, 'Mobile number is required.');
                    const cleaned = val.replace(/[\s()-]/g, '');
                    const isIndianMobile = /^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
                    const isIntlMobile = /^\+\d{7,15}$/.test(cleaned);
                    if (!isIndianMobile && !isIntlMobile) {
                        return setFieldError(inputEl, 'Enter a valid 10-digit mobile number.');
                    }
                    return setFieldError(inputEl, '');
                }

                case 'dl-email': {
                    if (!val) return setFieldError(inputEl, 'Email address is required.');
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailRegex.test(val)) {
                        return setFieldError(inputEl, 'Enter a valid email (e.g. you@company.com).');
                    }
                    return setFieldError(inputEl, '');
                }

                case 'dl-website': {
                    if (!val) return setFieldError(inputEl, ''); // Optional
                    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
                    if (!urlRegex.test(val)) {
                        return setFieldError(inputEl, 'Enter a valid website (e.g. www.company.com).');
                    }
                    return setFieldError(inputEl, '');
                }

                case 'dl-business':
                    if (!val || val.length < 2) {
                        return setFieldError(inputEl, 'Please enter your business line.');
                    }
                    return setFieldError(inputEl, '');

                case 'dl-exhibit':
                case 'dl-visit':
                    if (!inputEl.value) {
                        return setFieldError(inputEl, 'Please select an option.');
                    }
                    return setFieldError(inputEl, '');

                default:
                    return true;
            }
        }

        const selectAllBtn = document.getElementById('dl-select-all-btn');
        const docErrEl = document.getElementById('err-dl-docs');

        function getSelectedDocKeys() {
            if (!leadForm) return [];
            return Array.from(leadForm.querySelectorAll('input[name="dl_docs"]:checked')).map(cb => cb.value);
        }

        function updateDocSelectionUI() {
            if (!leadForm) return;
            const checkboxes = Array.from(leadForm.querySelectorAll('input[name="dl_docs"]'));
            checkboxes.forEach(cb => {
                const chip = cb.closest('.dl-doc-chip');
                if (chip) chip.classList.toggle('checked', cb.checked);
            });

            const selectedKeys = getSelectedDocKeys();
            const allChecked = checkboxes.length > 0 && selectedKeys.length === checkboxes.length;
            if (selectAllBtn) {
                selectAllBtn.textContent = allChecked ? 'Deselect All' : 'Select All';
            }

            if (selectedKeys.length > 0 && docErrEl) {
                docErrEl.textContent = '';
            }

            if (selectedKeys.length === 1) {
                const singleItem = DOWNLOAD_CONFIG.items[selectedKeys[0]];
                if (singleItem) {
                    modalTitle.textContent = `Download ${singleItem.title}`;
                    modalBadge.textContent = `PAINTECH Expo 2027 · ${singleItem.title}`;
                    if (submitBtn && !submitBtn.disabled) {
                        submitBtn.innerHTML = `<i class="fa-solid fa-download"></i> <span>Submit &amp; Download ${singleItem.title}</span>`;
                    }
                }
            } else if (selectedKeys.length > 1) {
                modalTitle.textContent = `Download Selected Resources (${selectedKeys.length})`;
                modalBadge.textContent = `PAINTECH Expo 2027 · ${selectedKeys.length} PDFs Selected`;
                if (submitBtn && !submitBtn.disabled) {
                    submitBtn.innerHTML = `<i class="fa-solid fa-download"></i> <span>Submit &amp; Download (${selectedKeys.length} PDFs)</span>`;
                }
            } else {
                modalTitle.textContent = 'Download Resources';
                modalBadge.textContent = 'PAINTECH Expo 2027 · Select PDFs';
                if (submitBtn && !submitBtn.disabled) {
                    submitBtn.innerHTML = '<i class="fa-solid fa-download"></i> <span>Submit &amp; Download PDF</span>';
                }
            }
        }

        if (leadForm) {
            leadForm.querySelectorAll('input[name="dl_docs"]').forEach(cb => {
                cb.addEventListener('change', updateDocSelectionUI);
            });
        }

        if (selectAllBtn && leadForm) {
            selectAllBtn.addEventListener('click', () => {
                const checkboxes = Array.from(leadForm.querySelectorAll('input[name="dl_docs"]'));
                const allChecked = checkboxes.every(cb => cb.checked);
                checkboxes.forEach(cb => { cb.checked = !allChecked; });
                updateDocSelectionUI();
            });
        }

        function validateLeadForm() {
            const selectedKeys = getSelectedDocKeys();
            let allValid = true;
            if (selectedKeys.length === 0) {
                if (docErrEl) docErrEl.textContent = 'Please select at least one document to download.';
                allValid = false;
            } else if (docErrEl) {
                docErrEl.textContent = '';
            }

            const fieldIds = ['dl-name', 'dl-company', 'dl-mobile', 'dl-email', 'dl-website', 'dl-business', 'dl-exhibit', 'dl-visit'];
            let firstInvalidEl = null;

            fieldIds.forEach(id => {
                const el = document.getElementById(id);
                const isValid = validateSingleField(el);
                if (!isValid && !firstInvalidEl) {
                    firstInvalidEl = el;
                }
                if (!isValid) allValid = false;
            });

            if (firstInvalidEl) {
                firstInvalidEl.focus();
            }
            return allValid;
        }

        /* Live input filtering & real-time validation */
        const mobileInput = document.getElementById('dl-mobile');
        if (mobileInput) {
            mobileInput.addEventListener('input', () => {
                mobileInput.value = mobileInput.value.replace(/[^0-9+\s-]/g, '');
            });
        }

        if (leadForm) {
            leadForm.querySelectorAll('input, select').forEach(el => {
                el.addEventListener('blur', () => validateSingleField(el));
                el.addEventListener('input', () => {
                    if (el.classList.contains('input-error')) validateSingleField(el);
                });
                el.addEventListener('change', () => {
                    if (el.classList.contains('input-error')) validateSingleField(el);
                });
            });
        }

        function openDownloadModal(docKey) {
            const item = DOWNLOAD_CONFIG.items[docKey];
            if (!item || !modal) return;
            docKeyInput.value = docKey;
            statusEl.textContent = '';
            statusEl.className = 'dl-form-status';
            clearAllFormErrors();

            if (leadForm) {
                leadForm.querySelectorAll('input[name="dl_docs"]').forEach(cb => {
                    cb.checked = true;
                });
            }
            updateDocSelectionUI();

            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeDownloadModal() {
            if (!modal) return;
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        window.openPaintechDownloadModal = openDownloadModal;

        if (modalClose) modalClose.addEventListener('click', closeDownloadModal);

        /* Bind all [data-download-key] elements (Navbar, Mobile Menu, Download Page) */
        document.querySelectorAll('[data-download-key]').forEach(el => {
            el.addEventListener('click', (e) => {
                const key = el.getAttribute('data-download-key');
                const source = el.getAttribute('data-source') || 'page';
                const item = DOWNLOAD_CONFIG.items[key];
                if (!item) return;

                const shouldShowForm = item.requireForm && (source !== 'navbar' || DOWNLOAD_CONFIG.enableNavbarPopup);

                if (shouldShowForm) {
                    e.preventDefault();
                    /* Close navbar/mobile menus if open */
                    const navDropdown = document.querySelector('.nav-dropdown');
                    if (navDropdown) navDropdown.classList.remove('open');
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) mobileMenu.classList.remove('open');

                    openDownloadModal(key);
                }
            });
        });

        /* Handle Lead Form Submission -> EmailJS API -> Trigger PDF Download(s) */
        if (leadForm) {
            leadForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                if (!validateLeadForm()) return;

                const selectedKeys = getSelectedDocKeys();
                const selectedItems = selectedKeys.map(k => DOWNLOAD_CONFIG.items[k]).filter(Boolean);
                if (selectedItems.length === 0) return;

                const requestedTitles = selectedItems.map(item => item.title).join(', ');

                const leadData = {
                    requested_document: requestedTitles,
                    name: document.getElementById('dl-name').value.trim(),
                    company_name: document.getElementById('dl-company').value.trim(),
                    mobile: document.getElementById('dl-mobile').value.trim(),
                    email: document.getElementById('dl-email').value.trim(),
                    website: document.getElementById('dl-website').value.trim() || 'N/A',
                    business_line: document.getElementById('dl-business').value.trim(),
                    want_to_exhibit: document.getElementById('dl-exhibit').value,
                    want_to_visit: document.getElementById('dl-visit').value
                };

                const templateParams = {
                    ...leadData,
                    to_email: DOWNLOAD_CONFIG.recipientEmail,
                    subject: `New ${requestedTitles} Download Lead – PAINTECH Expo 2027`,
                    message: [
                        `Requested Document(s): ${leadData.requested_document}`,
                        `Name: ${leadData.name}`,
                        `Company Name: ${leadData.company_name}`,
                        `Mobile: ${leadData.mobile}`,
                        `Email: ${leadData.email}`,
                        `Website: ${leadData.website}`,
                        `Business Line: ${leadData.business_line}`,
                        `Want to Exhibit?: ${leadData.want_to_exhibit}`,
                        `Want to Visit?: ${leadData.want_to_visit}`
                    ].join('\n')
                };

                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Submitting &amp; Downloading...</span>';
                statusEl.textContent = '';
                statusEl.className = 'dl-form-status';

                try {
                    const { serviceId, templateId, publicKey } = DOWNLOAD_CONFIG.emailjs;
                    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            service_id: serviceId,
                            template_id: templateId,
                            user_id: publicKey,
                            template_params: templateParams
                        })
                    });

                    if (!response.ok) {
                        const errText = await response.text().catch(() => '');
                        console.warn('EmailJS response warning:', response.status, errText);
                    }
                } catch (err) {
                    console.warn('EmailJS request error:', err);
                }

                /* Trigger all selected PDF downloads with a short stagger so browsers allow multiple files */
                selectedItems.forEach((item, idx) => {
                    setTimeout(() => {
                        triggerPdfDownload(item.pdfUrl, item.fileName);
                    }, idx * 350);
                });

                statusEl.textContent = `✓ Thank you! Downloading: ${requestedTitles}.`;
                statusEl.className = 'dl-form-status success';
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Downloaded!</span>';

                const closeDelay = 1400 + (selectedItems.length - 1) * 350;
                setTimeout(() => {
                    leadForm.reset();
                    submitBtn.disabled = false;
                    updateDocSelectionUI();
                    closeDownloadModal();
                }, closeDelay);
            });
        }

        /* Desktop dropdown menu */
        const navDropdown = document.querySelector('.nav-dropdown');
        const navDropdownToggle = document.querySelector('.nav-dropdown-toggle');

        if (navDropdown && navDropdownToggle) {
            if (sessionStorage.getItem('keepDownloadDropdownOpen') === '1') {
                sessionStorage.removeItem('keepDownloadDropdownOpen');
                navDropdown.classList.add('open');
                navDropdownToggle.setAttribute('aria-expanded', 'true');
            }

            navDropdownToggle.addEventListener('click', (e) => {
                if (page === 'downloads.html') {
                    e.preventDefault();
                    const isOpen = navDropdown.classList.toggle('open');
                    navDropdownToggle.setAttribute('aria-expanded', String(isOpen));
                } else {
                    sessionStorage.setItem('keepDownloadDropdownOpen', '1');
                }
            });

            document.addEventListener('click', (e) => {
                if (!navDropdown.contains(e.target)) {
                    navDropdown.classList.remove('open');
                    navDropdownToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }

        /* Mobile menu & mobile dropdown */
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileClose = document.getElementById('mobile-close');
        const mobileDropdown = document.querySelector('.mobile-dropdown');
        const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
        const mobileDropdownLink = document.querySelector('.mobile-dropdown-link');

        if (mobileDropdown && mobileDropdownToggle) {
            mobileDropdownToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = mobileDropdown.classList.toggle('open');
                mobileDropdownToggle.setAttribute('aria-expanded', String(isOpen));
            });
        }

        if (mobileDropdownLink && mobileDropdown) {
            mobileDropdownLink.addEventListener('click', (e) => {
                if (page === 'downloads.html') {
                    e.preventDefault();
                    e.stopPropagation();
                    const isOpen = mobileDropdown.classList.toggle('open');
                    if (mobileDropdownToggle) mobileDropdownToggle.setAttribute('aria-expanded', String(isOpen));
                } else {
                    sessionStorage.setItem('keepDownloadDropdownOpen', '1');
                }
            });
        }

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
            if (mobileClose) mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
            mobileMenu.querySelectorAll('a:not(.mobile-dropdown-link)').forEach(a =>
                a.addEventListener('click', () => mobileMenu.classList.remove('open'))
            );
        }
    });

})();
