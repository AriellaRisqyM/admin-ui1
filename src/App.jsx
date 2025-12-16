import "./App.css";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/Error";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/Balance";
function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;