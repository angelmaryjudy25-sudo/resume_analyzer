# Implementation Plan - AI-Powered Resume Analyzer, Job Matching & Career Roadmap System

This plan outlines the steps to build the Resume Analyzer, Job Matching, and Career Roadmap System. We will leverage the existing MERN (MongoDB, Express, React, Node.js) stack which already has JWT authentication, a responsive design system, and Google Gemini integration via `@google/genai`.

## User Review Required

> [!IMPORTANT]
> **Stack Choice:** The instructions mention calling a "FastAPI backend". Since the workspace is set up as a MERN stack (Express/Node.js + MongoDB + React), we propose building the new endpoints in the existing Node.js Express server. This allows us to reuse the existing database models, authentication middleware, and Gemini API setup, avoiding the overhead of setting up and maintaining a separate Python service.
> 
> **File Parsing:** We will install `multer` (for handling file uploads) and `pdf-parse` (for extracting text from PDF resumes) in the Node.js backend. For Word documents (`.docx`), we can recommend converting to PDF for 100% extraction accuracy, or use a lightweight text extraction library if needed.

## Open Questions
- None at this moment. The current structure maps directly to the MERN stack layout.

---

## Proposed Changes

### Backend Components (`server/`)

We will add file upload capabilities, parsing, a database schema for resume analyses, and API endpoints for candidate and HR actions.

#### [NEW] [Analysis.js](file:///c:/AI-Career-roadmap-generator/server/models/Analysis.js)
Create a new Mongoose model to store analysis results for both individual candidates and HR bulk uploads.
- Fields:
  - `user`: Reference to the `User` who uploaded/run the analysis.
  - `candidateName`: Candidate's name (extracted or filename).
  - `filename`: Uploaded file name.
  - `jobTitle`: Target job title.
  - `jobDescription`: Job description text.
  - `matchScore`: Overall matching score (0-100).
  - `selectionProbability`: Probability of selection (0-100).
  - `matchedSkills`: Array of matched skills.
  - `missingSkills`: Array of missing skills.
  - `missingCertifications`: Array of missing certifications.
  - `recommendedProjects`: Array of suggested portfolio projects.
  - `learningRoadmap`: Timeline milestones (e.g., month-by-month focus and topics).
  - `interviewQuestions`: Array of preparation questions with reasoning.
  - `resumeIssues`: List of issues found in the resume.
  - `summary`: Short text assessment.
  - `createdAt`: Date timestamp.

#### [NEW] [analysisController.js](file:///c:/AI-Career-roadmap-generator/server/controllers/analysisController.js)
Create the controller handling:
1. **Single Resume Analysis**: Extracts text, calls Gemini with a rich job-matching prompt, saves the result.
2. **Bulk Resume Analysis**: Processes a list of resumes (running them with a concurrency limit of e.g. 3-5 to respect Gemini API rate limits), saves results, and returns them sorted by match score.
3. **Retrieval**: Get all analysis reports for the user, or get a single report by ID.

#### [NEW] [analysis.js](file:///c:/AI-Career-roadmap-generator/server/routes/analysis.js)
Define endpoints:
- `POST /api/analysis/upload-and-analyze`: Handles single resume upload (`multer`), parses PDF, calls Gemini, and saves results.
- `POST /api/analysis/analyze-text`: Alternative endpoint that takes raw resume text and job description (without upload) and runs the analysis.
- `POST /api/analysis/bulk-analyze`: Handles multiple resume files (`multer.array`), parses them, runs AI analysis concurrently, ranks them, and saves results.
- `GET /api/analysis/results`: Gets all saved analysis records.
- `GET /api/analysis/results/:id`: Gets a specific analysis.
- `DELETE /api/analysis/results/:id`: Deletes a result.

#### [MODIFY] [server.js](file:///c:/AI-Career-roadmap-generator/server/server.js)
- Register `/api/analysis` routes.

---

### Frontend Components (`client/`)

We will build two new views and integrate them into the React App router and navigation bar.

#### [NEW] [CandidateView.jsx](file:///c:/AI-Career-roadmap-generator/client/src/pages/CandidateView.jsx)
A view for candidates to upload their resume, select/paste a target job description, run the analysis, and view the visual dashboard:
- Upload box supporting drag-and-drop of PDF resumes.
- Target job selection dropdown or textarea to paste job descriptions.
- Dynamic loaders with progress micro-animations.
- High-fidelity result page:
  - Match Score & Selection Probability radial/circular metrics (with neon glows).
  - Categorized skill lists (Matched vs. Missing) in side-by-side badges.
  - Recommended certifications and project ideas.
  - Timeline accordion showing the month-by-month learning roadmap.
  - Interview preparation accordion (questions + "why asked" guidelines).
  - Critique cards for resume issues.

#### [NEW] [HRView.jsx](file:///c:/AI-Career-roadmap-generator/client/src/pages/HRView.jsx)
A recruiter dashboard enabling HR to assess multiple candidates:
- Inputs for the Job Title and Job Description.
- Multiple-file uploader (up to 20-50 PDF resumes).
- Processing panel displaying progress for each resume.
- Ranked list/table of candidates displaying:
  - Rank, Candidate Name, Match Score, Selection Probability, Matched Skills Count, and Missing Skills Count.
  - "Inspect" action button to open a modal showing the candidate's detailed analysis report (reusing elements from CandidateView).

#### [MODIFY] [App.jsx](file:///c:/AI-Career-roadmap-generator/client/src/App.jsx)
- Import and configure routes for `/candidate-view` and `/hr-view` as protected routes.

#### [MODIFY] [Navbar.jsx](file:///c:/AI-Career-roadmap-generator/client/src/components/Navbar.jsx)
- Add navigation links for "Resume Matcher (Candidate)" and "Recruiter Dashboard (HR)".

---

## Verification Plan

### Automated Verification
We will start the servers concurrently and verify using logs:
1. `npm run install-all` to install `multer` and `pdf-parse`.
2. Connect to the MongoDB instance and verify connection success.
3. Test PDF text extraction.

### Manual Verification
1. **Candidate Flow**:
   - Navigate to `/candidate-view`.
   - Upload a sample PDF resume.
   - Enter a Job Description (e.g., "Full Stack Developer").
   - Click "Analyze" and verify that the results (Score, Roadmap, Skills, Interview Questions) render in a premium UI.
2. **HR Flow**:
   - Navigate to `/hr-view`.
   - Enter a Job Description.
   - Upload multiple PDF resumes.
   - Click "Rank Candidates" and verify the concurrency processing and the sortable ranked table results.
