import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import { mockJobMatch } from '../mocks/jobMatchAnalysis';

// Sub-components
import DoubleUploader from '../components/job-match/DoubleUploader';
import MatchHero from '../components/job-match/MatchHero';
import EligibilityBreakdown from '../components/job-match/EligibilityBreakdown';
import SuitabilityCard from '../components/job-match/SuitabilityCard';
import SkillGapTable from '../components/job-match/SkillGapTable';
import RoadmapPreview from '../components/job-match/RoadmapPreview';
import JobDetailsCard from '../components/job-match/JobDetailsCard';
import AIInsightCard from '../components/job-match/AIInsightCard';
import { Download, Share2 } from 'lucide-react';

const JobMatching = () => {
    const [loading, setLoading] = useState(false);
    const [analysisShown, setAnalysisShown] = useState(false);
    const { 
        jobDetails, 
        matchScore, 
        matchLabel, 
        matchColor, 
        eligibility, 
        suitablePoints, 
        gapPoints, 
        skillGaps, 
        miniRoadmap, 
        aiInsights 
    } = mockJobMatch;

    const handleAnalyze = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setAnalysisShown(true);
        }, 1500);
    };

    return (
        <div className="flex bg-background min-h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopNavbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <PageHeader 
                            title="AI Job Matching" 
                            subtitle="Compare your resume against any job description to see your fit score."
                        />

                        {/* UPLOAD SECTION */}
                        {!analysisShown && (
                            <DoubleUploader onAnalyze={handleAnalyze} />
                        )}

                        {loading && (
                            <div className="space-y-8">
                                <div className="h-64 skeleton bg-white border border-slate-200 rounded-2xl" />
                                <LoadingSkeleton type="card" count={3} />
                            </div>
                        )}

                        {analysisShown && !loading && (
                            <div className="space-y-10 animate-in fade-in duration-700">
                                
                                {/* HERO & BREAKDOWN */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <MatchHero score={matchScore} label={matchLabel} color={matchColor} />
                                    </div>
                                    <div className="lg:col-span-1">
                                        <EligibilityBreakdown eligibility={eligibility} />
                                    </div>
                                </div>

                                {/* ANALYSIS CARDS */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <SuitabilityCard title="Why you are suitable" items={suitablePoints} type="success" />
                                    <SuitabilityCard title="Why you are not fully eligible" items={gapPoints} type="warning" />
                                </div>

                                {/* SKILL GAPS & JOB DETAILS */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <SkillGapTable skillGaps={skillGaps} />
                                    </div>
                                    <div className="lg:col-span-1 space-y-8">
                                        <JobDetailsCard details={jobDetails} />
                                        <AIInsightCard insights={aiInsights} />
                                    </div>
                                </div>

                                {/* ROADMAP PREVIEW */}
                                <RoadmapPreview roadmap={miniRoadmap} />

                                {/* EXPORT ACTIONS */}
                                <div className="flex justify-center gap-4 pb-12">
                                    <button className="btn-saas bg-slate-800 text-white flex items-center gap-2">
                                        <Download size={18} /> Download Detailed PDF
                                    </button>
                                    <button className="btn-saas border border-slate-200 text-slate-600 flex items-center gap-2 hover:bg-slate-50">
                                        <Share2 size={18} /> Share Analysis
                                    </button>
                                </div>

                                {/* FOOTER RE-RUN */}
                                <div className="text-center pt-8 border-t border-slate-200">
                                    <p className="text-slate-400 text-sm mb-4">Want to try a different combination?</p>
                                    <button 
                                        onClick={() => setAnalysisShown(false)}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Run New Job Matching Analysis
                                    </button>
                                </div>

                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
};

export default JobMatching;
