# 📌 MVP Features Document — Job Matching Web App

## 🎯 Purpose of the MVP
The MVP (Minimum Viable Product) focuses on **connecting informal workers to job opportunities** through a simple, usable web app.  
The MVP must:  
- Be lightweight and affordable to develop.  
- Prove the **core idea works** (workers can find jobs, employers can post jobs).  
- Enable **basic monetization** (to sustain further growth).  

---

## ✅ Core Features (MVP Scope)

### 1. **User Accounts (Basic Profiles)**
- Workers: Sign up, log in, create a profile (name, skills, location, contact).  
- Employers: Sign up, log in, create an employer profile (business name, contact).  
- Authentication: Email & password (JWT-based).  

### 2. **Job Posting**
- Employers can post job opportunities (title, description, location, pay rate).  
- Workers can browse jobs by **category/skills** and **location**.  

### 3. **Job Applications**
- Workers can apply for jobs (simple “Apply” button + notification to employer).  
- Employers can view applicants in their dashboard.  

### 4. **Search & Filter**
- Workers: Search jobs by keyword, category, location.  
- Employers: Search worker profiles by skill/location.  

### 5. **Monetization (Basic)**
- **Freemium model**:  
  - Free: Limited job posts/applications per month.  
  - Paid: Extra posts or priority listing (simple **M-Pesa STK push** integration for Kenya).  

---

## 🚫 Out of Scope (Future Versions, Not MVP)
- AI-powered job matching.  
- Ratings & reviews.  
- In-app chat.  
- Skills assessment module.  
- Mobile app.  
- Advanced analytics.  

---

## 📈 Success Metrics for MVP
- At least **50 workers** and **10 employers** onboard in pilot.  
- At least **5 successful job matches** in first month.  
- At least **1 paying employer** using premium posting.  

---

## 🛠️ Tech Implementation (MVP)
- **Frontend**: React + TailwindCSS.  
- **Backend**: Node.js + Express.  
- **Database**: MongoDB Atlas.  
- **Authentication**: JWT.  
- **Payments**: Safaricom M-Pesa API (basic).  
- **Deployment**: Free/low-cost (Render, Railway, or Vercel + MongoDB Atlas free tier).  

---

