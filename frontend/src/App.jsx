import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import RequireRecruiterAuth from './components/RequireRecruiterAuth';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
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

const Home = () => <Landing />;

const AuthPage = ({ children }) => {
    const { initAuth, authInitialized } = useAuth();

    useEffect(() => {
        if (!authInitialized) {
            initAuth();
        }
    }, [authInitialized, initAuth]);

    return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-950">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Candidate routes — no auth required */}
            <Route path="/candidate/resume-analysis" element={<ResumeAnalysis />} />
            <Route path="/candidate/job-match" element={<JobMatching />} />
            <Route path="/candidate/job-ranking" element={<JobRanking />} />
            <Route path="/candidate/career-roadmap" element={<CareerRoadmap />} />
            <Route path="/candidate/ai-assistant" element={<AIAssistant />} />

            {/* Recruiter Routes — JWT required */}
            <Route path="/recruiter/dashboard" element={<RequireRecruiterAuth><RecruiterDashboard /></RequireRecruiterAuth>} />
            <Route path="/recruiter/candidates" element={<RequireRecruiterAuth><RecruiterDashboard /></RequireRecruiterAuth>} />
            <Route path="/recruiter/jd" element={<RequireRecruiterAuth><RecruiterDashboard /></RequireRecruiterAuth>} />
            <Route path="/recruiter/ai-insights" element={<RequireRecruiterAuth><RecruiterDashboard /></RequireRecruiterAuth>} />
            <Route path="/recruiter/ranking" element={<RequireRecruiterAuth><CandidateRanking /></RequireRecruiterAuth>} />
            <Route path="/recruiter/analytics" element={<RequireRecruiterAuth><RecruiterAnalytics /></RequireRecruiterAuth>} />

            {/* Admin Routes — JWT required */}
            <Route path="/admin/dashboard" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/users" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/candidates" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/recruiters" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/jobs" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/models" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/analytics" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/health" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />
            <Route path="/admin/audit" element={<RequireRecruiterAuth roles={['admin']}><AdminDashboard /></RequireRecruiterAuth>} />

            {/* Auth pages — restore session if cookie exists */}
            <Route path="/login" element={<AuthPage><Navbar /><Login /></AuthPage>} />
            <Route path="/register" element={<AuthPage><Navbar /><Register /></AuthPage>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
