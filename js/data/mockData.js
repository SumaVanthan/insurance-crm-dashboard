/**
 * Mock Data for Insurance CRM Dashboard
 * Includes sample policies, journeys, alerts, claims, and users
 */

// Sample User Profiles
const MOCK_USERS = {
    individual: {
        id: 'usr_001',
        name: 'Rahul Sharma',
        email: 'rahul.sharma@email.com',
        type: 'individual',
        joinedDate: '2023-06-15'
    },
    traveler: {
        id: 'usr_002',
        name: 'Priya Patel',
        email: 'priya.patel@email.com',
        type: 'traveler',
        joinedDate: '2022-11-20'
    },
    vehicle: {
        id: 'usr_003',
        name: 'Amit Kumar',
        email: 'amit.kumar@email.com',
        type: 'vehicle',
        joinedDate: '2024-01-10'
    },
    digital: {
        id: 'usr_004',
        name: 'Sneha Reddy',
        email: 'sneha.reddy@email.com',
        type: 'digital',
        joinedDate: '2024-03-05'
    },
    health: {
        id: 'usr_005',
        name: 'Vikram Singh',
        email: 'vikram.singh@email.com',
        type: 'health',
        joinedDate: '2023-09-12'
    }
};

// Sample Policies
const MOCK_POLICIES = {
    individual: [
        {
            id: 'pol_motor_001',
            type: 'motor',
            name: 'Comprehensive Car Insurance',
            policyNumber: 'MOT-2024-78542',
            vehicle: 'Honda City 2022',
            registrationNo: 'MH-02-AB-1234',
            premium: 12500,
            sumInsured: 850000,
            startDate: '2024-06-15',
            endDate: '2025-06-14',
            status: 'active',
            daysToExpiry: 155,
            addons: ['roadside']
        },
        {
            id: 'pol_health_001',
            type: 'health',
            name: 'Family Health Guard',
            policyNumber: 'HLT-2024-45632',
            members: ['Self', 'Spouse', '2 Children'],
            premium: 25000,
            sumInsured: 500000,
            startDate: '2024-04-01',
            endDate: '2025-03-31',
            status: 'active',
            daysToExpiry: 78,
            usedAmount: 45000,
            remainingAmount: 455000
        },
        {
            id: 'pol_travel_001',
            type: 'travel',
            name: 'International Travel Cover',
            policyNumber: 'TRV-2024-98712',
            destination: 'Europe',
            travelers: 2,
            premium: 3500,
            sumInsured: 5000000,
            startDate: '2025-02-10',
            endDate: '2025-02-25',
            status: 'upcoming',
            tripDays: 15
        }
    ],
    traveler: [
        {
            id: 'pol_travel_002',
            type: 'travel',
            name: 'Multi-Trip Annual Cover',
            policyNumber: 'TRV-2024-11234',
            coverage: 'Worldwide',
            premium: 8500,
            sumInsured: 7500000,
            startDate: '2024-07-01',
            endDate: '2025-06-30',
            status: 'active',
            daysToExpiry: 169,
            tripsUsed: 4
        },
        {
            id: 'pol_health_002',
            type: 'health',
            name: 'Global Health Cover',
            policyNumber: 'HLT-2024-77821',
            coverage: 'International',
            premium: 45000,
            sumInsured: 2500000,
            startDate: '2024-08-15',
            endDate: '2025-08-14',
            status: 'active',
            daysToExpiry: 214
        },
        {
            id: 'pol_electronics_001',
            type: 'electronics',
            name: 'Gadget Shield Pro',
            policyNumber: 'ELC-2024-55123',
            devices: ['MacBook Pro', 'iPhone 15 Pro'],
            premium: 4500,
            sumInsured: 250000,
            startDate: '2024-10-01',
            endDate: '2025-09-30',
            status: 'active',
            daysToExpiry: 261
        }
    ],
    vehicle: [
        {
            id: 'pol_motor_002',
            type: 'motor',
            name: 'Comprehensive Two-Wheeler',
            policyNumber: 'MOT-2024-33456',
            vehicle: 'Royal Enfield Classic 350',
            registrationNo: 'KA-03-MN-5678',
            premium: 4500,
            sumInsured: 180000,
            startDate: '2024-05-20',
            endDate: '2025-05-19',
            status: 'active',
            daysToExpiry: 127,
            addons: []
        },
        {
            id: 'pol_motor_003',
            type: 'motor',
            name: 'Premium Car Insurance',
            policyNumber: 'MOT-2024-44789',
            vehicle: 'Hyundai Creta 2023',
            registrationNo: 'KA-03-CD-9012',
            premium: 18500,
            sumInsured: 1400000,
            startDate: '2024-03-10',
            endDate: '2025-03-09',
            status: 'expiring_soon',
            daysToExpiry: 56,
            addons: ['zero_depreciation', 'engine_cover']
        }
    ],
    digital: [
        {
            id: 'pol_electronics_002',
            type: 'electronics',
            name: 'Premium Device Protection',
            policyNumber: 'ELC-2024-88765',
            devices: ['iPhone 15 Pro Max', 'iPad Pro', 'AirPods Pro'],
            premium: 6500,
            sumInsured: 320000,
            startDate: '2024-09-01',
            endDate: '2025-08-31',
            status: 'active',
            daysToExpiry: 231
        },
        {
            id: 'pol_electronics_003',
            type: 'electronics',
            name: 'Laptop Extended Warranty',
            policyNumber: 'ELC-2024-99123',
            devices: ['Dell XPS 15'],
            premium: 3200,
            sumInsured: 150000,
            startDate: '2024-11-15',
            endDate: '2026-11-14',
            status: 'active',
            daysToExpiry: 671
        }
    ],
    health: [
        {
            id: 'pol_health_003',
            type: 'health',
            name: 'Super Health Plus',
            policyNumber: 'HLT-2024-12567',
            members: ['Self', 'Spouse'],
            premium: 32000,
            sumInsured: 1000000,
            startDate: '2024-07-01',
            endDate: '2025-06-30',
            status: 'active',
            daysToExpiry: 169,
            usedAmount: 125000,
            remainingAmount: 875000,
            networkHospitals: 5500
        },
        {
            id: 'pol_health_004',
            type: 'health',
            name: 'Critical Illness Cover',
            policyNumber: 'HLT-2024-34890',
            coverage: '36 Critical Illnesses',
            premium: 8500,
            sumInsured: 2500000,
            startDate: '2024-08-01',
            endDate: '2025-07-31',
            status: 'active',
            daysToExpiry: 200
        }
    ]
};

