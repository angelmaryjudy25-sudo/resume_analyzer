import React from 'react';
import Sidebar from '../components/Sidebar';
import AppShell from '../components/layout/AppShell';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import { mockCareerRoadmap } from '../mocks/careerRoadmap';

// Sub-components
import RoadmapHero from '../components/roadmap/RoadmapHero';
import SkillGapSummary from '../components/roadmap/SkillGapSummary';
import LearningTimeline from '../components/roadmap/LearningTimeline';
import { CourseCard, ProjectRecommendationCard } from '../components/roadmap/ResourceCards';
import { CertificationRoadmap, InterviewPrepChecklist } from '../components/roadmap/PreparationCards';
import { ProgressTracker, CareerImpactAnalysis } from '../components/roadmap/AnalysisCards';
import AIRecommendationCard from '../components/roadmap/AIRecommendationCard';
import { Download, Share2, Save } from 'lucide-react';

const CareerRoadmap = () => {
    const { 
        hero, 
        skillGaps, 
        timeline, 
        courses, 
        projects, 
        certifications, 
        interviewPrep, 
        progress, 
        careerImpact, 
        aiRecommendations 
    } = mockCareerRoadmap;

    return (
        <AppShell sidebar={<Sidebar />}>
                <TopNavbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <PageHeader 
                            title="AI Career Roadmap" 
                            subtitle="Your personalized path to mastering the required skills and landing your dream job."
                        />

                        {/* HERO SECTION */}
                        <RoadmapHero data={hero} />

                        {/* SKILL GAP SUMMARY */}
                        <SkillGapSummary gaps={skillGaps} />

                        {/* TIMELINE & PREP */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <LearningTimeline timeline={timeline} />
                            </div>
                            <div className="lg:col-span-1 space-y-8">
                                <ProgressTracker progress={progress} />
                                <CertificationRoadmap certifications={certifications} />
                            </div>
                        </div>

                        {/* CAREER IMPACT */}
                        <CareerImpactAnalysis impact={careerImpact} />

                        {/* RESOURCES & CHECKLIST */}
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                            <div className="xl:col-span-3 space-y-12">
                                {/* COURSES */}
                                <section>
                                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Recommended Learning Paths</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {courses.map((course, i) => (
                                            <CourseCard key={i} course={course} />
                                        ))}
                                    </div>
                                </section>

                                {/* PROJECTS */}
                                <section>
                                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Critical Hands-on Projects</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {projects.map((project, i) => (
                                            <ProjectRecommendationCard key={i} project={project} />
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="xl:col-span-1 space-y-8">
                                <InterviewPrepChecklist checklist={interviewPrep} />
                                <AIRecommendationCard recommendations={aiRecommendations} />
                            </div>
                        </div>

                        {/* EXPORT ACTIONS */}
                        <div className="flex flex-wrap justify-center gap-4 pb-12">
                            <button className="btn-saas bg-slate-800 text-white flex items-center gap-2 px-8 py-3">
                                <Save size={18} /> Save Roadmap
                            </button>
                            <button className="btn-saas border border-slate-200 bg-white text-slate-600 flex items-center gap-2 px-8 py-3 hover:bg-slate-50">
                                <Download size={18} /> Download PDF Roadmap
                            </button>
                            <button className="btn-saas border border-slate-200 bg-white text-slate-600 flex items-center gap-2 px-8 py-3 hover:bg-slate-50">
                                <Share2 size={18} /> Share Journey
                            </button>
                        </div>
                    </div>
                </main>
        </AppShell>
    );
};

export default CareerRoadmap;
