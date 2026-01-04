import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from "./context/themeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Pasang AuthContextProvider di sini agar App bisa akses data user */}
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);