import { Navigate } from "react-router";
import { useAuthStore } from "../store/authStore";

export function ProtectedRoute({ children, redirectTo = "/login" }) {
  //it could be the user object or null in a production app
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
