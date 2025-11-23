import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Navbar from "./components/ui/navbar";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";  
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import WorkersList from "./pages/WorkersList";
import Workers from "./pages/Workers"; 
import Applications from "./pages/Applications";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />

        {/* Protected Routes */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/applications" element={<ProtectedRoute><Applications /></ProtectedRoute>} />
        <Route path="/employer" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/workers-list" element={<WorkersList />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Clerk Auth Routes — FIXED */}
        <Route path="/sign-in/*" element={<SignIn routing="path" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" />} />
      </Routes>
    </Router>
  );
}
