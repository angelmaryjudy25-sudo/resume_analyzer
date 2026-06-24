import React from 'react';
import { Briefcase, Building2, MapPin, DollarSign, Award, Target } from 'lucide-react';

const JobDetailsCard = ({ details }) => (
    <div className="premium-card p-6 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Briefcase size={80} />
        </div>
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Job Details</h3>
        
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0">
                    <Building2 size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 leading-tight">{details.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{details.company}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                    <MapPin size={16} className="text-slate-400" />
                    <span className="text-xs font-bold">{details.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                    <DollarSign size={16} className="text-slate-400" />
                    <span className="text-xs font-bold">{details.salaryRange}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                    <Award size={16} className="text-slate-400" />
                    <span className="text-xs font-bold">{details.experienceRequired}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                    <Target size={16} className="text-slate-400" />
                    <span className="text-xs font-bold truncate">{details.certificationsRequired}</span>
                </div>
            </div>

            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Core Stack Required</p>
                <div className="flex flex-wrap gap-2">
                    {details.requiredSkills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default JobDetailsCard;
