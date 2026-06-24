import { 
    Award, 
    Target, 
    Calendar, 
    FileText 
} from 'lucide-react';

export const mockResumeAnalysis = {
    overview: [
        { label: 'Resume Name', value: 'FullStack_Dev_v2.pdf', suffix: '', icon: FileText, color: 'primary' },
        { label: 'Upload Date', value: 'Oct 24, 2023', suffix: '', icon: Calendar, color: 'accent' },
        { label: 'Resume Score', value: 86, suffix: '%', icon: Award, color: 'success' },
        { label: 'ATS Score', value: 91, suffix: '%', icon: Target, color: 'secondary' },
    ],
    personalInfo: {
        name: 'Anandhu S',
        email: 'anandhu@example.com',
        phone: '+91 98765 43210',
        location: 'Kochi, Kerala',
        linkedin: 'linkedin.com/in/anandhus',
        github: 'github.com/anandhu-sudo'
    },
    skills: [
        { name: 'Python', proficiency: 92 },
        { name: 'React.js', proficiency: 88 },
        { name: 'Django', proficiency: 80 },
        { name: 'Machine Learning', proficiency: 75 },
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'Docker', proficiency: 70 },
    ],
    education: [
        { degree: 'B.Tech in Computer Science', college: 'Model Engineering College', cgpa: '8.4', year: '2020 - 2024' },
        { degree: 'Higher Secondary', college: 'St. Thomas School', cgpa: '9.2', year: '2018 - 2020' },
    ],
    experience: [
        { 
            company: 'Tech Solutions Inc', 
            role: 'Full Stack Intern', 
            duration: 'Jan 2023 - June 2023', 
            description: 'Assisted in building responsive dashboards and integrating RESTful APIs using React and Django.' 
        },
        { 
            company: 'AppFlow Systems', 
            role: 'Web Developer Intern', 
            duration: 'May 2022 - July 2022', 
            description: 'Developed front-end mockups and improved page load performance by 20%.' 
        },
    ],
    projects: [
        { 
            name: 'AI Resume Analyzer', 
            tech: ['React', 'Django', 'Gemini AI'], 
            description: 'An intelligent platform to help candidates optimize their resumes using AI feedback.' 
        },
        { 
            name: 'Smart Bus Tracker', 
            tech: ['Flutter', 'Firebase'], 
            description: 'Real-time GPS tracking for college buses with dynamic route updates.' 
        },
    ],
    certifications: [
        'AWS Cloud Practitioner',
        'Google Data Analytics Professional',
        'IBM AI Fundamentals',
        'Meta Front-end Developer'
    ],
    atsAnalysis: {
        strengths: [
            'Strong technical skills in modern frameworks',
            'Multiple relevant internships in web development',
            'Clear and professional resume formatting'
        ],
        weaknesses: [
            'Missing cloud deployment experience (e.g., AWS/GCP)',
            'Limited industry-specific vocabulary for senior roles',
            'Project descriptions could be more quantified'
        ]
    },
    suggestions: [
        { text: 'Add more quantified achievements (e.g., "Increased performance by 20%")', priority: 'high' },
        { text: 'Include more cloud-related terminology or certifications', priority: 'medium' },
        { text: 'Expand on the "Smart Bus Tracker" technical complexities', priority: 'low' }
    ]
};
