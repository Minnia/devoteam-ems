import "./App.css";
import ChatBot from "./components/molecules/ChatBot";
import NotFound from "./components/molecules/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoutes";
import EmployeeDetail from "./screens/EmployeeDetail";
import EmployeeList from "./screens/EmployeeList";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute
            allowedRoles={{ isAdmin: true, isManager: true, isEmployee: true }}
          >
            <Home />
          </ProtectedRoute>
        }
      />
      {/* Protect route based on roles */}
      <Route
        path="/employees"
        element={
          <ProtectedRoute allowedRoles={{ isAdmin: true, isManager: true }}>
            <EmployeeList horizontal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees/:id"
        element={
          <ProtectedRoute
            allowedRoles={{ isAdmin: true, isManager: true, isEmployee: true }}
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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ChatBot />
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
