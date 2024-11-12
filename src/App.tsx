import ChatBot from "./components/molecules/ChatBot";
import NotFound from "./components/molecules/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoutes";
import EmployeeDetail from "./screens/EmployeeDetail";
import EmployeeList from "./screens/EmployeeList";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { useTranslation } from "react-i18next";
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
  const lngs: { [key in "en" | "sv"]: { nativeName: string } } = {
    en: { nativeName: "English" },
    sv: { nativeName: "Svenska" },
  };

  const { t, i18n } = useTranslation();
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ChatBot />
          {/* <div>
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng as "en" | "sv"].nativeName}
              </button>
            ))}
          </div>
          <p>{t("globals.welcome")}</p> */}

          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
