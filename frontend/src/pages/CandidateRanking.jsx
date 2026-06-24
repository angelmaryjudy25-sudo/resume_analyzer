import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import RecruiterSidebar from '../components/recruiter/RecruiterSidebar';
import AppShell from '../components/layout/AppShell';
import LoadingSkeleton from '../components/common/LoadingSkeleton';

// Sub-components
import { RankingHero, CandidateLeaderboard } from '../components/candidate-ranking/RankingHighlights';
import CandidateRankingTable from '../components/candidate-ranking/CandidateRankingTable';
import CandidateProfileDrawer from '../components/candidate-ranking/CandidateProfileDrawer';
import JobCandidateMatrix from '../components/candidate-ranking/JobCandidateMatrix';
import MultiJobUploader from '../components/job-ranking/MultiJobUploader'; // Reusing the high-quality uploader
import { mockRankingData } from '../mocks/candidateRanking';
import { Upload, FileText, BarChart3, Download, Share2, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CandidateRanking = () => {
    const [loading, setLoading] = useState(false);
    const [analysisShown, setAnalysisShown] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const { hero, candidates, jobs, matrix } = mockRankingData;

    const handleAnalyze = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setAnalysisShown(true);
        }, 2000);
    };

    const handleSelectCandidate = (candidate) => {
        setSelectedCandidate(candidate);
        setIsDrawerOpen(true);
    };

    return (
        <AppShell sidebar={<RecruiterSidebar />} className="bg-slate-50">
            <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 relative z-20">
                    <div className="flex items-center gap-4">
                        <PageHeader title="Candidate Ranking & Screening" />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Zap size={20} /></button>
                        <div className="h-6 w-[1px] bg-slate-200" />
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100" />
                            <span className="text-xs font-black text-slate-700 uppercase">Admin Recruiter</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 space-y-12 scrollbar-hide">
                    {/* UPLOAD WORKSPACE */}
                    {!analysisShown && (
                        <div className="max-w-5xl mx-auto space-y-8">
                            <div className="text-center space-y-4 mb-12">
                                <h1 className="text-4xl font-black text-slate-800">Flagship AI Screening</h1>
                                <p className="text-slate-500 font-medium text-lg">Upload your candidate pool and target job descriptions for bulk ranking.</p>
                            </div>
                            <MultiJobUploader 
                                onAnalyze={handleAnalyze} 
                                title="Batch Analysis Workspace"
                                resumeLabel="Candidate Resumes (PDF/DOCX)"
                                jdLabel="Active Job Descriptions"
                            />
                        </div>
                    )}

                    {loading && (
                        <div className="max-w-7xl mx-auto space-y-12">
                            <div className="h-64 skeleton bg-white rounded-3xl" />
                            <LoadingSkeleton type="card" count={3} />
                        </div>
                    )}

                    {analysisShown && !loading && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="max-w-7xl mx-auto space-y-12"
                        >
                            {/* HERO STATS */}
                            <RankingHero data={hero} />

                            {/* LEADERBOARD */}
                            <section className="space-y-6">
                                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Top AI Selections</h3>
                                <CandidateLeaderboard topCandidates={candidates} />
                            </section>

                            {/* MAIN MATRIX & TABLE */}
                            <div className="space-y-12">
                                <CandidateRankingTable 
                                    candidates={candidates} 
                                    onSelectCandidate={handleSelectCandidate} 
                                />

                                <JobCandidateMatrix 
                                    matrix={matrix} 
                                    jobs={jobs} 
                                />
                            </div>

                            {/* AI INSIGHTS PANEL */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-indigo-600 text-white rounded-3xl relative overflow-hidden shadow-xl shadow-indigo-100">
                                    <div className="absolute top-0 right-0 p-8 opacity-10"><Sparkles size={120} /></div>
                                    <div className="relative z-10">
                                        <h3 className="text-[10px] font-black text-indigo-200 uppercase tracking-widest mb-4">Market Trend Analysis</h3>
                                        <p className="text-xl font-bold leading-relaxed mb-6">
                                            "80% of candidates in this pool are strong in React but lack Kubernetes experience. We recommend adjusting the 'Senior' role requirements or providing internal training."
                                        </p>
                                        <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest">Generate Strategy PDF</button>
                                    </div>
                                </div>
                                <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Pipeline Efficiency</h3>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Screening Speed', val: '2.4s per app', color: 'text-success' },
                                            { label: 'Quality of Hire Score', val: '8.8/10', color: 'text-primary' },
                                            { label: 'Candidate Engagement', val: 'Low', color: 'text-danger' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0">
                                                <span className="text-sm font-bold text-slate-500">{item.label}</span>
                                                <span className={`font-black ${item.color}`}>{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* EXPORT OPTIONS */}
                            <div className="flex flex-wrap justify-center gap-4 py-12 border-t border-slate-200">
                                <button className="btn-saas bg-slate-800 text-white flex items-center gap-2 px-8 py-3">
                                    <Download size={18} /> Export Full Ranking (Excel)
                                </button>
                                <button className="btn-saas border border-slate-200 bg-white text-slate-600 flex items-center gap-2 px-8 py-3">
                                    <Share2 size={18} /> Share Analysis with Team
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* ACTIONS PANEL */}
                    <CandidateProfileDrawer 
                        isOpen={isDrawerOpen} 
                        onClose={() => setIsDrawerOpen(false)} 
                        candidate={selectedCandidate}
                    />
                </main>
        </AppShell>
    );
};

export default CandidateRanking;
