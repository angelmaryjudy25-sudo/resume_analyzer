import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const CertificationBadge = ({ name, index }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-primary/30 transition-all cursor-default group"
    >
        <CheckCircle2 size={16} className="text-success" />
        <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">{name}</span>
    </motion.div>
);

export default CertificationBadge;
