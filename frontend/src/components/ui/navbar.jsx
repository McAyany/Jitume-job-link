import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow px-6 py-4">
      <Link to="/" className="font-bold text-lg text-blue-600">JobLink</Link>
      <div className="flex items-center gap-4">
        <Link to="/jobs" className="hover:underline">Jobs</Link>
        <Link to="/workers" className="hover:underline">Workers</Link>
        <SignedOut><Link to="/sign-in">Sign In</Link></SignedOut>
        <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
      </div>
    </nav>
  );
}