// Incomplete Journeys
const MOCK_INCOMPLETE_JOURNEYS = {
    individual: {
        id: 'journey_001',
        type: 'policy_purchase',
        product: 'Electronics Insurance',
        productType: 'electronics',
        currentStep: 'kyc',
        completedSteps: ['product_selection', 'details_entry'],
        totalSteps: 5,
        progress: 40,
        lastActivity: '2025-01-10T14:30:00',
        estimatedTime: '3 mins',
        data: {
            device: 'Samsung Galaxy S24 Ultra',
            premium: 2800
        }
    },
    traveler: {
        id: 'journey_002',
        type: 'policy_purchase',
        product: 'Singapore Trip Cover',
        productType: 'travel',
        currentStep: 'payment',
        completedSteps: ['product_selection', 'details_entry', 'kyc'],
        totalSteps: 5,
        progress: 60,
        lastActivity: '2025-01-11T18:45:00',
        estimatedTime: '2 mins',
        data: {
            destination: 'Singapore',
            startDate: '2025-02-15',
            endDate: '2025-02-20',
            premium: 1800
        }
    },
    vehicle: null,
    digital: {
        id: 'journey_003',
        type: 'addon_selection',
        product: 'Accidental Damage Cover',
        productType: 'electronics',
        currentStep: 'addon_details',
        completedSteps: ['addon_browse'],
        totalSteps: 4,
        progress: 25,
        lastActivity: '2025-01-09T10:20:00',
        estimatedTime: '4 mins',
        data: {
            forDevice: 'iPhone 15 Pro Max',
            premium: 999
        }
    },
    health: {
        id: 'journey_004',
        type: 'claim_submission',
        product: 'Health Claim',
        productType: 'health',
        currentStep: 'document_upload',
        completedSteps: ['incident_report'],
        totalSteps: 4,
        progress: 25,
        lastActivity: '2025-01-11T09:15:00',
        estimatedTime: '5 mins',
        data: {
            claimType: 'Reimbursement',
            hospitalName: 'Apollo Hospitals',
            amount: 45000
        }
    }
};

// Critical Alerts
const MOCK_ALERTS = {
    individual: [
        {
            id: 'alert_001',
            type: 'warning',
            title: 'Policy Expiring Soon',
            message: 'Your Family Health Guard policy expires in 78 days. Renew early to get 5% discount.',
            action: 'Renew Now',
            actionUrl: '/renew/pol_health_001',
            priority: 2
        }
    ],
    traveler: [
        {
            id: 'alert_002',
            type: 'info',
            title: 'Upcoming Trip Coverage',
            message: 'Your Singapore trip coverage starts on Feb 15. Download your policy docs.',
            action: 'Download',
            actionUrl: '/documents/journey_002',
            priority: 3
        }
    ],
    vehicle: [
        {
            id: 'alert_003',
            type: 'error',
            title: 'Urgent: Policy Expiring',
            message: 'Your Hyundai Creta insurance expires in 56 days. Renew to avoid coverage gap.',
            action: 'Renew Now',
            actionUrl: '/renew/pol_motor_003',
            priority: 1
        },
        {
            id: 'alert_004',
            type: 'warning',
            title: 'Service Due',
            message: 'Your Royal Enfield is due for annual service. Book a free inspection.',
            action: 'Book Service',
            actionUrl: '/service/book',
            priority: 2
        }
    ],
    digital: [],
    health: [
        {
            id: 'alert_005',
            type: 'info',
            title: 'Health Checkup Available',
            message: 'You have 1 free annual health checkup remaining. Valid till March 2025.',
            action: 'Book Checkup',
            actionUrl: '/wellness/checkup',
            priority: 3
        },
        {
            id: 'alert_006',
            type: 'warning',
            title: 'Coverage Usage Alert',
            message: 'You have used 12.5% of your health coverage. ₹8,75,000 remaining.',
            action: 'View Details',
            actionUrl: '/coverage/details',
            priority: 2
        }
    ]
};

