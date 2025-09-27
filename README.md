# Job Matching App (Informal Sector)

## 📌 Project Overview
The Job Matching App is a web platform designed to help **informal sector workers** (technicians, artisans, laborers, etc.) connect with job opportunities.  
It bridges the gap between workers and potential employers in Kenya and beyond, functioning like a "freelancer marketplace" tailored for the informal sector.

---

## 🔹 Software Development Life Cycle (SDLC)

### 1. Planning & Requirements
- Define target users: job seekers, employers, admin.
- Gather functional requirements (profiles, job posting, job search, AI matching).
- Define non-functional requirements (scalability, security, mobile-friendly).

### 2. System Design
- **Tech Stack (MERN):**
  - MongoDB – Database
  - Express.js – Backend framework
  - React – Frontend framework
  - Node.js – Server environment
- **Database Schema (ERD sketch):**
  ```
  User {
    user_id (PK)
    name
    role (worker/employer)
    skills[]
    location
    contact_info
  }

  Job {
    job_id (PK)
    title
    description
    location
    employer_id (FK)
    status (open/closed)
  }

  Application {
    application_id (PK)
    job_id (FK)
    worker_id (FK)
    status (pending/accepted/rejected)
  }
  ```
- **APIs planned:**
  - Auth (login/register)
  - Job CRUD (create, list, apply)
  - User profiles (create, update, search)
  - AI skill-matching (future enhancement)

### 3. Implementation
- **Backend (Express + MongoDB + Mongoose)**
- **Frontend (React + Axios + Tailwind CSS)**
- **Authentication (JWT)**
- **Testing tools:** Postman, Jest

### 4. Testing
- Unit testing for backend APIs
- Integration testing (React + Express)
- End-to-end testing (manual + automated)

### 5. Deployment
- Backend: Render / Heroku / AWS
- Frontend: Netlify / Vercel
- DB: MongoDB Atlas (cloud-hosted)
- Environment variables for security

### 6. Maintenance
- Continuous improvements
- Bug fixing
- Add AI-powered recommendations

---

## 🔹 Features

### MVP (Phase 1)
- Worker registration & profile creation
- Employer job posting
- Job application system
- Basic search & filtering
- Authentication & authorization

### Future Features
- AI-based skill-job matching
- SMS/USSD integration (for offline workers)
- Ratings & reviews system
- Wallet & M-Pesa integration
- Multi-language support (Swahili, English, Maasai, etc.)

---

## 🔹 Project Roadmap

### Phase 1: Setup & Structure (Week 1-2)
- Initialize repo, add README & .gitignore
- Setup backend (Express + MongoDB)
- Setup frontend (React)

### Phase 2: Core Features (Week 3-6)
- User authentication (JWT)
- Worker & employer profiles
- Job posting & job search
- Job application flow

### Phase 3: Enhancements (Week 7-10)
- Filtering & advanced search
- Admin dashboard
- Basic matching algorithm

### Phase 4: Deployment (Week 11-12)
- Deploy backend & frontend
- Test live version
- Collect feedback

### Phase 5: Future Expansion (Post-MVP)
- AI job matching
- SMS/USSD integration
- M-Pesa payment gateway

---

## 🔹 Installation & Setup

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)
- Git

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## 🔹 Contribution Guidelines
- Fork repo & create feature branches
- Write clear commit messages
- Ensure all tests pass before merging

---

## 🔹 License
MIT License

---

## 🔹 Author
Developed by **[Your Name]** as part of a final project to improve access to job opportunities in Kenya's informal sector.
