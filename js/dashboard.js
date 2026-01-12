/**
 * Dashboard Engine
 * Orchestrates the dynamic dashboard generation based on user type
 */

import { USER_TYPES, POLICY_TYPES, UPSELL_PRODUCTS } from './data/userTypes.js';
import {
    MOCK_USERS,
    MOCK_POLICIES,
    MOCK_INCOMPLETE_JOURNEYS,
    MOCK_ALERTS,
    MOCK_CLAIMS,
    MOCK_UPSELL,
    MOCK_STATS
} from './data/mockData.js';

class DashboardEngine {
    constructor() {
        this.currentUserType = 'individual';
        this.dismissedJourneys = new Set(JSON.parse(localStorage.getItem('dismissedJourneys') || '[]'));
    }

    /**
     * Set the current user type and refresh dashboard
     */
    setUserType(userType) {
        if (USER_TYPES[userType]) {
            this.currentUserType = userType;
            this.render();
        }
    }

    /**
     * Get current user configuration
     */
    getCurrentUser() {
        return {
            ...MOCK_USERS[this.currentUserType],
            typeConfig: USER_TYPES[this.currentUserType]
        };
    }

    /**
     * Get policies for current user type
     */
    getPolicies() {
        return MOCK_POLICIES[this.currentUserType] || [];
    }

    /**
     * Get incomplete journey if exists and not dismissed
     */
    getIncompleteJourney() {
        const journey = MOCK_INCOMPLETE_JOURNEYS[this.currentUserType];
        if (journey && !this.dismissedJourneys.has(journey.id)) {
            return journey;
        }
        return null;
    }

    /**
     * Dismiss an incomplete journey
     */
    dismissJourney(journeyId) {
        this.dismissedJourneys.add(journeyId);
        localStorage.setItem('dismissedJourneys', JSON.stringify([...this.dismissedJourneys]));
        this.render();
    }

    /**
     * Get alerts for current user type
     */
    getAlerts() {
        return (MOCK_ALERTS[this.currentUserType] || []).sort((a, b) => a.priority - b.priority);
    }

    /**
     * Get claims for current user type
     */
    getClaims() {
        return MOCK_CLAIMS[this.currentUserType] || [];
    }

    /**
     * Get upsell opportunity for current user type
     */
    getUpsell() {
        const upsellData = MOCK_UPSELL[this.currentUserType];
        if (upsellData) {
            return {
                ...UPSELL_PRODUCTS[upsellData.id],
                reason: upsellData.reason
            };
        }
        return null;
    }

    /**
     * Get quick stats for current user type
     */
    getStats() {
        return MOCK_STATS[this.currentUserType] || {};
    }

    /**
     * Main render function
     */
    render() {
        const user = this.getCurrentUser();

        // Update header
        this.renderHeader(user);

        // Update welcome section
        this.renderWelcome(user);

        // Render dashboard sections in priority order
        this.renderDashboard();
    }

    /**
     * Render header with user info
     */
    renderHeader(user) {
        const userNameEl = document.getElementById('userName');
        const userTypeEl = document.getElementById('userTypeDisplay');
        const userAvatarEl = document.getElementById('userAvatar');

        if (userNameEl) userNameEl.textContent = user.name;
        if (userTypeEl) userTypeEl.textContent = user.typeConfig.name;
        if (userAvatarEl) userAvatarEl.textContent = user.name.split(' ').map(n => n[0]).join('');
    }

    /**
     * Render welcome section
     */
    renderWelcome(user) {
        const welcomeNameEl = document.getElementById('welcomeName');
        const userTypeBadgeEl = document.getElementById('userTypeBadge');

        if (welcomeNameEl) {
            welcomeNameEl.innerHTML = `Good ${this.getTimeOfDay()}, ${user.name.split(' ')[0]} <span>👋</span>`;
        }

        if (userTypeBadgeEl) {
            userTypeBadgeEl.innerHTML = `${user.typeConfig.icon} ${user.typeConfig.name}`;
        }
    }

