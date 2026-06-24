import React from 'react';
import { motion } from 'framer-motion';
import { User, MessageSquareCode, Send, Loader2 } from 'lucide-react';

export const ChatMessage = ({ message, isAI }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-4 ${isAI ? '' : 'flex-row-reverse'}`}
        >
            <div className={`p-2 rounded-xl shrink-0 ${isAI ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 text-slate-600'}`}>
                {isAI ? <MessageSquareCode size={20} /> : <User size={20} />}
            </div>
            
            <div className={`max-w-[80%] ${isAI ? '' : 'text-right'}`}>
                <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                    isAI ? 'bg-white border border-slate-100 shadow-sm text-slate-700' : 'bg-slate-800 text-white shadow-lg shadow-slate-200'
                }`}>
                    {message.text}
                    {message.component && <div className="mt-4">{message.component}</div>}
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 px-2">
                    {message.timestamp}
                </p>
            </div>
        </motion.div>
    );
};

export const ChatInput = ({ onSend, loading }) => {
    const [input, setInput] = React.useState('');

    const handleSend = () => {
        if (input.trim() && !loading) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <div className="p-4 bg-white border-t border-slate-100 relative z-10">
            <div className="max-w-4xl mx-auto relative flex items-end gap-3">
                <div className="flex-1 relative">
                    <textarea 
                        rows={1}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                        placeholder="Ask me anything about your career..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none pr-12"
                    />
                    <div className="absolute right-4 bottom-4 text-slate-300 text-[10px] font-black uppercase pointer-events-none">
                        ENTER TO SEND
                    </div>
                </div>
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    className="p-4 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
                >
                    {loading ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
                </button>
            </div>
        </div>
    );
};
