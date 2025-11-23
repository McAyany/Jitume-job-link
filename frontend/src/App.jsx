import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Navbar from "./components/ui/navbar";
import ChooseRole from "./pages/ChooseRole";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";  
import Profile from "./pages/Profile";
import Dashboard from "./pages/EmployerDashboard";
import WorkerDashboard from "./pages/WorkerDashboard"; 
import WorkersList from "./pages/WorkersList";
import Workers from "./pages/Workers"; 
import Applications from "./pages/Applications";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />

        {/* Protected Routes */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/applications" element={<ProtectedRoute><Applications /></ProtectedRoute>} />

        {/* Employer/Worker Dashboard */}
        <Route path="/choose-role" element={<ProtectedRoute><ChooseRole /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute requiredRole="employer"><Dashboard /></ProtectedRoute>} />
        <Route path="/worker-dashboard" element={<ProtectedRoute requiredRole="worker"><WorkerDashboard /></ProtectedRoute>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/workers-list" element={<ProtectedRoute><WorkersList /></ProtectedRoute>} />
        <Route path="/workers" element={<ProtectedRoute><Workers /></ProtectedRoute>} />

        {/* Clerk Authentication Routes */}
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
      </Routes>
    </Router>
  );
}
