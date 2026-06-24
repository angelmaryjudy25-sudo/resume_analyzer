export const mockRecruiterAnalytics = {
    summary: [
        { label: 'Total Candidates', value: 1250, change: '+15%', suffix: '' },
        { label: 'Total Jobs', value: 58, change: '+2', suffix: '' },
        { label: 'Avg Match Score', value: 76, change: '+4%', suffix: '%' },
        { label: 'Interview Rate', value: 18, change: '+2%', suffix: '%' },
        { label: 'Selection Rate', value: 4.2, change: '-0.5%', suffix: '%' },
        { label: 'Time to Hire', value: 24, change: '-3 days', suffix: ' Days' }
    ],
    funnel: [
        { name: 'Applied', value: 1250, fill: '#6366f1' },
        { name: 'Screened', value: 850, fill: '#818cf8' },
        { name: 'Shortlisted', value: 350, fill: '#a5b4fc' },
        { name: 'Interviewed', value: 120, fill: '#c7d2fe' },
        { name: 'Selected', value: 52, fill: '#e0e7ff' }
    ],
    topSkills: [
        { name: 'React', value: 850 },
        { name: 'Node.js', value: 720 },
        { name: 'Python', value: 640 },
        { name: 'SQL', value: 580 },
        { name: 'AWS', value: 320 },
        { name: 'Docker', value: 150 }
    ],
    skillGaps: [
        { skill: 'AWS Cloud', requested: 90, available: 30 },
        { skill: 'Docker/K8s', requested: 85, available: 20 },
        { skill: 'System Design', requested: 75, available: 40 },
        { skill: 'Terraform', requested: 60, available: 15 },
        { skill: 'GraphQL', requested: 50, available: 25 }
    ],
    jobDemand: [
        { month: 'Jan', frontend: 10, backend: 15, devops: 5 },
        { month: 'Feb', frontend: 12, backend: 18, devops: 8 },
        { month: 'Mar', frontend: 15, backend: 14, devops: 12 },
        { month: 'Apr', frontend: 18, backend: 20, devops: 15 }
    ],
    matchDistribution: [
        { range: '90-100%', count: 85 },
        { range: '80-90%', count: 240 },
        { range: '70-80%', count: 450 },
        { range: 'Below 70%', count: 475 }
    ],
    candidateQuality: {
        avgAtsScore: 84,
        education: [
            { name: "Bachelor's", value: 650 },
            { name: "Master's", value: 380 },
            { name: 'PhD', value: 45 },
            { name: 'Other', value: 175 }
        ],
        experience: [
            { range: '0-2 yrs', count: 320 },
            { range: '3-5 yrs', count: 540 },
            { range: '6-10 yrs', count: 280 },
            { range: '10+ yrs', count: 110 }
        ]
    },
    departmentMetrics: [
        { name: 'Engineering', matches: 82, hires: 24 },
        { name: 'Data Science', matches: 75, hires: 12 },
        { name: 'DevOps', matches: 68, hires: 8 },
        { name: 'Product', matches: 91, hires: 5 },
        { name: 'Design', matches: 85, hires: 3 }
    ],
    insights: [
        { text: 'AWS is the most requested missing skill (70% gap).', type: 'critical' },
        { text: 'Backend Developer positions have 3x higher competition than DevOps.', type: 'trend' },
        { text: 'Candidates with certifications have 18% higher match scores.', type: 'positive' }
    ],
    recommendations: [
        { text: 'Increase hiring focus on Cloud Engineers with Terraform experience.', type: 'strategy' },
        { text: 'Provide internal AWS training to bridge the existing 70% skill gap.', type: 'training' },
        { text: 'Expand remote search for DevOps talent to increase applicant quality.', type: 'sourcing' }
    ]
};
