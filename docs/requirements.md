# 📑 Requirements Document — Job Matching Web App

## 1. Introduction
The Job Matching Web App is designed to connect **informal workers** (technicians, artisans, casual labourers) with **employers** seeking short-term or long-term help.  
This project is an **MVP for study purposes**, but with potential to grow into a **sustainable business model** through monetization (freemium + M-Pesa payments).  

### Purpose
- Help workers showcase their skills and get hired easily.  
- Help employers quickly find and hire skilled workers.  
- Provide a simple, affordable, and scalable platform.  

### Target Users
- **Workers:** Skilled and unskilled informal sector workers.  
- **Employers:** Individuals, small businesses, households needing services.  

### Scope
**In-scope (MVP):** User registration, job posts, applications, search, payments.  
**Out-of-scope (Future):** AI job-matching, chat, ratings, analytics, mobile app.  

---

## 2. User Stories / Use Cases

- **Worker Stories**  
  - As a worker, I want to create a profile so employers can see my skills.  
  - As a worker, I want to browse jobs so I can find work opportunities.  
  - As a worker, I want to apply for jobs so I can get hired.  
  - As a worker, I want to search/filter jobs by location and skill so I find relevant work.  

- **Employer Stories**  
  - As an employer, I want to create a profile so workers know my business.  
  - As an employer, I want to post jobs so I can hire workers.  
  - As an employer, I want to view applicants so I can choose the best fit.  
  - As an employer, I want to pay for premium job listings so my posts reach more workers.  

---

## 3. Functional Requirements (FRs)

- **FR1:** The system must allow workers to register, log in, and manage their profiles.  
- **FR2:** The system must allow employers to register, log in, and manage job posts.  
- **FR3:** The system must allow workers to browse and search job posts.  
- **FR4:** The system must allow workers to apply to jobs.  
- **FR5:** The system must notify employers when workers apply.  
- **FR6:** The system must allow employers to view, accept, or reject applicants.  
- **FR7:** The system must integrate with M-Pesa API for premium job post payments.  

---

## 4. Non-Functional Requirements (NFRs)

- **NFR1:** The app must load the homepage in under 2 seconds.  
- **NFR2:** The app must support at least 1,000 concurrent users in MVP.  
- **NFR3:** All passwords must be stored securely (hashed with bcrypt).  
- **NFR4:** All API requests must be served over HTTPS in production.  
- **NFR5:** The app must be responsive and usable on mobile and desktop.  
- **NFR6:** The system must handle downtime gracefully with clear error messages.  

---

## 5. System Constraints

- **Tech stack:** MERN (MongoDB, Express.js, React, Node.js).  
- **Budget:** Zero to minimal cost (use free hosting tiers).  
- **Deployment:** Frontend (Vercel/Netlify), Backend (Render/Railway), Database (MongoDB Atlas free tier).  
- **Region focus:** Kenya, with M-Pesa payment integration.  

---

## 6. Acceptance Criteria

- A worker can: register, create a profile, browse and apply for jobs.  
- An employer can: register, create a profile, post a job, view applicants, accept/reject applications.  
- Employers can pay via M-Pesa for at least one premium job post.  
- The platform is responsive and works on mobile and desktop.  
- User authentication works securely with JWT.  

---
