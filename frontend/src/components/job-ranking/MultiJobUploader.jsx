import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, CheckCircle, X, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const MultiJobUploader = ({ onAnalyze }) => {
    const [resume, setResume] = useState(null);
    const [jdFiles, setJdFiles] = useState([]);

    const onDropResume = useCallback(acceptedFiles => {
        if (acceptedFiles[0]) setResume(acceptedFiles[0]);
    }, []);

    const onDropJDs = useCallback(acceptedFiles => {
        setJdFiles(prev => [...prev, ...acceptedFiles]);
    }, []);

    const { getRootProps: getResumeProps, getInputProps: getResumeInput } = useDropzone({
        onDrop: onDropResume,
        maxFiles: 1,
        accept: { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] }
    });

    const { getRootProps: getJDProps, getInputProps: getJDInput } = useDropzone({
        onDrop: onDropJDs,
        accept: { 
            'application/pdf': ['.pdf'], 
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'text/plain': ['.txt']
        }
    });

    const removeJD = (index) => {
        setJdFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* RESUME UPLOAD */}
                <div {...getResumeProps()} className="premium-card p-8 border-2 border-dashed border-slate-200 hover:border-primary/50 transition-all cursor-pointer bg-white group text-center">
                    <input {...getResumeInput()} />
                    {!resume ? (
                        <>
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:text-primary transition-colors">
                                <Upload size={32} />
                            </div>
                            <h3 className="font-bold text-slate-800">Upload Resume</h3>
                            <p className="text-xs text-slate-400 mt-1">PDF, DOCX supported</p>
                        </>
                    ) : (
                        <div className="flex items-center gap-4 text-left p-4 bg-primary/5 rounded-xl border border-primary/20">
                            <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><File size={24} /></div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-slate-800 truncate">{resume.name}</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{formatFileSize(resume.size)}</p>
                            </div>
                            <CheckCircle className="text-success" size={20} />
                        </div>
                    )}
                </div>

                {/* JD UPLOAD */}
                <div {...getJDProps()} className="premium-card p-8 border-2 border-dashed border-slate-200 hover:border-primary/50 transition-all cursor-pointer bg-white group text-center">
                    <input {...getJDInput()} />
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:text-primary transition-colors">
                        <List size={32} />
                    </div>
                    <h3 className="font-bold text-slate-800">Upload Job Descriptions</h3>
                    <p className="text-xs text-slate-400 mt-1">You can upload multiple files (PDF, DOCX, TXT)</p>
                </div>
            </div>

            {/* FILE LIST */}
            <AnimatePresence>
                {jdFiles.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Added Job Descriptions ({jdFiles.length})</h4>
                            <button onClick={() => setJdFiles([])} className="text-[10px] font-black text-danger uppercase hover:underline">Clear All</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {jdFiles.map((file, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, scale: 0.9 }} 
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-3 bg-white border border-slate-100 rounded-xl flex items-center gap-3 shadow-sm"
                                >
                                    <div className="p-2 bg-slate-50 text-slate-400 rounded-lg"><File size={16} /></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-bold text-slate-700 truncate">{file.name}</p>
                                        <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{formatFileSize(file.size)}</p>
                                    </div>
                                    <button onClick={() => removeJD(i)} className="text-slate-300 hover:text-danger"><X size={14} /></button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {resume && jdFiles.length > 0 && (
                <div className="flex justify-center pt-4">
                    <button 
                        onClick={onAnalyze}
                        className="btn-saas bg-primary text-white px-12 py-4 text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 flex items-center gap-3"
                    >
                        Start Batch Job Analysis <CheckCircle size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MultiJobUploader;
