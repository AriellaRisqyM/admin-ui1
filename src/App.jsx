import "./App.css";
import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/Balance";

// Import Halaman Baru & Layout
import ExpensesPage from "./pages/ExpensesPage";
import MainLayout from "./components/Layouts/MainLayout";

import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return !user ? children : <Navigate to="/" />;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <Balance />
        </RequireAuth>
      ),
    },
    {
      path: "/expenses",
      element: (
        <RequireAuth>
          <MainLayout>
            <ExpensesPage />
          </MainLayout>
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;