import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeUploader = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('idle'); // idle, uploading, success

    const onDrop = useCallback(acceptedFiles => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile) {
            setFile(selectedFile);
            setStatus('uploading');
            setTimeout(() => setStatus('success'), 1500);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        maxFiles: 1
    });

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Upload size={18} className="text-primary" />
                    AI Resume Analysis
                </h3>
            </div>
            
            <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all cursor-pointer ${isDragActive ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary/50 hover:bg-slate-50'}`}
            >
                <input {...getInputProps()} />
                
                <AnimatePresence mode="wait">
                    {!file ? (
                        <motion.div 
                            key="initial"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Upload className="text-primary" size={28} />
                            </div>
                            <p className="font-bold text-slate-800 mb-1">Click or drag resume to upload</p>
                            <p className="text-slate-400 text-sm">PDF or DOCX (max. 10MB)</p>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="uploading"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-sm"
                        >
                            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 relative shadow-sm">
                                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-primary">
                                    <File size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-slate-800 text-sm truncate">{file.name}</p>
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">
                                        {status === 'uploading' ? 'Analyzing...' : 'Ready for matching'}
                                    </p>
                                </div>
                                {status === 'uploading' ? (
                                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <CheckCircle size={20} className="text-success" />
                                )}
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setFile(null); setStatus('idle'); }}
                                    className="absolute -top-2 -right-2 bg-white border border-slate-200 shadow-sm rounded-full p-1 text-slate-400 hover:text-danger transition-colors"
                                >
                                    <X size={12} />
                                </button>
                            </div>
                            
                            {status === 'success' && (
                                <motion.button 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full mt-4 btn-saas bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 flex items-center justify-center gap-2"
                                >
                                    View Full AI Report
                                </motion.button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ResumeUploader;
