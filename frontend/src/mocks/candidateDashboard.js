import { 
    Award, 
    Target, 
    TrendingUp, 
    Cpu, 
    MousePointerClick 
} from 'lucide-react';

export const mockDashboardData = {
    stats: [
        { label: 'Resume Score', value: 86, suffix: '%', trend: '+4%', icon: Award, color: 'primary' },
        { label: 'ATS Score', value: 91, suffix: '%', trend: '+2%', icon: Target, color: 'success' },
        { label: 'Job Match Score', value: 82, suffix: '%', trend: '+5%', icon: TrendingUp, color: 'accent' },
        { label: 'Skills Detected', value: 24, suffix: '', trend: '+1', icon: Cpu, color: 'warning' },
        { label: 'Applications', value: 12, suffix: '', trend: '+3', icon: MousePointerClick, color: 'secondary' },
    ],
    skills: [
        { name: 'Python', level: 92, color: '#4F46E5' },
        { name: 'React Context', level: 88, color: '#7C3AED' },
        { name: 'Django REST', level: 78, color: '#10B981' },
        { name: 'PostgreSQL', level: 85, color: '#06B6D4' },
        { name: 'Framer Motion', level: 70, color: '#F59E0B' },
    ],
    analyses: [
        { id: 1, name: 'Full-Stack-Dev-v2.pdf', date: 'Oct 24, 2023', score: 86, status: 'Optimized' },
        { id: 2, name: 'Data-Science-Profile.pdf', date: 'Oct 20, 2023', score: 72, status: 'Needs Review' },
        { id: 3, name: 'PM-Draft-01.docx', date: 'Oct 15, 2023', score: 45, status: 'Critical Issues' },
    ],
    roadmap: [
        { status: 'completed', title: 'JavaScript Fundamentals', date: 'Sept 2023' },
        { status: 'completed', title: 'React Hooks & State', date: 'Oct 2023' },
        { status: 'in-progress', title: 'Backend with Django', date: 'Ongoing' },
        { status: 'upcoming', title: 'CI/CD Pipelines', date: 'Dec 2023' },
    ]
};
