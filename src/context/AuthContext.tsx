import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  isEmployee: boolean;
  isManager: boolean;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const mockEmployeeData = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@gmail.com",
    password: "password123",
    isEmployee: true,
    isManager: true,
    isAdmin: true,
  },
  {
    id: "2",
    name: "Manager",
    email: "manager@gmail.com",
    password: "password123",
    isEmployee: true,
    isManager: true,
    isAdmin: false,
  },
  {
    id: "e94ad0b17dbd4abc54ac6c1f",
    name: "Employee",
    email: "employee@gmail.com",
    password: "password123",
    isEmployee: true,
    isManager: false,
    isAdmin: false,
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const checkAuthStatus = () => {
    const token = localStorage.getItem("authToken");
    const expirationTime = localStorage.getItem("expirationTime");
    const user = localStorage.getItem("user");

    if (token && user && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime < parseInt(expirationTime)) {
        return JSON.parse(user);
      } else {
        logout();
      }
    }

    return null;
  };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authenticatedUser = checkAuthStatus();
    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  }, []);

  const login = (email: string, password: string) => {
    const foundUser = mockEmployeeData.find(
      (emp) =>
        emp.email.toLowerCase() === email.toLowerCase() &&
        emp.password === password
    );

    if (foundUser) {
      const token = "mock-auth-token"; // Replace with real token logic
      const expirationTime = new Date().getTime() + 3600000; // 1 hour from now

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("expirationTime", expirationTime.toString());
      setUser(foundUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("expirationTime");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
