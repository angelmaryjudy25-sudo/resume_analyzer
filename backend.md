# Walkthrough: Resume Analyzer & Recruiter Dashboard

We have successfully implemented the **AI-Powered Resume Analyzer, Job Matching, and Career Roadmap System**! It is integrated directly into the existing MERN stack workspace and is now running.

---

## What We Accomplished

### 1. Backend Upgrades (`server/`)
- **Dependencies Installed:** Added `multer` (in-memory file upload handler) and `pdf-parse` (PDF text extractor).
- **Mongoose Database Schema:** Created [Analysis.js](file:///c:/AI-Career-roadmap-generator/server/models/Analysis.js) to store candidate details, match scores, learning roadmaps, skills gaps, and interview prep questions.
- **AI Matching Logic:** Built a structured prompt calling the Google Gemini API (`gemini-2.5-flash` model via the official `@google/genai` SDK) to perform comprehensive resume reviews.
- **Bulk Concurrency Handling:** Implemented an in-memory queue limiter that restricts bulk HR uploads to 3 concurrent Gemini requests, preventing rate limits (free tier API keys) while screening dozens of resumes.
- **Routing Integration:** Mounted routes in [server.js](file:///c:/AI-Career-roadmap-generator/server/server.js) under `/api/analysis/*`.
- **Database Resilience:** Rewrote [db.js](file:///c:/AI-Career-roadmap-generator/server/config/db.js) to automatically fall back to local MongoDB if MongoDB Atlas is unreachable, and to log warning banners instead of crashing the server so the frontend can still render.

### 2. Frontend Upgrades (`client/`)
- **Candidate View Page:** Created [CandidateView.jsx](file:///c:/AI-Career-roadmap-generator/client/src/pages/CandidateView.jsx). Candidates can drag and drop a PDF resume, input a target job description, and view a visual dashboard (radial match score, matched vs. missing skills, missing certifications, suggested portfolio projects, a 3-month timeline roadmap, and preparation questions).
- **Recruiter View Page:** Created [HRView.jsx](file:///c:/AI-Career-roadmap-generator/client/src/pages/HRView.jsx). HR users can input a target job description and upload multiple resumes concurrently. The page renders a sortable candidate leaderboard ranked by match score. Clicking "Inspect Report" opens a slide-out modal presenting the candidate's detailed profile.
- **Navbar Integration:** Added links for "Resume Matcher" and "Recruiter Board" to [Navbar.jsx](file:///c:/AI-Career-roadmap-generator/client/src/components/Navbar.jsx).
- **Router Configuration:** Mounted new routes in [App.jsx](file:///c:/AI-Career-roadmap-generator/client/src/App.jsx) as protected routes.

---

## File Summary

| File Path | Description |
|---|---|
| [Analysis.js](file:///c:/AI-Career-roadmap-generator/server/models/Analysis.js) | **[NEW]** Mongoose database schema for analysis reports. |
| [analysisController.js](file:///c:/AI-Career-roadmap-generator/server/controllers/analysisController.js) | **[NEW]** Handles single/bulk resume parsing, Gemini prompts, and DB storage. |
| [analysis.js](file:///c:/AI-Career-roadmap-generator/server/routes/analysis.js) | **[NEW]** API routes with Multer upload config. |
| [CandidateView.jsx](file:///c:/AI-Career-roadmap-generator/client/src/pages/CandidateView.jsx) | **[NEW]** Candidate file upload, match metrics, roadmap timeline, and interview prep. |
| [HRView.jsx](file:///c:/AI-Career-roadmap-generator/client/src/pages/HRView.jsx) | **[NEW]** Recruiter panel, multiple uploader, ranked database list, and detailed drill-down modal. |
| [server.js](file:///c:/AI-Career-roadmap-generator/server/server.js) | **[MODIFY]** Registered `/api/analysis` routes. |
| [db.js](file:///c:/AI-Career-roadmap-generator/server/config/db.js) | **[MODIFY]** Added local database fallback and crash prevention. |
| [App.jsx](file:///c:/AI-Career-roadmap-generator/client/src/App.jsx) | **[MODIFY]** Mounted `/analyze` and `/hr-dashboard` routes. |
| [Navbar.jsx](file:///c:/AI-Career-roadmap-generator/client/src/components/Navbar.jsx) | **[MODIFY]** Added navigation links to user bar. |

---

## How to Verify locally

1. **Verify Server Execution:**
   - Both servers are already running via `npm run dev`.
   - The React client is listening on `http://localhost:3000`.
   - The Express backend is listening on `http://localhost:5000`.
2. **Access the App:**
   - Open `http://localhost:3000` in your web browser.
   - Click **Sign Up** or **Login** to log in to your account.
3. **Verify Candidate View:**
   - Click **Resume Matcher** in the navigation bar.
   - Drag and drop a PDF resume or click to select a file.
   - Enter a target job title (e.g. "React Developer") and copy-paste a job description.
   - Click **Analyze Resume** and verify the match reports, missing skill badges, roadmaps, and interview questions.
4. **Verify HR View:**
   - Click **Recruiter Board** in the navigation bar.
   - Enter a job description.
   - Drag and drop or select multiple candidate resumes.
   - Click **Rank Candidates** and verify the candidate list ranks them by score and has an "Inspect Report" button.
