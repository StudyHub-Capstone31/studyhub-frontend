import React, { createContext, useState, useContext, useEffect } from "react";
import {
  setCookie,
  getCookie,
  removeCookie,
  isAuthenticated,
} from "../utils/cookieUtils";

// Create the auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user data from cookies on initial render
  useEffect(() => {
    const user = getCookie("user");
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    setCookie("user", userData);
    setCurrentUser(userData);
  };

  // Logout function
  const logout = () => {
    removeCookie("user");
    setCurrentUser(null);
    window.location.href = "/login";
  };

  // Check if user is authenticated
  const checkAuth = () => {
    return isAuthenticated();
  };

  // Update user data
  const updateUserData = (userData) => {
    setCookie("user", userData);
    setCurrentUser(userData);
  };

  // Context value
  const value = {
    currentUser,
    login,
    logout,
    checkAuth,
    updateUserData,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
