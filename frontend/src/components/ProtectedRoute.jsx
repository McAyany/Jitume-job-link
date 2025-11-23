import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function ProtectedRoute({ children, requiredRole, redirectTo = "/sign-in" }) {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return <Navigate to={redirectTo} />;

  // If role is required but user has none → send them to select role
  if (requiredRole && user.publicMetadata.role !== requiredRole) {
    return <Navigate to="/choose-role" />;
  }

  return children;
}
