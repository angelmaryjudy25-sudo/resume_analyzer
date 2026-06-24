import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const UploaderPanel = ({ title, accept, onFileSelect, typeLabel }) => {
    const [file, setFile] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        const selected = acceptedFiles[0];
        if (selected) {
            setFile(selected);
            onFileSelect(selected);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop, 
        maxFiles: 1,
        accept: accept
    });

    const removeFile = (e) => {
        e.stopPropagation();
        setFile(null);
        onFileSelect(null);
    };

    return (
        <div 
            {...getRootProps()} 
            className={`flex-1 border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer ${
                isDragActive ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary/50'
            } bg-white shadow-sm relative group`}
        >
            <input {...getInputProps()} />
            {!file ? (
                <div className="text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                        <Upload size={32} />
                    </div>
                    <p className="text-base font-bold text-slate-800 mb-1">{title}</p>
                    <p className="text-xs text-slate-400 font-medium">
                        Accepted: <span className="text-slate-500 uppercase">{Object.keys(accept).join(', ')}</span>
                    </p>
                </div>
            ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="p-3 bg-white text-primary rounded-xl shadow-sm shrink-0">
                            <File size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-800 truncate">{file.name}</p>
                            <div className="flex items-center gap-3 mt-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{formatFileSize(file.size)}</p>
                                <p className="text-[10px] text-success font-black uppercase flex items-center gap-1">
                                    <CheckCircle size={10} /> Ready
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={removeFile}
                            className="p-1 hover:bg-slate-200 rounded-md transition-colors text-slate-400"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

const DoubleUploader = ({ onAnalyze }) => {
    const [resumeFile, setResumeFile] = useState(null);
    const [jdFile, setJdFile] = useState(null);

    const acceptResume = {
        'application/pdf': ['.pdf'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    };

    const acceptJD = {
        'application/pdf': ['.pdf'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
        'text/plain': ['.txt']
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <UploaderPanel 
                    title="Upload Resume" 
                    accept={acceptResume}
                    onFileSelect={(f) => setResumeFile(f)} 
                    typeLabel="Resume"
                />
                <UploaderPanel 
                    title="Upload Job Description" 
                    accept={acceptJD}
                    onFileSelect={(f) => setJdFile(f)} 
                    typeLabel="JD"
                />
            </div>
            
            <AnimatePresence>
                {resumeFile && jdFile && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex justify-center pt-4"
                    >
                        <button 
                            onClick={onAnalyze}
                            className="btn-saas bg-primary text-white px-12 py-4 text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 flex items-center gap-3"
                        >
                            Start AI Job Match Analysis <CheckCircle size={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DoubleUploader;

