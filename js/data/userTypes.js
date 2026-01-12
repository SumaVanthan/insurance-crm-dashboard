/**
 * User Archetypes Configuration
 * Defines the 5 user types and their associated properties
 */

const USER_TYPES = {
  individual: {
    id: 'individual',
    name: 'Individual Consumer',
    description: 'Retail customer with diverse insurance needs',
    icon: '👤',
    color: '#667eea',
    policyTypes: ['motor', 'health', 'travel', 'electronics'],
    dashboardFocus: [
      'Active policies overview',
      'Upcoming renewals',
      'Claims status',
      'Resume incomplete purchases'
    ],
    widgets: ['resume', 'alerts', 'policies', 'claims', 'upsell'],
    upsellTriggers: {
      motor: ['roadside', 'zero_depreciation'],
      health: ['topup', 'dental'],
      travel: ['gadget_cover', 'baggage'],
      electronics: ['extended_warranty']
    }
  },

  traveler: {
    id: 'traveler',
    name: 'Frequent Traveler',
    description: 'Domestic and international traveler',
    icon: '✈️',
    color: '#f43f5e',
    policyTypes: ['travel', 'health', 'electronics'],
    dashboardFocus: [
      'Trip-based policies',
      'Active travel coverage',
      'Claims abroad',
      'Fast renewal'
    ],
    widgets: ['resume', 'alerts', 'trips', 'policies', 'claims', 'upsell'],
    upsellTriggers: {
      travel: ['baggage', 'delay_cover', 'adventure_sports'],
      health: ['global_cover'],
      electronics: ['gadget_cover']
    }
  },

  vehicle: {
    id: 'vehicle',
    name: 'Vehicle-Centric User',
    description: 'Primarily engaged through motor insurance',
    icon: '🚗',
    color: '#0ea5e9',
    policyTypes: ['motor'],
    dashboardFocus: [
      'Vehicle status',
      'Policy expiry',
      'Claims & inspections',
      'Roadside assistance'
    ],
    widgets: ['resume', 'alerts', 'vehicle_status', 'policies', 'claims', 'upsell'],
    upsellTriggers: {
      motor: ['roadside', 'zero_depreciation', 'engine_cover', 'ncb_protect']
    }
  },

  digital: {
    id: 'digital',
    name: 'Digital Asset Owner',
    description: 'Tech-savvy user with devices to protect',
    icon: '📱',
    color: '#8b5cf6',
    policyTypes: ['electronics'],
    dashboardFocus: [
      'Device list',
      'Coverage validity',
      'Simple claim filing',
      'Warranty extensions'
    ],
    widgets: ['resume', 'alerts', 'devices', 'policies', 'claims', 'upsell'],
    upsellTriggers: {
      electronics: ['extended_warranty', 'accidental_damage', 'theft_cover']
    }
  },

  health: {
    id: 'health',
    name: 'Health-Focused User',
    description: 'Primarily concerned with health coverage',
    icon: '❤️',
    color: '#10b981',
    policyTypes: ['health'],
    dashboardFocus: [
      'Coverage usage',
      'Network hospitals',
      'Claims tracking',
      'Preventive benefits'
    ],
    widgets: ['resume', 'alerts', 'coverage', 'policies', 'claims', 'upsell'],
    upsellTriggers: {
      health: ['topup', 'super_topup', 'critical_illness', 'maternity']
    }
  }
};

/**
 * Policy Type Configurations
 */
const POLICY_TYPES = {
  motor: {
    id: 'motor',
    name: 'Motor Insurance',
    icon: '🚗',
    gradient: 'var(--gradient-motor)',
    color: '#0ea5e9'
  },
  health: {
    id: 'health',
    name: 'Health Insurance',
    icon: '❤️',
    gradient: 'var(--gradient-health)',
    color: '#10b981'
  },
  travel: {
    id: 'travel',
    name: 'Travel Insurance',
    icon: '✈️',
    gradient: 'var(--gradient-travel)',
    color: '#f43f5e'
  },
  electronics: {
    id: 'electronics',
    name: 'Electronics Insurance',
    icon: '📱',
    gradient: 'var(--gradient-electronics)',
    color: '#8b5cf6'
  }
};

/**
 * Upsell Products
 */
const UPSELL_PRODUCTS = {
  roadside: {
    id: 'roadside',
    name: 'Roadside Assistance',
    benefit: '24/7 breakdown support anywhere in India',
    icon: '🔧',
    price: '₹499/year'
  },
  zero_depreciation: {
    id: 'zero_depreciation',
    name: 'Zero Depreciation Cover',
    benefit: 'Get full claim amount without depreciation deduction',
    icon: '💯',
    price: '₹1,299/year'
  },
  engine_cover: {
    id: 'engine_cover',
    name: 'Engine Protection',
    benefit: 'Coverage for engine damage due to water ingress',
    icon: '⚙️',
    price: '₹899/year'
  },
  ncb_protect: {
    id: 'ncb_protect',
    name: 'NCB Protection',
    benefit: 'Protect your No Claim Bonus even after a claim',
    icon: '🛡️',
    price: '₹599/year'
  },
  topup: {
    id: 'topup',
    name: 'Health Top-Up',
    benefit: 'Additional ₹10 Lakh coverage at affordable premium',
    icon: '➕',
    price: '₹2,999/year'
  },
  super_topup: {
    id: 'super_topup',
    name: 'Super Top-Up Plan',
    benefit: 'Extended coverage with lower deductible',
    icon: '🚀',
    price: '₹4,499/year'
  },
  critical_illness: {
    id: 'critical_illness',
    name: 'Critical Illness Cover',
    benefit: 'Lump sum payout on diagnosis of critical illness',
    icon: '🏥',
    price: '₹3,999/year'
  },
  gadget_cover: {
    id: 'gadget_cover',
    name: 'Gadget Protection',
    benefit: 'Cover your devices during international travel',
    icon: '📱',
    price: '₹799/trip'
  },
  baggage: {
    id: 'baggage',
    name: 'Baggage Protection',
    benefit: 'Coverage for lost, delayed, or damaged baggage',
    icon: '🧳',
    price: '₹399/trip'
  },
  delay_cover: {
    id: 'delay_cover',
    name: 'Flight Delay Cover',
    benefit: 'Compensation for flight delays over 6 hours',
    icon: '⏱️',
    price: '₹299/trip'
  },
  extended_warranty: {
    id: 'extended_warranty',
    name: 'Extended Warranty',
    benefit: 'Extend manufacturer warranty by 1 year',
    icon: '📅',
    price: '₹1,499'
  },
  accidental_damage: {
    id: 'accidental_damage',
    name: 'Accidental Damage Cover',
    benefit: 'Protection against drops, spills, and screen damage',
    icon: '💥',
    price: '₹999/year'
  }
};

/**
 * Journey Steps Configuration
 */
const JOURNEY_STEPS = {
  policy_purchase: ['product_selection', 'details_entry', 'kyc', 'payment', 'confirmation'],
  addon_selection: ['addon_browse', 'addon_details', 'payment', 'confirmation'],
  claim_submission: ['incident_report', 'document_upload', 'verification', 'settlement'],
  renewal: ['policy_review', 'update_details', 'payment', 'confirmation']
};

export { USER_TYPES, POLICY_TYPES, UPSELL_PRODUCTS, JOURNEY_STEPS };
