export const mockMultiJobAnalysis = {
    resumeFile: { name: 'Alex_Developer_Resume.pdf', size: '1.2 MB', status: 'ready' },
    jobFiles: [
        { name: 'Senior_Frontend_Role.pdf', size: '450 KB', status: 'ready' },
        { name: 'Fullstack_Dev_JD.docx', size: '320 KB', status: 'ready' },
        { name: 'React_Engineer_Remote.txt', size: '12 KB', status: 'ready' },
        { name: 'Junior_Backend_Role.pdf', size: '510 KB', status: 'ready' }
    ],
    rankedJobs: [
        {
            id: 1,
            rank: 1,
            title: 'Senior Frontend Engineer',
            company: 'TechFlow Systems',
            score: 94,
            matchLabel: 'Best Match',
            color: 'success',
            salary: '$140k - $180k',
            location: 'Remote / NYC',
            experience: '5+ Years',
            strengths: ['React Mastery', 'TypeScript', 'System Design'],
            gaps: ['Micro-frontends'],
            comparisonData: {
                skills: 98,
                experience: 90,
                education: 100,
                certification: 85
            }
        },
        {
            id: 2,
            rank: 2,
            title: 'Full Stack Developer',
            company: 'Innovate AI',
            score: 88,
            matchLabel: 'Strong Match',
            color: 'primary',
            salary: '$130k - $160k',
            location: 'Austin, TX',
            experience: '4+ Years',
            strengths: ['Node.js', 'PostgreSQL', 'React'],
            gaps: ['AWS Lambda', 'Docker'],
            comparisonData: {
                skills: 85,
                experience: 88,
                education: 100,
                certification: 70
            }
        },
        {
            id: 3,
            rank: 3,
            title: 'React Native Developer',
            company: 'MobileFirst',
            score: 76,
            matchLabel: 'Good Match',
            color: 'warning',
            salary: '$110k - $140k',
            location: 'Remote',
            experience: '3+ Years',
            strengths: ['React components', 'UI/UX focus'],
            gaps: ['Mobile Native APIs', 'Fastlane'],
            comparisonData: {
                skills: 70,
                experience: 80,
                education: 100,
                certification: 60
            }
        },
        {
            id: 4,
            rank: 4,
            title: 'Backend Engineer',
            company: 'DataCore',
            score: 62,
            matchLabel: 'Fair Match',
            color: 'danger',
            salary: '$120k - $150k',
            location: 'San Francisco',
            experience: '5+ Years',
            strengths: ['Database design', 'API scaling'],
            gaps: ['Python/Go', 'Kubernetes'],
            comparisonData: {
                skills: 55,
                experience: 60,
                education: 90,
                certification: 40
            }
        }
    ],
    recommendation: {
        title: 'Senior Frontend Engineer',
        reasoning: [
            'Match score of 94% is significantly higher than other roles.',
            'Your 6 years of React experience exceeds the 5-year requirement.',
            'Extensive open-source work in TypeScript perfectly aligns with TechFlow\'s stack.',
            'System Design skills mentioned in your resume are a critical key requirement.'
        ]
    },
    skillGapHeatmap: [
        { skill: 'React', Senior_Frontend: 1, FullStack: 1, ReactNative: 1, Backend: 0 },
        { skill: 'TypeScript', Senior_Frontend: 1, FullStack: 1, ReactNative: 0, Backend: 0 },
        { skill: 'AWS', Senior_Frontend: 0, FullStack: 1, ReactNative: 0, Backend: 1 },
        { skill: 'Docker', Senior_Frontend: 0, FullStack: 1, ReactNative: 0, Backend: 1 },
        { skill: 'System Design', Senior_Frontend: 1, FullStack: 0, ReactNative: 0, Backend: 1 },
        { skill: 'Node.js', Senior_Frontend: 0, FullStack: 1, ReactNative: 0, Backend: 1 }
    ],
    insights: [
        { text: 'You are eligible for 3 out of 4 jobs with a match score above 75%.', type: 'positive' },
        { text: 'Adding "Kubernetes" and "AWS" to your profile would increase your Backend Engineer match by 18%.', type: 'opportunity' },
        { text: 'Your strongest technical domain is clearly Frontend Architecture.', type: 'highlight' }
    ]
};
