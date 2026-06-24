import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import StatCard from '../components/common/StatCard';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import { mockResumeAnalysis } from '../mocks/resumeAnalysis';
import { motion } from 'framer-motion';
import { 
    Download, 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Cpu,
    BookOpen,
    Briefcase,
    Layout,
    CheckCircle,
    Activity,
    Lightbulb
} from 'lucide-react';

const Linkedin = ({ size = 16, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Github = ({ size = 16, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

// Sub-components
import SkillCard from '../components/resume-analysis/SkillCard';
import EducationTimeline from '../components/resume-analysis/EducationTimeline';
import ExperienceCard from '../components/resume-analysis/ExperienceCard';
import ProjectCard from '../components/resume-analysis/ProjectCard';
import CertificationBadge from '../components/resume-analysis/CertificationBadge';
import AnalysisCard from '../components/resume-analysis/AnalysisCard';

const ResumeAnalysis = () => {
    const [loading, setLoading] = useState(true);
    const { 
        overview, 
        personalInfo, 
        skills, 
        education, 
        experience, 
        projects, 
        certifications, 
        atsAnalysis, 
        suggestions 
    } = mockResumeAnalysis;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex bg-background min-h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <TopNavbar />
                    <div className="p-8"><LoadingSkeleton type="card" count={4} /></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex bg-background min-h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopNavbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        
                        <PageHeader 
                            title="Resume Analysis" 
                            subtitle="Analyze your resume and discover strengths, weaknesses, and opportunities for improvement."
                            action={
                                <button className="btn-saas bg-primary text-white flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90">
                                    <Download size={18} />
                                    Download Report
                                </button>
                            }
                        />

                        {/* SECTION 1: OVERVIEW */}
                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {overview.map((item, i) => (
                                <StatCard key={i} {...item} />
                            ))}
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Left Column (2/3) */}
                            <div className="lg:col-span-2 space-y-8">
                                
                                {/* PERSONAL INFORMATION */}
                                <section className="premium-card p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                                            <User size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Personal Information</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <User size={16} className="text-slate-400" />
                                                <span className="text-sm font-medium">{personalInfo.name}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <Mail size={16} className="text-slate-400" />
                                                <span className="text-sm font-medium">{personalInfo.email}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <Phone size={16} className="text-slate-400" />
                                                <span className="text-sm font-medium">{personalInfo.phone}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <MapPin size={16} className="text-slate-400" />
                                                <span className="text-sm font-medium">{personalInfo.location}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <Linkedin size={16} className="text-slate-400" />
                                                <span className="text-sm font-medium">{personalInfo.linkedin}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <Github size={16} className="text-slate-400" />
                                                <span className="text-sm font-medium">{personalInfo.github}</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* EXPERIENCE */}
                                <section className="premium-card p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 bg-secondary/10 text-secondary rounded-lg">
                                            <Briefcase size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Experience</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {experience.map((exp, i) => (
                                            <ExperienceCard key={i} {...exp} index={i} />
                                        ))}
                                    </div>
                                </section>

                                {/* PROJECTS */}
                                <section>
                                     <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 bg-accent/10 text-accent rounded-lg">
                                            <Layout size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Projects</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {projects.map((proj, i) => (
                                            <ProjectCard key={i} {...proj} index={i} />
                                        ))}
                                    </div>
                                </section>

                                {/* ATS ANALYSIS */}
                                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <AnalysisCard title="ATS Strengths" items={atsAnalysis.strengths} type="strength" />
                                    <AnalysisCard title="ATS Weaknesses" items={atsAnalysis.weaknesses} type="weakness" />
                                </section>

                            </div>

                            {/* Right Column (1/3) */}
                            <div className="lg:col-span-1 space-y-8">

                                {/* SKILLS ANALYSIS */}
                                <section className="premium-card p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 bg-warning/10 text-warning rounded-lg">
                                            <Cpu size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Skills Analysis</h3>
                                    </div>
                                    <div className="space-y-5">
                                        {skills.map((skill, i) => (
                                            <SkillCard key={i} {...skill} index={i} />
                                        ))}
                                    </div>
                                </section>

                                {/* EDUCATION */}
                                <section className="premium-card p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 bg-success/10 text-success rounded-lg">
                                            <BookOpen size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Education</h3>
                                    </div>
                                    <EducationTimeline education={education} />
                                </section>

                                {/* CERTIFICATIONS */}
                                <section className="premium-card p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                                            <CheckCircle size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Certifications</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {certifications.map((cert, i) => (
                                            <CertificationBadge key={i} name={cert} index={i} />
                                        ))}
                                    </div>
                                </section>

                                {/* IMPROVEMENT SUGGESTIONS */}
                                <section>
                                    <AnalysisCard title="AI Suggestions" items={suggestions} type="suggestion" />
                                </section>

                            </div>

                        </div>

                        {/* FINAL CTA */}
                        <div className="flex justify-center pt-8 pb-12">
                            <button className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-900 transition-all active:scale-95">
                                Generate New Analysis Report
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default ResumeAnalysis;
