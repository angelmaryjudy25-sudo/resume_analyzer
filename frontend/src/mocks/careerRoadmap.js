export const mockCareerRoadmap = {
    hero: {
        targetJob: 'Full Stack Developer',
        currentMatch: 82,
        targetMatch: 100,
        estimatedTime: '4 Months'
    },
    skillGaps: [
        { skill: 'AWS Cloud', priority: 'High', difficulty: 'Hard', estTime: '40 Hours' },
        { skill: 'Docker', priority: 'High', difficulty: 'Medium', estTime: '15 Hours' },
        { skill: 'Kubernetes', priority: 'Medium', difficulty: 'Hard', estTime: '30 Hours' },
        { skill: 'CI/CD (Jenkins/GitHub Actions)', priority: 'Medium', difficulty: 'Medium', estTime: '10 Hours' }
    ],
    timeline: [
        { month: 1, title: 'AWS Cloud Mastery', tasks: ['Identity & Access Management (IAM)', 'EC2 & S3 Fundamentals', 'VPC & Networking'] },
        { month: 2, title: 'Containerization & DevOps', tasks: ['Dockerizing Node.js apps', 'Multi-stage builds', 'GitHub Actions Workflows'] },
        { month: 3, title: 'Orchestration & Scale', tasks: ['Kubernetes Cluster Setup', 'Pods & Services', 'Helm Charts'] },
        { month: 4, title: 'Advanced Fullstack & Interview Prep', tasks: ['Backend Performance Optimization', 'System Design Interviews', 'Portfolio Refinement'] }
    ],
    courses: [
        { name: 'AWS Cloud Practitioner Essentials', provider: 'AWS / Coursera', duration: '20 Hours', difficulty: 'Beginner' },
        { name: 'Docker & Kubernetes: The Practical Guide', provider: 'Udemy', duration: '35 Hours', difficulty: 'Intermediate' },
        { name: 'Complete DevOps Bootcamp', provider: 'ZeroToMastery', duration: '50 Hours', difficulty: 'Mixed' }
    ],
    projects: [
        { name: 'Cloud-Native Resume Analyzer', tech: ['AWS Lambda', 'React', 'S3'], difficulty: 'Intermediate', description: 'Build a serverless application that analyzes PDF resumes using AWS Textract.' },
        { name: 'Multi-Container CI/CD Pipeline', tech: ['Docker', 'GitHub Actions', 'EC2'], difficulty: 'Advanced', description: 'Create a full pipeline that builds, tests, and deploys a microservices app.' }
    ],
    certifications: [
        { name: 'AWS Certified Cloud Practitioner', priority: 'High', estTime: '2 Weeks' },
        { name: 'Docker Certified Associate', priority: 'Medium', estTime: '1 Month' }
    ],
    interviewPrep: [
        { topic: 'System Design: Scalability & Load Balancing', done: false },
        { topic: 'React Internals: Reconciliation & Fiber', done: true },
        { topic: 'Node.js Event Loop & Performance', done: false },
        { topic: 'SQL vs NoSQL: Choosing the right DB', done: true },
        { topic: 'Cloud Fundamentals & AWS Services', done: false }
    ],
    progress: {
        completed: 45,
        inProgress: 20,
        remaining: 35
    },
    careerImpact: [
        { step: 'Starting Point', match: 82, color: 'slate' },
        { step: 'After AWS Cloud', match: 88, color: 'blue' },
        { step: 'After Docker Mastery', match: 93, color: 'cyan' },
        { step: 'After Certification', match: 98, color: 'success' }
    ],
    aiRecommendations: [
        { text: 'Prioritize the AWS Cloud Practitioner certification as it covers 65% of your current architectural knowledge gaps.', type: 'strategy' },
        { text: 'Building the "Cloud-Native Resume Analyzer" project will check off 3 major skills at once.', type: 'efficiency' },
        { text: 'You are already stronger than 80% of candidates in React; focus purely on Backend & DevOps now.', type: 'focus' }
    ]
};
