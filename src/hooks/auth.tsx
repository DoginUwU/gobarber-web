import React, { createContext, useCallback, useContext, useState } from 'react';
import { SignInCredentials, SignUpCredentials } from '../@types/credentials';
import { User } from '../@types/user';
import api from '../services/api';

interface AuthContextState {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (credentials: SignInCredentials) => {
    const response = await api.post<AuthState>('/sessions', credentials);

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signUp = useCallback(async (credentials: SignUpCredentials) => {
    await api.post<AuthState>('/users', credentials);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
