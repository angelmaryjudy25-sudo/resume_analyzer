import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import RecruiterSidebar from '../components/recruiter/RecruiterSidebar';
import { mockRecruiterAnalytics } from '../mocks/recruiterAnalytics';

// Sub-components
import ExecutiveSummary from '../components/recruiter-analytics/ExecutiveSummary';
import { HiringFunnelChart, SkillAnalytics } from '../components/recruiter-analytics/FunnelAndSkills';
import { SkillGapAnalytics, JobDemandAnalytics } from '../components/recruiter-analytics/GapAndDemand';
import { MatchScoreDistribution, CandidateQualityAnalytics } from '../components/recruiter-analytics/QualityAndDistribution';
import { AIRecruiterInsights, HiringRecommendations, DepartmentAnalytics } from '../components/recruiter-analytics/InsightPanels';
import { Download, Share2, Calendar, FileText, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const RecruiterAnalytics = () => {
    const { 
        summary, 
        funnel, 
        topSkills, 
        skillGaps, 
        jobDemand, 
        matchDistribution, 
        candidateQuality, 
        departmentMetrics, 
        insights, 
        recommendations 
    } = mockRecruiterAnalytics;

    return (
        <div className="flex bg-slate-50 min-h-screen">
            <RecruiterSidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                 <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 relative z-20">
                    <div className="flex items-center gap-4">
                        <PageHeader title="Talent Intelligence & Analytics" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black uppercase text-slate-500 cursor-pointer hover:bg-slate-100 transition-all">
                            <Calendar size={14} /> Last 30 Days
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black uppercase text-slate-500 cursor-pointer hover:bg-slate-100 transition-all">
                            <Filter size={14} /> All Departments
                        </div>
                        <div className="h-6 w-[1px] bg-slate-200 mx-2" />
                        <button className="p-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                            <Download size={18} />
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 space-y-12 scrollbar-hide">
                    {/* EXECUTIVE SUMMARY */}
                    <ExecutiveSummary data={summary} />

                    {/* FIRST ROW: FUNNEL & TOP SKILLS */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <HiringFunnelChart data={funnel} />
                        <SkillAnalytics topSkills={topSkills} />
                    </div>

                    {/* SECOND ROW: SKILL GAP & JOB DEMAND */}
                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                        <div className="xl:col-span-3">
                            <JobDemandAnalytics demand={jobDemand} />
                        </div>
                        <div className="xl:col-span-2">
                            <SkillGapAnalytics gaps={skillGaps} />
                        </div>
                    </div>

                    {/* THIRD ROW: AI INSIGHTS & RECOMMENDATIONS */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div className="xl:col-span-1">
                            <AIRecruiterInsights insights={insights} />
                        </div>
                        <div className="xl:col-span-2">
                            <HiringRecommendations recommendations={recommendations} />
                        </div>
                    </div>

                    {/* FOURTH ROW: MATCH DISTRIBUTION & QUALITY */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <MatchScoreDistribution distribution={matchDistribution} />
                        <CandidateQualityAnalytics quality={candidateQuality} />
                    </div>

                    {/* FIFTH ROW: DEPARTMENT ANALYTICS */}
                    <DepartmentAnalytics departments={departmentMetrics} />

                    {/* EXPORT ACTIONS */}
                    <div className="flex flex-wrap justify-center gap-4 py-12 border-t border-slate-200">
                        <button className="btn-saas bg-slate-800 text-white flex items-center gap-2 px-8 py-3">
                            <FileText size={18} /> Export Executive Summary (PDF)
                        </button>
                        <button className="btn-saas border border-slate-200 bg-white text-slate-600 flex items-center gap-2 px-8 py-3">
                            <Share2 size={18} /> Share Dashboard Link
                        </button>
                        <button className="btn-saas border border-slate-200 bg-white text-slate-600 flex items-center gap-2 px-8 py-3">
                            <Calendar size={18} /> Schedule Weekly Report
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default RecruiterAnalytics;
