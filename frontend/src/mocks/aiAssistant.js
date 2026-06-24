export const mockAIAssistantData = {
    history: [
        { id: 1, title: 'Career Path: DevOps', date: '2 hours ago' },
        { id: 2, title: 'Resume ATS Improvement', date: 'Yesterday' },
        { id: 3, title: 'Interview Prep: React', date: '3 days ago' },
    ],
    suggestedPrompts: [
        'Which jobs fit my profile?',
        'How can I become a Data Scientist?',
        'What skills am I missing?',
        'Improve my ATS score.',
        'Recommend projects for Full Stack Development.',
        'Generate interview questions.'
    ],
    sampleConversations: [
        {
            user: "Which jobs fit my profile?",
            ai: {
                type: 'job_recommendation',
                text: "Based on your recent resume analysis, here are the roles where you have the highest suitability:",
                data: [
                    { title: 'Full Stack Developer', score: 92, reasoning: 'Strong React & Node.js skills, relevant project portfolio.' },
                    { title: 'Backend Developer', score: 88, reasoning: 'Expertise in PostgreSQL and System Design.' },
                    { title: 'Cloud Engineer', score: 74, reasoning: 'Solid fundamentals, but missing specific AWS certifications.' }
                ]
            }
        },
        {
            user: "How can I become a DevOps Engineer?",
            ai: {
                type: 'roadmap',
                text: "To transition into a DevOps role, focusing on automation and cloud infrastructure is key. Here is your 4-month transformation roadmap:",
                data: [
                    { month: 'Month 1', title: 'Linux & Networking Basics', tasks: ['Shell Scripting', 'SSH', 'TCP/IP Fundamentals'] },
                    { month: 'Month 2', title: 'Containerization', tasks: ['Docker Fundamentals', 'Images & Volumes', 'Docker Compose'] },
                    { month: 'Month 3', title: 'Cloud Infrastructure', tasks: ['AWS/Azure Basics', 'Infrastructure as Code (Terraform)'] },
                    { month: 'Month 4', title: 'CI/CD & Orchestration', tasks: ['GitHub Actions', 'Jenkins', 'Kubernetes Basics'] }
                ]
            }
        },
        {
            user: "Generate interview questions for React.",
            ai: {
                type: 'interview_prep',
                text: "Here are some commonly asked React interview questions tailored to your Senior experience level:",
                data: [
                    { question: "What is the difference between UseMemo and UseCallback?", difficulty: "Medium" },
                    { question: "Explain the React Fiber Architecture and how it improved rendering.", difficulty: "Hard" },
                    { question: "How do you handle global state without Redux in React 18+?", difficulty: "Medium" },
                    { question: "Describe the reconciliation process in React.", difficulty: "Hard" }
                ]
            }
        },
        {
            user: "How can I improve my ATS score?",
            ai: {
                type: 'ats_advice',
                text: "Your current ATS score is 82%. To reach 95%+, I recommend the following adjustments:",
                data: [
                    { tip: "Quantify your achievements (e.g., 'Reduced load time by 40%')", priority: "High" },
                    { tip: "Add 'Cloud Computing' and 'Microservices' to your core skills section", priority: "High" },
                    { tip: "Ensure your resume uses a standard single-column layout for better parsing", priority: "Medium" }
                ]
            }
        }
    ],
    quickActions: [
        { label: 'Analyze Resume', prompt: 'Analyze my current resume for ATS compatibility.' },
        { label: 'Find Matching Jobs', prompt: 'Which jobs currently on the market match my profile?' },
        { label: 'Generate Roadmap', prompt: 'Convert my skill gaps into a 3-month learning roadmap.' },
        { label: 'Practice Interview', prompt: 'Give me 5 hard interview questions for a Full Stack role.' }
    ],
    contextualInsights: [
        { text: "Your strongest area is Full Stack Development.", type: 'positive' },
        { text: "Adding AWS certification would increase your match score by 8%.", type: 'opportunity' }
    ]
};
