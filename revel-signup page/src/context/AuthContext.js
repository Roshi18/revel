import { createContext, useContext, useState } from 'react';
import { auth } from '../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const login = (email, password) => {
    // Here you would typically make an API call to your backend
    // For now, we'll simulate a successful login
    setUser({ email });
    return true;
  };

  const signup = (email, password) => {
    // Here you would typically make an API call to your backend
    // For now, we'll simulate a successful signup
    setUser({ email });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);