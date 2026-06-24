export const mockAdminDashboard = {
    overview: [
        { label: 'Total Users', value: 5240, change: '+12%', type: 'up' },
        { label: 'Total Candidates', value: 4120, change: '+15%', type: 'up' },
        { label: 'Total Recruiters', value: 245, change: '+5%', type: 'up' },
        { label: 'Total Jobs', value: 580, change: '+8%', type: 'up' },
        { label: 'Total Matches', value: 12450, change: '+20%', type: 'up' },
        { label: 'AI Requests', value: 48200, change: '+32%', type: 'up' }
    ],
    users: [
        { id: 1, name: 'Alice Admin', email: 'alice@resumes.ai', role: 'Admin', status: 'Active', date: '2023-01-15' },
        { id: 2, name: 'John Doe', email: 'john@gmail.com', role: 'Candidate', status: 'Active', date: '2024-03-20' },
        { id: 3, name: 'Google HR', email: 'hr@google.com', role: 'Recruiter', status: 'Active', date: '2023-11-10' },
        { id: 4, name: 'Bob Smith', email: 'bob@yahoo.com', role: 'Candidate', status: 'Inactive', date: '2024-01-05' },
        { id: 5, name: 'Meta Careers', email: 'hiring@meta.com', role: 'Recruiter', status: 'Pending', date: '2024-03-22' }
    ],
    aiModels: [
        { name: 'Resume Parser', status: 'Healthy', requests: '12.5k', latency: '450ms', errorRate: '0.2%' },
        { name: 'Job Matcher', status: 'Healthy', requests: '8.2k', latency: '820ms', errorRate: '0.5%' },
        { name: 'Roadmap AI', status: 'Warning', requests: '4.1k', latency: '2.4s', errorRate: '2.1%' },
        { name: 'Career Assistant', status: 'Healthy', requests: '23.4k', latency: '1.1s', errorRate: '0.8%' }
    ],
    systemHealth: {
        cpu: 42,
        memory: 68,
        storage: 24,
        apiRequests: 1250,
        dbStatus: 'Operational'
    },
    auditLogs: [
        { user: 'Alice Admin', action: 'Disabled User #402', category: 'Admin', time: '5 mins ago' },
        { user: 'Google HR', action: 'Uploaded 50 Resumes', category: 'Recruiter', time: '12 mins ago' },
        { user: 'AI System', action: 'Model Roadmap AI V1 → V2', category: 'AI Event', time: '1 hour ago' },
        { user: 'John Doe', action: 'Generated Career Roadmap', category: 'Candidate', time: '2 hours ago' }
    ],
    growth: [
        { month: 'Oct', users: 3200, jobs: 400 },
        { month: 'Nov', users: 3800, jobs: 450 },
        { month: 'Dec', users: 4400, jobs: 480 },
        { month: 'Jan', users: 5240, jobs: 580 }
    ],
    notifications: [
        { id: 1, text: 'New Recruiter Registered: Meta Careers', type: 'info' },
        { id: 2, text: 'AI Model Roadmap AI: Latency spike detected', type: 'warning' },
        { id: 3, text: 'System Update: V1.2.4 successfully deployed', type: 'success' },
        { id: 4, text: 'Unauthorized login attempt from 192.168.1.1', type: 'danger' }
    ]
};
