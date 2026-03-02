import { createContext, useContext, useEffect, useState } from 'react';
import { apiRequest } from '../utils/api';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      setLoading(true);
      try {
        const res = await apiRequest('POST', '/api/users/me');
        setUser(res);
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
      } catch {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);
  /**
   * 
   * Fetch user info by userId (after login)
   */
  const fetchUser = async (id) => {
    if (!id) return;

    setLoading(true);
    try {
      const res = await apiRequest('GET', '/api/users/me', { id }); // use `id` key
      setUser(res);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Fetch user failed:', err.message);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };


  const logout = async () => {
    try {
      const res = await apiRequest('POST', '/api/auth/logout');
      console.log("res", res)
    } catch (err) {
      console.error('Logout failed', err.message);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
      window.location.href = '/auth/login';
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    setUser,
    setLoading,
    setIsAuthenticated,
    fetchUser,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used inside UserProvider');
  return context;
};
