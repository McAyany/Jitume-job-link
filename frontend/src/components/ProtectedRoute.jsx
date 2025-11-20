import { Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

// simple guard: ensure logged in
export default function ProtectedRoute({ children, redirectTo = '/' }) {
  const { isSignedIn } = useUser();
  if (!isSignedIn) return <Navigate to={redirectTo} />;
  return children;
}
