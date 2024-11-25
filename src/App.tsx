import ChatBot from "./components/molecules/ChatBot";
import NotFound from "./components/molecules/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoutes";
import EmployeeDetail from "./screens/EmployeeDetail";
import EmployeeList from "./screens/EmployeeList";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import LanguageToggler from "./components/molecules/LanguageToggler";
import { useEffect } from "react";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/login") {
      localStorage.setItem("lastPath", location.pathname);
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to={localStorage.getItem("lastPath") || "/home"} replace />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute
            allowedRoles={{
              isAdmin: true,
              isManager: true,
              isEmployee: true,
            }}
          >
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <ProtectedRoute allowedRoles={{ isAdmin: true, isManager: true }}>
            <EmployeeList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees/:id"
        element={
          <ProtectedRoute
            allowedRoles={{
              isAdmin: true,
              isManager: true,
              isEmployee: true,
            }}
          >
            <EmployeeDetail />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={NotFound}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ChatBot />
            <LanguageToggler />
            <AppRoutes />
          </Router>
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