    /**
     * Get time of day greeting
     */
    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Morning';
        if (hour < 17) return 'Afternoon';
        return 'Evening';
    }

    /**
     * Render main dashboard sections
     */
    renderDashboard() {
        const dashboardEl = document.getElementById('dashboardContent');
        if (!dashboardEl) return;

        let html = '';

        // 1. Resume Journey (Highest Priority)
        const journey = this.getIncompleteJourney();
        if (journey) {
            html += this.renderResumeJourney(journey);
        }

        // 2. Critical Alerts
        const alerts = this.getAlerts();
        if (alerts.length > 0) {
            html += this.renderAlerts(alerts);
        }

        // 3. Quick Stats
        html += this.renderStats();

        // 4. Active Policies
        const policies = this.getPolicies();
        if (policies.length > 0) {
            html += this.renderPolicies(policies);
        }

        // 5. Claims Tracker
        const claims = this.getClaims();
        if (claims.length > 0) {
            html += this.renderClaims(claims);
        }

        // 6. Contextual Upsell
        const upsell = this.getUpsell();
        if (upsell) {
            html += this.renderUpsell(upsell);
        }

        dashboardEl.innerHTML = html;
        this.attachEventListeners();
    }

    /**
     * Render Resume Journey Card
     */
    renderResumeJourney(journey) {
        const policyType = POLICY_TYPES[journey.productType];

        return `
      <section class="priority-section" id="resumeSection">
        <div class="card resume-journey-card">
          <div class="resume-journey-header">
            <div class="resume-journey-icon">${policyType.icon}</div>
            <div>
              <div class="resume-journey-label">Continue where you left off</div>
              <div class="resume-journey-title">${journey.product}</div>
            </div>
          </div>
          
          <div class="resume-journey-progress">
            <div class="resume-progress-bar">
              <div class="resume-progress-fill" style="width: ${journey.progress}%"></div>
            </div>
            <div class="resume-progress-text">
              <span>Step ${journey.completedSteps.length + 1} of ${journey.totalSteps}: ${this.formatStepName(journey.currentStep)}</span>
              <span>~${journey.estimatedTime} to complete</span>
            </div>
          </div>
          
          <div class="resume-journey-actions">
            <button class="btn btn-primary btn-lg" onclick="dashboard.resumeJourney('${journey.id}')">
              Resume Now →
            </button>
            <button class="btn btn-ghost" onclick="dashboard.restartJourney('${journey.id}')">
              Start Over
            </button>
            <button class="btn btn-ghost" onclick="dashboard.dismissJourney('${journey.id}')">
              Dismiss
            </button>
          </div>
        </div>
      </section>
    `;
    }

    /**
     * Render Alerts Section
     */
    renderAlerts(alerts) {
        const alertsHtml = alerts.map(alert => `
      <div class="alert alert--${alert.type}">
        <div class="alert-icon">
          ${alert.type === 'error' ? '⚠️' : alert.type === 'warning' ? '⚡' : 'ℹ️'}
        </div>
        <div class="alert-content">
          <div class="alert-title">${alert.title}</div>
          <p class="alert-message">${alert.message}</p>
          <div class="alert-action">
            <button class="btn btn-sm btn-secondary">${alert.action}</button>
          </div>
        </div>
      </div>
    `).join('');

        return `
      <section class="priority-section" id="alertsSection">
        <div class="section-header">
          <h2 class="section-title">🔔 Attention Required</h2>
        </div>
        <div class="alerts-container">
          ${alertsHtml}
        </div>
      </section>
    `;
    }

    /**
     * Render Quick Stats
     */
    renderStats() {
        const stats = this.getStats();
        const user = this.getCurrentUser();

        let statsHtml = '';

        if (user.typeConfig.id === 'individual') {
            statsHtml = `
        <div class="stat-card"><div class="stat-value">${stats.activePolicies}</div><div class="stat-label">Active Policies</div></div>
        <div class="stat-card"><div class="stat-value">${stats.totalCoverage}</div><div class="stat-label">Total Coverage</div></div>
        <div class="stat-card"><div class="stat-value">${stats.openClaims}</div><div class="stat-label">Open Claims</div></div>
        <div class="stat-card"><div class="stat-value">${stats.upcomingRenewals}</div><div class="stat-label">Renewals Due</div></div>
      `;
        } else if (user.typeConfig.id === 'traveler') {
            statsHtml = `
        <div class="stat-card"><div class="stat-value">${stats.activePolicies}</div><div class="stat-label">Active Policies</div></div>
        <div class="stat-card"><div class="stat-value">${stats.tripsProtected}</div><div class="stat-label">Trips Protected</div></div>
        <div class="stat-card"><div class="stat-value">${stats.openClaims}</div><div class="stat-label">Open Claims</div></div>
        <div class="stat-card"><div class="stat-value">${stats.daysUntilNextTrip}</div><div class="stat-label">Days to Next Trip</div></div>
      `;
        } else if (user.typeConfig.id === 'vehicle') {
            statsHtml = `
        <div class="stat-card"><div class="stat-value">${stats.activeVehicles}</div><div class="stat-label">Vehicles Covered</div></div>
        <div class="stat-card"><div class="stat-value">${stats.totalCoverage}</div><div class="stat-label">Total Coverage</div></div>
        <div class="stat-card"><div class="stat-value">${stats.openClaims}</div><div class="stat-label">Open Claims</div></div>
        <div class="stat-card"><div class="stat-value">${stats.nextServiceDue}</div><div class="stat-label">Next Service</div></div>
      `;
        } else if (user.typeConfig.id === 'digital') {
            statsHtml = `
        <div class="stat-card"><div class="stat-value">${stats.devicesProtected}</div><div class="stat-label">Devices Protected</div></div>
        <div class="stat-card"><div class="stat-value">${stats.totalCoverage}</div><div class="stat-label">Total Coverage</div></div>
        <div class="stat-card"><div class="stat-value">${stats.openClaims}</div><div class="stat-label">Open Claims</div></div>
        <div class="stat-card"><div class="stat-value">${stats.warrantyExpiring}</div><div class="stat-label">Expiring Soon</div></div>
      `;
        } else if (user.typeConfig.id === 'health') {
            statsHtml = `
        <div class="stat-card"><div class="stat-value">${stats.familyMembers}</div><div class="stat-label">Members Covered</div></div>
        <div class="stat-card"><div class="stat-value">${stats.totalCoverage}</div><div class="stat-label">Total Coverage</div></div>
        <div class="stat-card"><div class="stat-value">${stats.coverageUsed}</div><div class="stat-label">Coverage Used</div></div>
        <div class="stat-card"><div class="stat-value">${stats.pendingClaims}</div><div class="stat-label">Pending Claims</div></div>
      `;
        }

        return `
      <section class="priority-section" id="statsSection">
        <div class="stats-grid">
          ${statsHtml}
        </div>
      </section>
    `;
    }

    /**
     * Render Policies Grid
     */
    renderPolicies(policies) {
        const policiesHtml = policies.map(policy => {
            const policyType = POLICY_TYPES[policy.type];
            const statusClass = policy.status === 'expiring_soon' ? 'expiring' :
                policy.status === 'expired' ? 'expired' : 'active';

            return `
        <div class="card policy-card policy-card--${policy.type}">
          <div class="policy-card-content">
            <div class="policy-icon policy-icon--${policy.type}">
              ${policyType.icon}
            </div>
            <div class="policy-details">
              <div class="policy-name">${policy.name}</div>
              <div class="policy-meta">${policy.policyNumber}</div>
              ${policy.vehicle ? `<div class="policy-meta">${policy.vehicle}</div>` : ''}
              ${policy.members ? `<div class="policy-meta">${policy.members.join(', ')}</div>` : ''}
              ${policy.devices ? `<div class="policy-meta">${policy.devices.join(', ')}</div>` : ''}
              <div class="policy-expiry">
                <span class="status-dot status-dot--${statusClass}"></span>
                ${policy.status === 'upcoming'
                    ? `Starts in ${this.getDaysText(policy.startDate)}`
                    : `${policy.daysToExpiry} days remaining`}
              </div>
            </div>
          </div>
          <div class="policy-actions">
            <button class="btn btn-sm btn-secondary">View Details</button>
            ${policy.status === 'expiring_soon'
                    ? '<button class="btn btn-sm btn-primary">Renew Now</button>'
                    : '<button class="btn btn-sm btn-ghost">File Claim</button>'}
          </div>
        </div>
      `;
        }).join('');

        return `
      <section class="priority-section" id="policiesSection">
        <div class="section-header">
          <h2 class="section-title">📋 Your Policies <span class="section-count">${policies.length}</span></h2>
          <a href="#" class="section-action">View All →</a>
        </div>
        <div class="policies-grid">
          ${policiesHtml}
        </div>
      </section>
    `;
    }

    /**
     * Render Claims Tracker
     */
    renderClaims(claims) {
        const claimsHtml = claims.map(claim => {
            const policyType = POLICY_TYPES[claim.policyType];
            const statusClass = claim.status === 'approved' ? 'success' :
                claim.status === 'rejected' ? 'error' : 'info';

            return `
        <div class="claim-item">
          <div class="claim-icon policy-icon--${claim.policyType}">
            ${policyType.icon}
          </div>
          <div class="claim-details">
            <div class="claim-title">${claim.type} - ${claim.claimNumber}</div>
            <div class="claim-meta">${claim.policyName} • ₹${claim.amount.toLocaleString()}</div>
          </div>
          <div class="claim-status">
            <span class="badge badge-${statusClass}">${claim.statusText}</span>
            <div class="claim-meta" style="margin-top: 4px;">Step ${claim.currentStep}/${claim.totalSteps}</div>
          </div>
        </div>
      `;
        }).join('');

        return `
      <section class="priority-section" id="claimsSection">
        <div class="section-header">
          <h2 class="section-title">📊 Claims & Services</h2>
          <a href="#" class="section-action">Track All →</a>
        </div>
        <div class="card">
          <div class="claims-list">
            ${claimsHtml}
          </div>
        </div>
      </section>
    `;
    }

    /**
     * Render Upsell Card
     */
    renderUpsell(upsell) {
        return `
      <section class="priority-section" id="upsellSection">
        <div class="card upsell-card">
          <div class="upsell-header">
            <div class="upsell-icon">${upsell.icon}</div>
            <div>
              <div class="upsell-label">Recommended for You</div>
              <div class="upsell-title">${upsell.name}</div>
            </div>
          </div>
          <p class="upsell-benefit">${upsell.benefit}</p>
          <p class="text-sm text-muted mb-4">${upsell.reason}</p>
          <div class="flex items-center justify-between">
            <span class="text-lg text-semibold">${upsell.price}</span>
            <button class="btn btn-primary">Add to Policy →</button>
          </div>
        </div>
      </section>
    `;
    }

    /**
     * Format step name for display
     */
    formatStepName(step) {
        return step.split('_').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    /**
     * Get days text from date
     */
    getDaysText(dateStr) {
        const date = new Date(dateStr);
        const now = new Date();
        const days = Math.ceil((date - now) / (1000 * 60 * 60 * 24));
        return `${days} days`;
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Add any dynamic event listeners here
    }

    /**
     * Resume journey action
     */
    resumeJourney(journeyId) {
        alert(`Resuming journey: ${journeyId}\n\nThis would navigate to the checkout/form flow.`);
    }

    /**
     * Restart journey action
     */
    restartJourney(journeyId) {
        alert(`Restarting journey: ${journeyId}\n\nThis would clear progress and start fresh.`);
    }
}

// Create global instance
window.dashboard = new DashboardEngine();

export default DashboardEngine;
