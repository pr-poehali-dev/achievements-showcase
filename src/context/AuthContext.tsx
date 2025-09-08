import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isOwner: boolean;
  user: { id: string; name: string; role: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ id: string; name: string; role: string } | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // TODO: Implement real authentication
    // For now, allow any credentials for demo
    if (email && password) {
      setIsAuthenticated(true);
      setUser({ id: '1', name: 'Лисулифка', role: 'owner' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const isOwner = user?.role === 'owner';

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isOwner,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;