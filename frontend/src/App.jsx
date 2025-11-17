import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
          <Link to="/" className="font-bold text-xl text-blue-600">JobLink</Link>
          <div className="flex items-center gap-4">
            <Link to="/jobs" className="hover:underline">Jobs</Link>
            <SignedOut>
              <Link to="/sign-in" className="text-sm text-gray-600">Sign In</Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />
        </Routes>
      </div>
    </Router>
  );
}
