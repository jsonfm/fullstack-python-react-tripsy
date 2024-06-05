import { authService } from "@/services/auth";
import { IAuthTokensSchema } from "@/validators/storage/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<IAuthTokensSchema | undefined>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState>({
  loading: false,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    return await authService.login(email, password);
  },
  logout: async () => {},
});

export const useAuth = () => {
  const state = useContext(AuthContext);
  return state;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await authService.login(email, password);
      setIsAuthenticated(!!response);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ loading, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
