export const mockRecruiterDashboard = {
    metrics: [
        { label: 'Total Candidates', value: 1250, change: '+12%', type: 'up' },
        { label: 'Open Positions', value: 12, change: '0%', type: 'neutral' },
        { label: 'Matched Candidates', value: 845, change: '+8%', type: 'up' },
        { label: 'Interviews Scheduled', value: 42, change: '+15%', type: 'up' },
        { label: 'Avg Match Score', value: 78, change: '+3%', type: 'up' }
    ],
    recentCandidates: [
        { id: 1, name: 'Alice Johnson', role: 'Full Stack Developer', match: 94, status: 'Shortlisted', date: '2024-03-24' },
        { id: 2, name: 'Bob Smith', role: 'Backend Engineer', match: 88, status: 'Screened', date: '2024-03-23' },
        { id: 3, name: 'Charlie Davis', role: 'Data Scientist', match: 76, status: 'Applied', date: '2024-03-23' },
        { id: 4, name: 'Diana Prince', role: 'Frontend Developer', match: 92, status: 'Interview', date: '2024-03-22' },
        { id: 5, name: 'Ethan Hunt', role: 'DevOps Engineer', match: 65, status: 'Rejected', date: '2024-03-21' }
    ],
    openJobs: [
        { id: 1, title: 'Senior Frontend Developer', applicants: 45, avgMatch: 82, status: 'Active' },
        { id: 2, title: 'Backend Engineer (Node.js)', applicants: 32, avgMatch: 75, status: 'Active' },
        { id: 3, title: 'Product Designer', applicants: 18, avgMatch: 88, status: 'Urgent' },
        { id: 4, title: 'QA Lead', applicants: 12, avgMatch: 64, status: 'Closed' }
    ],
    topCandidates: [
        { rank: 1, name: 'Alice Johnson', match: 94, recommendedJob: 'Senior Frontend Developer' },
        { rank: 2, name: 'Diana Prince', match: 92, recommendedJob: 'Senior Frontend Developer' },
        { rank: 3, name: 'Kevin Durant', match: 91, recommendedJob: 'Backend Engineer' }
    ],
    pipeline: [
        { label: 'Applied', count: 450, color: '#94a3b8' },
        { label: 'Screened', count: 280, color: '#6366f1' },
        { label: 'Shortlisted', count: 120, color: '#8b5cf6' },
        { label: 'Interviewed', count: 45, color: '#f59e0b' },
        { label: 'Selected', count: 12, color: '#10b981' }
    ],
    insights: [
        { text: 'Most candidates (65%) are missing AWS skills required for high-tier roles.', type: 'critical' },
        { text: 'Backend Developer role has the highest applicant volume this month.', type: 'trend' },
        { text: 'Average ATS score of applicants increased by 10% since last quarter.', type: 'positive' }
    ],
    tasks: [
        { id: 1, text: 'Review 15 new resumes for Frontend Role', priority: 'High' },
        { id: 2, text: 'Schedule 4 interviews for Backend Role', priority: 'Medium' },
        { id: 3, text: 'Approve 2 new job postings', priority: 'Low' }
    ],
    activity: [
        { id: 1, type: 'upload', user: 'Admin', action: 'Uploaded 50 resumes', time: '2 hours ago' },
        { id: 2, type: 'post', user: 'Recruiter Alex', action: 'Posted new JD: DevOps Engineer', time: '4 hours ago' },
        { id: 3, type: 'match', user: 'AI Assistant', action: 'Found 5 top matches for Backend Role', time: '5 hours ago' }
    ]
};
