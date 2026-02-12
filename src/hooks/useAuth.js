import { useAuth } from "../context/AuthContext";

export function useUser() {
  const { user, login, logout } = useAuth();

  const isLoggedIn = !!user;

  return { user, login, logout, isLoggedIn };
}
