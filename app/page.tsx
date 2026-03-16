"use client";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <p>Welcome back, {user.email}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}