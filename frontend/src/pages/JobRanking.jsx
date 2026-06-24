import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import { mockMultiJobAnalysis } from '../mocks/multiJobAnalysis';

// Sub-components
import MultiJobUploader from '../components/job-ranking/MultiJobUploader';

import JobLeaderboard from '../components/job-ranking/JobLeaderboard';
import JobComparisonChart from '../components/job-ranking/JobComparisonChart';
import RecommendationCard from '../components/job-ranking/RecommendationCard';
import JobComparisonTable from '../components/job-ranking/JobComparisonTable';
import SkillGapHeatmap from '../components/job-ranking/SkillGapHeatmap';
import OpportunityInsights from '../components/job-ranking/OpportunityInsights';
import { Download, Share2, Save } from 'lucide-react';

const JobRanking = () => {
    const [loading, setLoading] = useState(false);
    const [analysisShown, setAnalysisShown] = useState(false);
    const { 
        rankedJobs, 
        recommendation, 
        skillGapHeatmap, 
        insights 
    } = mockMultiJobAnalysis;

    const handleAnalyze = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setAnalysisShown(true);
        }, 2000);
    };

    return (
        <div className="flex bg-background min-h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopNavbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <PageHeader 
                            title="Multiple Job Matching & Ranking" 
                            subtitle="Upload multiple job descriptions to find the best fit for your profile."
                        />

                        {/* UPLOAD SECTION */}
                        {!analysisShown && (
                            <MultiJobUploader onAnalyze={handleAnalyze} />
                        )}

                        {loading && (
                            <div className="space-y-8">
                                <div className="h-64 skeleton bg-white border border-slate-200 rounded-2xl" />
                                <LoadingSkeleton type="card" count={3} />
                            </div>
                        )}

                        {analysisShown && !loading && (
                            <div className="space-y-12 animate-in fade-in duration-1000">
                                
                                {/* LEADERBOARD & RECOMMENDATION */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <JobLeaderboard jobs={rankedJobs} />
                                    </div>
                                    <div className="lg:col-span-1 space-y-8">
                                        <RecommendationCard recommendation={recommendation} />
                                        <OpportunityInsights insights={insights} />
                                    </div>
                                </div>

                                {/* CHARTS COMPARISON */}
                                <JobComparisonChart jobs={rankedJobs} />

                                {/* TABULAR COMPARISON */}
                                <JobComparisonTable jobs={rankedJobs} />

                                {/* SKILL HEATMAP */}
                                <SkillGapHeatmap heatmapData={skillGapHeatmap} />

                                {/* EXPORT ACTIONS */}
                                <div className="flex flex-wrap justify-center gap-4 pb-12">
                                    <button className="btn-saas bg-slate-800 text-white flex items-center gap-2 px-8 py-3">
                                        <Save size={18} /> Save Analysis
                                    </button>
                                    <button className="btn-saas border border-slate-200 bg-white text-slate-600 flex items-center gap-2 px-8 py-3 hover:bg-slate-50">
                                        <Download size={18} /> Export Analysis (PDF)
                                    </button>
                                    <button className="btn-saas border border-slate-200 bg-white text-slate-600 flex items-center gap-2 px-8 py-3 hover:bg-slate-50">
                                        <Share2 size={18} /> Share Results
                                    </button>
                                </div>

                                {/* RESET ACTION */}
                                <div className="text-center pt-8 border-t border-slate-200">
                                    <p className="text-slate-400 text-sm mb-4">Need to rank different jobs?</p>
                                    <button 
                                        onClick={() => setAnalysisShown(false)}
                                        className="text-primary font-black hover:underline"
                                    >
                                        Start New Ranking Session
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

export default JobRanking;
