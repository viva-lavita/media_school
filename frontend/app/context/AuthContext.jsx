'use client';

import {createContext, useContext, useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const refreshInterval = useRef(null);
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  async function loadProfile() {
    try {
      const res = await fetch(`${API_URL}/api/auth/profile`, { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) setUser(data.profile);
        else setUser(null);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("loadProfile error", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadProfile();
  }, []);

  useEffect(() => {
    if (!user) return;

    async function refreshAccess() {
      try {
        const res = await fetch("api/auth/refresh", {
          method: "POST",
          credentials: "include",
        })

        if (!res.ok) {
          setUser(null);
          router.push("/login");
        }
      } catch (err) {
        console.error("refresh error", err);
        setUser(null);
        router.push("/login");
      }
    }

    refreshInterval.current = setInterval(refreshAccess, 1000 * 60 * 4);

    return () => clearInterval(refreshInterval.current);
  }, [user, router])

  async function login(email, password) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error?.error || "Ошибка входа");
    }

    const profileRes = await fetch("/api/auth/profile", { credentials: "include" });
    if (profileRes.ok) {
      const profileData = await profileRes.json();
      setUser(profileData.profile);
      return profileData.profile;
    } else {
      throw new Error("Не удалось получить профиль пользователя");
    }
  }



  async function logout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("logout error", err);
    } finally {
      setUser(null);
      if (refreshInterval.current) clearInterval(refreshInterval.current);
      router.push("/login");
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
