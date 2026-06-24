export const mockJobMatch = {
    jobDetails: {
        title: 'Senior Full Stack Developer',
        company: 'Innovatech Solutions',
        requiredSkills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
        experienceRequired: '5+ Years',
        certificationsRequired: 'AWS Certified Developer',
        salaryRange: '$120k - $160k',
        location: 'Remote / San Francisco'
    },
    matchScore: 82,
    matchLabel: 'Excellent Match', // Excellent, Good, Average, Poor
    matchColor: 'success', // success, primary, warning, danger
    eligibility: [
        { label: 'Skills Match', value: 90, color: 'primary' },
        { label: 'Experience Match', value: 75, color: 'secondary' },
        { label: 'Education Match', value: 85, color: 'success' },
        { label: 'Certification Match', value: 70, color: 'warning' },
        { label: 'Projects Match', value: 80, color: 'accent' },
    ],
    suitablePoints: [
        'Strong Python & React expertise matching core stack',
        'Demonstrated experience with high-scale PostgreSQL databases',
        'Recent projects showcase full-stack ownership',
        'Educational background aligns with CS requirements'
    ],
    gapPoints: [
        'Missing hands-on experience with AWS Cloud deployment',
        'No active Docker/Kubernetes containerization in recent roles',
        'Missing formal AWS Developer certification'
    ],
    skillGaps: [
        { skill: 'AWS Cloud', status: 'Missing', priority: 'High' },
        { skill: 'Docker', status: 'Missing', priority: 'Medium' },
        { skill: 'Kubernetes', status: 'Missing', priority: 'Low' },
        { skill: 'Redis', status: 'Partial', priority: 'Medium' },
    ],
    miniRoadmap: [
        { step: 1, title: 'Learn AWS Fundamentals', linkText: 'View Course' },
        { step: 2, title: 'Complete Docker Certification', linkText: 'Explore Docs' },
        { step: 3, title: 'Build Cloud-Native Project', linkText: 'Start Building' },
        { step: 4, title: 'Earn AWS Developer Associate', linkText: 'Register Exam' },
    ],
    aiInsights: [
        { text: 'Your strongest area is Backend Development & System Design.', type: 'strength' },
        { text: 'You are missing only 2 critical skills required for this role.', type: 'opportunity' },
        { text: 'Your profile is currently stronger than 75% of active applicants.', type: 'ranking' }
    ]
};
