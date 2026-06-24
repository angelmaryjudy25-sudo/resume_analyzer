import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import AppShell from '../components/layout/AppShell';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import { mockAIAssistantData } from '../mocks/aiAssistant';

// Sub-components
import { ChatMessage, ChatInput } from '../components/ai-assistant/ChatComponents';
import { PromptSuggestions, ChatHistoryPanel, QuickActions, AIInsightsPanel } from '../components/ai-assistant/SidePanels';
import { AIResponseCard } from '../components/ai-assistant/AIResponseCard';
import { Download, Share2, Save, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    const { suggestedPrompts, history, sampleConversations, quickActions, contextualInsights } = mockAIAssistantData;

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSend = (text) => {
        const newUserMessage = {
            id: Date.now(),
            text,
            isAI: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newUserMessage]);
        setLoading(true);

        // Simulate AI Response
        setTimeout(() => {
            const mockResponse = sampleConversations.find(conv => conv.user.toLowerCase().includes(text.toLowerCase())) || {
                user: text,
                ai: {
                    type: 'text',
                    text: "I'm your AI Career Assistant. I've analyzed your profile and I'm ready to help you land your dream job! How else can I assist you today?"
                }
            };

            const aiMessage = {
                id: Date.now() + 1,
                text: mockResponse.ai.text,
                isAI: true,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                component: mockResponse.ai.data ? <AIResponseCard type={mockResponse.ai.type} data={mockResponse.ai.data} /> : null
            };

            setMessages(prev => [...prev, aiMessage]);
            setLoading(false);
        }, 1500);
    };

    return (
        <AppShell sidebar={<Sidebar />}>
                <TopNavbar />

                <main className="flex-1 flex flex-col overflow-hidden min-w-0">
                    <div className="p-4 md:p-8 border-b border-slate-100 bg-white">
                        <PageHeader 
                            title="AI Career Assistant" 
                            subtitle="Ask anything about your career, from ATS scores to interview preparation."
                        />
                    </div>

                    <div className="flex-1 flex overflow-hidden">
                        {/* LEFT SIDEBAR - HISTORY */}
                        <div className="hidden xl:block w-80 border-r border-slate-100 bg-slate-50/30 p-6 overflow-y-auto">
                            <ChatHistoryPanel history={history} />
                        </div>

                        {/* CENTER - CHAT AREA */}
                        <div className="flex-1 flex flex-col bg-slate-50/10 overflow-hidden relative">
                            <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
                                <div className="max-w-4xl mx-auto space-y-8">
                                    {messages.length === 0 ? (
                                        <div className="py-12 text-center">
                                            <motion.div 
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary"
                                            >
                                                <Sparkles size={40} />
                                            </motion.div>
                                            <h2 className="text-2xl font-black text-slate-800 mb-2">Ask AI Career Assistant</h2>
                                            <p className="text-slate-500 font-medium mb-12">I have analyzed your profile. Try one of the suggested prompts below.</p>
                                            
                                            <PromptSuggestions suggestions={suggestedPrompts} onSelect={handleSend} />
                                        </div>
                                    ) : (
                                        <>
                                            {messages.map((msg) => (
                                                <ChatMessage key={msg.id} message={msg} isAI={msg.isAI} />
                                            ))}
                                            {loading && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-slate-400">
                                                    <div className="p-2 bg-primary/10 text-primary rounded-xl shrink-0">
                                                        <Loader2 size={20} className="animate-spin" />
                                                    </div>
                                                    <p className="text-xs font-black uppercase tracking-widest animate-pulse">AI is thinking...</p>
                                                </motion.div>
                                            )}
                                            <div ref={chatEndRef} />
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* CHAT INPUT */}
                            <ChatInput onSend={handleSend} loading={loading} />
                        </div>

                        {/* RIGHT SIDEBAR - INSIGHTS & ACTIONS */}
                        <div className="hidden lg:block w-80 border-l border-slate-100 bg-slate-50/30 p-6 overflow-y-auto space-y-8">
                            <QuickActions actions={quickActions} onSelect={handleSend} />
                            <AIInsightsPanel insights={contextualInsights} />
                            
                            <div className="pt-8 border-t border-slate-100 space-y-3">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Export Conversation</h3>
                                <button className="w-full py-2.5 border border-slate-200 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white flex items-center justify-center gap-2 transition-all">
                                    <Save size={14} /> Save Chat
                                </button>
                                <button className="w-full py-2.5 border border-slate-200 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white flex items-center justify-center gap-2 transition-all">
                                    <Download size={14} /> Download (.pdf)
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
        </AppShell>
    );
};

// Internal icon for loading state
const Loader2 = ({ size, className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

export default AIAssistant;