// Claims Data
const MOCK_CLAIMS = {
    individual: [
        {
            id: 'claim_001',
            policyType: 'health',
            policyName: 'Family Health Guard',
            claimNumber: 'CLM-2024-8765',
            type: 'Hospitalization',
            amount: 45000,
            status: 'approved',
            statusText: 'Approved',
            submittedDate: '2024-11-15',
            settledDate: '2024-11-28',
            currentStep: 4,
            totalSteps: 4
        }
    ],
    traveler: [
        {
            id: 'claim_002',
            policyType: 'travel',
            policyName: 'Multi-Trip Annual Cover',
            claimNumber: 'CLM-2024-9123',
            type: 'Flight Delay',
            amount: 5000,
            status: 'processing',
            statusText: 'Under Review',
            submittedDate: '2025-01-05',
            currentStep: 2,
            totalSteps: 4
        }
    ],
    vehicle: [
        {
            id: 'claim_003',
            policyType: 'motor',
            policyName: 'Comprehensive Two-Wheeler',
            claimNumber: 'CLM-2024-7456',
            type: 'Accident Repair',
            amount: 12500,
            status: 'processing',
            statusText: 'Documents Verification',
            submittedDate: '2025-01-08',
            currentStep: 2,
            totalSteps: 4
        }
    ],
    digital: [],
    health: [
        {
            id: 'claim_004',
            policyType: 'health',
            policyName: 'Super Health Plus',
            claimNumber: 'CLM-2024-6789',
            type: 'Reimbursement',
            amount: 28000,
            status: 'processing',
            statusText: 'Awaiting Documents',
            submittedDate: '2025-01-10',
            currentStep: 1,
            totalSteps: 4
        },
        {
            id: 'claim_005',
            policyType: 'health',
            policyName: 'Super Health Plus',
            claimNumber: 'CLM-2024-5432',
            type: 'Cashless',
            amount: 97000,
            status: 'approved',
            statusText: 'Settled',
            submittedDate: '2024-10-20',
            settledDate: '2024-10-25',
            currentStep: 4,
            totalSteps: 4
        }
    ]
};

// Upsell Opportunities (based on coverage gaps)
const MOCK_UPSELL = {
    individual: {
        id: 'roadside',
        reason: 'Your motor policy doesn\'t include breakdown assistance'
    },
    traveler: {
        id: 'baggage',
        reason: 'Protect your luggage on international trips'
    },
    vehicle: {
        id: 'ncb_protect',
        reason: 'Preserve your No Claim Bonus even after a claim'
    },
    digital: {
        id: 'accidental_damage',
        reason: 'Your devices aren\'t covered for accidental drops'
    },
    health: {
        id: 'super_topup',
        reason: 'Get additional ₹25 Lakh coverage at just ₹4,499/year'
    }
};

// Quick Stats per user type
const MOCK_STATS = {
    individual: {
        activePolicies: 3,
        totalCoverage: '₹1.39 Cr',
        openClaims: 0,
        upcomingRenewals: 1
    },
    traveler: {
        activePolicies: 3,
        tripsProtected: 4,
        openClaims: 1,
        daysUntilNextTrip: 33
    },
    vehicle: {
        activeVehicles: 2,
        totalCoverage: '₹15.8 L',
        openClaims: 1,
        nextServiceDue: 'Feb 15'
    },
    digital: {
        devicesProtected: 4,
        totalCoverage: '₹4.7 L',
        openClaims: 0,
        warrantyExpiring: 0
    },
    health: {
        familyMembers: 2,
        totalCoverage: '₹35 L',
        coverageUsed: '12.5%',
        pendingClaims: 1
    }
};

export {
    MOCK_USERS,
    MOCK_POLICIES,
    MOCK_INCOMPLETE_JOURNEYS,
    MOCK_ALERTS,
    MOCK_CLAIMS,
    MOCK_UPSELL,
    MOCK_STATS
};
