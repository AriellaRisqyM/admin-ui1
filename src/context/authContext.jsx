import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        return jwtDecode(token);
      } catch (err) {
        localStorage.removeItem("token");
        return null;
      }
    }
    return null;
  });

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
      localStorage.setItem("token", token);
    } catch {
      console.error("Invalid token");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/register",
        { name, email, password }
      );
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network Error");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};