import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import CandidateDashboard from './pages/CandidateDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import CandidateRanking from './pages/CandidateRanking';
import RecruiterAnalytics from './pages/RecruiterAnalytics';
import AdminDashboard from './pages/AdminDashboard';
import ResumeAnalysis from './pages/ResumeAnalysis';
import JobMatching from './pages/JobMatching';
import JobRanking from './pages/JobRanking';
import CareerRoadmap from './pages/CareerRoadmap';
import AIAssistant from './pages/AIAssistant';
import './index.css';

const HomeRouter = () => {
  const { user, loading } = useAuth();

  if (loading) return <div className="hero"><h1>Loading...</h1></div>;
  
  if (!user) return <Landing />;
  
  if (user.role === 'admin') return <AdminDashboard />;
  return user.role === 'recruiter' ? <RecruiterDashboard /> : <CandidateDashboard />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-950">
          <Routes>
            <Route path="/" element={<HomeRouter />} />
            <Route path="/candidate/resume-analysis" element={<ResumeAnalysis />} />
            <Route path="/candidate/job-match" element={<JobMatching />} />
            <Route path="/candidate/job-ranking" element={<JobRanking />} />
            <Route path="/candidate/career-roadmap" element={<CareerRoadmap />} />
            <Route path="/candidate/ai-assistant" element={<AIAssistant />} />
            {/* Recruiter Routes */}
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
            <Route path="/recruiter/candidates" element={<RecruiterDashboard />} />
            <Route path="/recruiter/jd" element={<RecruiterDashboard />} />
            <Route path="/recruiter/ai-insights" element={<RecruiterDashboard />} />
            <Route path="/recruiter/ranking" element={<CandidateRanking />} />
            <Route path="/recruiter/analytics" element={<RecruiterAnalytics />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminDashboard />} />
            <Route path="/admin/candidates" element={<AdminDashboard />} />
            <Route path="/admin/recruiters" element={<AdminDashboard />} />
            <Route path="/admin/jobs" element={<AdminDashboard />} />
            <Route path="/admin/models" element={<AdminDashboard />} />
            <Route path="/admin/analytics" element={<AdminDashboard />} />
            <Route path="/admin/health" element={<AdminDashboard />} />
            <Route path="/admin/audit" element={<AdminDashboard />} />

            {/* Auth and Fallbacks */}
            <Route path="/login" element={<><Navbar /><Login /></>} />
            <Route path="/register" element={<><Navbar /><Register /></>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}







export default App;
