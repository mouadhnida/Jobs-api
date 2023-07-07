import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!token) {
    return <Navigate to="/landing" />;
  }

  return children;
}
