/* ─────────────────────────────────────────────────────────
   PAINTECH Expo 2027 — Data Rendering Engine
   Renders dynamic content from JSON data files
───────────────────────────────────────────────────────── */

/**
 * Render team members from JSON
 */
async function renderTeamCards(containerId) {
    try {
        const response = await fetch('assets/data/team.json');
        const teamData = await response.json();
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        container.innerHTML = teamData.map(member => `
            <div class="team-card fade-up ${member.delay}">
                <div class="team-avatar">${member.avatar}</div>
                <h4>${member.name}</h4>
                <div class="role">${member.role}</div>
                <a href="tel:${member.phone.replace(/\s/g, '')}" class="contact-link">${member.phone}</a><br />
                <a href="mailto:${member.email}" class="contact-link">${member.email}</a>
            </div>
        `).join('');

        // Observe newly added elements for scroll reveal
        setTimeout(() => {
            if (window.scrollObserver) {
                container.querySelectorAll('.fade-up').forEach(el => window.scrollObserver.observe(el));
            }
        }, 50);
    } catch (error) {
        console.error('Error rendering team cards:', error);
    }
}

/**
 * Render FAQs from JSON
 */
async function renderFAQs(containerId) {
    try {
        const response = await fetch('assets/data/faqs.json');
        const faqData = await response.json();
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        container.innerHTML = faqData.map(faq => `
            <div class="card-grad ${faq.delay}">
                <h4 style="margin-bottom:10px; font-size:1rem;">${faq.question}</h4>
                <p style="color:var(--muted); font-size:0.92rem; line-height:1.7;">${faq.answer}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error rendering FAQs:', error);
    }
}

/**
 * Render booth types from JSON
 */
async function renderBoothTypes(containerId) {
    try {
        const response = await fetch('assets/data/booth-types.json');
        const boothData = await response.json();
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        container.innerHTML = boothData.map(booth => `
            <div class="booth-card ${booth.featured ? 'featured' : ''} ${booth.delay}">
                <div class="booth-header">
                    <h3>${booth.name}</h3>
                    <div class="size">${booth.size}</div>
                </div>
                <div class="booth-body">
                    <ul>
                        ${booth.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a href="${booth.buttonUrl}" class="btn ${booth.mostPopular ? 'btn-primary' : 'btn-outline'}" style="width:100%; justify-content:center;">
                        ${booth.buttonText}
                    </a>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error rendering booth types:', error);
    }
}

/**
 * Render process steps from JSON
 */
async function renderProcessSteps(containerId) {
    try {
        const response = await fetch('assets/data/process-steps.json');
        const stepsData = await response.json();
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        container.innerHTML = stepsData.map(step => `
            <div class="step ${step.delay}">
                <div class="step-num">${step.number}</div>
                <h4>${step.title}</h4>
                <p>${step.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error rendering process steps:', error);
    }
}

/**
 * Render opportunities from JSON
 */
async function renderOpportunities(containerId) {
    try {
        const response = await fetch('assets/data/opportunities.json');
        const oppData = await response.json();
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        container.innerHTML = oppData.map(opp => `
            <div class="opp-card ${opp.delay}">
                <div class="icon">${opp.icon}</div>
                <h4>${opp.title}</h4>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error rendering opportunities:', error);
    }
}

/**
 * Render agenda from JSON
 */
async function renderAgenda(containerId) {
    try {
        const response = await fetch('assets/data/agenda.json');
        const agendaData = await response.json();
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        container.innerHTML = agendaData.map((day, index) => `
            <div class="agenda-day">
                <div class="agenda-day-head" style="background: ${day.gradient};">
                    <h4>${day.day}</h4>
                    <div class="date">${day.date}</div>
                </div>
                <div class="agenda-items">
                    ${day.items.map(item => `
                        <div class="agenda-item">
                            <div class="time">${item.time}</div>
                            <div>${item.event}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error rendering agenda:', error);
    }
}

// Auto-initialize renderers on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Contact page
    renderTeamCards('team-grid-container');
    renderFAQs('faqs-container');
    
    // Exhibitors page
    renderBoothTypes('booth-types-container');
    renderProcessSteps('process-steps-container');
    
    // Visitors page
    renderAgenda('agenda-grid-container');
    
    // Insights page
    renderOpportunities('opportunities-grid-container');
});
