# Job Matching App (Informal Sector)

## 📌 Live Demo
**Live App:** https://jitume-job-link.pages.dev/
**API Server:** https://jitume-job-link.onrender.com/

## 🖼️ Screenshots
[homepage](./docs/homepage.png) [login_page](./docs/log-in.png) [dashboard]()

---

## 📌 Project Overview
The Job Matching App is a web platform designed to help informal sector workers (technicians, artisans, laborers, etc.) connect with job opportunities.  
It bridges the gap between workers and potential employers in Kenya and beyond—functioning like a freelancer marketplace tailored for the informal sector.

---

## 🔹 Software Development Life Cycle (SDLC)

### **1. Planning & Requirements**
- Target users: job seekers, employers, admin.
- Functional requirements: profiles, job posting, job search, AI matching.
- Non-functional: scalability, security, mobile-friendly design.

### **2. System Design**
**Tech Stack (MERN):**
- MongoDB  
- Express.js  
- React  
- Node.js  

**Database Schema (ERD Sketch):**
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

**APIs Planned**
- Auth (login/register)
- Job CRUD
- User profiles
- AI skill-matching (future)

### **3. Implementation**
- Express + MongoDB Backend  
- React Frontend  
- JWT Authentication  
- Testing: Postman, Jest  

### **4. Testing**
- Unit tests  
- Integration tests  
- E2E tests  

### **5. Deployment**
- Backend: Render / Heroku / AWS  
- Frontend: Netlify / Vercel  
- DB: MongoDB Atlas  

### **6. Maintenance**
- Bug fixes  
- Feature upgrades  
- AI matching integration  

---

## 🔹 Features

### **MVP (Phase 1)**
- Worker registration & profiles  
- Employer job posting  
- Job application flow  
- Search & filtering  
- Authentication  

### **Future Features**
- AI skill-job matching  
- SMS/USSD support  
- Rating & reviews  
- Wallet + M-Pesa  
- Multilingual support  

---

## 🔹 Project Roadmap

### **Phase 1: Setup**
- Initialize backend + frontend  
- Add README & .gitignore  

### **Phase 2: Core Features**
- Authentication  
- Profiles  
- Job posting  
- Job search  
- Application flow  

### **Phase 3: Enhancements**
- Filtering  
- Admin dashboard  
- Matching algorithm  

### **Phase 4: Deployment**
- Deploy frontend + backend  
- Test live application  

### **Phase 5: Expansion**
- AI matching  
- USSD/SMS  
- M-Pesa  

---

## 🔹 Installation & Setup

### **Prerequisites**
- Node.js  
- Git  
- MongoDB (local or Atlas)

### **Backend**
```
cd backend
npm install
npm start
```

### **Frontend**
```
cd frontend
npm install
npm start
```

---

## 🔹 Contribution Guidelines
- Fork the repo  
- Use feature branches  
- Write meaningful commits  
- Ensure tests pass  

---

## 🎞️ Pitch Deck
**Link:** https://www.canva.com/design/DAG5VvrqTMs/bhMOdC5JZe3ZAAsZTY2X_A/edit?utm_content=DAG5VvrqTMs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

---

## 🔹 License
MIT License

---

## 👤 Author
Developed by **Ayany Obala**  
PLP July Cohort — Final Project  
Designed to improve job access for informal sector workers in Kenya.
