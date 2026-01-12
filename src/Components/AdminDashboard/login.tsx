"use client";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../../../firebase.config";
import { useRouter } from "next/navigation";

// List of authorized email addresses
const AUTHORIZED_EMAILS = (
  process.env.NEXT_PUBLIC_AUTHORIZED_EMAILS || " "
)
  .split(",")
  .map((email) => email.trim());

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();

  const INACTIVITY_TIMEOUT = 60 * 60 * 1000;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        startInactivityTimer();
      } else {
        router.push("/admin");
      }
    });

    return () => {
      unsubscribe();
      clearInactivityTimer();
    };
  }, [auth, router]);

  let inactivityTimer: NodeJS.Timeout;

  const startInactivityTimer = () => {
    clearInactivityTimer();
    inactivityTimer = setTimeout(() => {
      handleLogout();
    }, INACTIVITY_TIMEOUT);

    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);
  };

  const resetInactivityTimer = () => {
    clearInactivityTimer();
    inactivityTimer = setTimeout(() => {
      handleLogout();
    }, INACTIVITY_TIMEOUT);
  };

  const clearInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    window.removeEventListener("mousemove", resetInactivityTimer);
    window.removeEventListener("keydown", resetInactivityTimer);
  };

  const validateEmail = (userEmail: string): boolean => {
    return AUTHORIZED_EMAILS.includes(userEmail);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!validateEmail(email)) {
        setError("You are not authorized to access this admin panel.");
        setLoading(false);
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push("/dashboard");
    } catch (err: any) {
      setError("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;

      if (!userEmail || !validateEmail(userEmail)) {
        await signOut(auth);
        setError("You are not authorized to access this admin panel.");
        setLoading(false);
        return;
      }

      alert("Login successful!");
      router.push("/dashboard");
    } catch (err: any) {
      if (err.code === "auth/popup-closed-by-user") {
        setError("Sign-in popup was closed.");
      } else {
        setError("Failed to sign in with Google");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin");
      alert("You have been logged out due to inactivity.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {error && <p className="text-red-500 text-lg mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#233852] hover:bg-[#01959A] cursor-pointer"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">Or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`w-full mt-4 px-4 py-3 text-gray-700 font-semibold rounded-lg border border-gray-300 flex items-center justify-center gap-2 ${
            loading
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-white hover:bg-gray-50 cursor-pointer"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#1f2937"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#1f2937"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#1f2937"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#1f2937"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
}
