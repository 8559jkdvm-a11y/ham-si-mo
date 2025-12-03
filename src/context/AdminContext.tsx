
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  login: (id: string, pw: string) => boolean;
  logout: () => void;
  content: Record<string, string>;
  updateContent: (key: string, value: string) => void;
  getText: (key: string, defaultText: string) => string;
  getImage: (key: string, defaultSrc: string) => string;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({});

  // Load content from local storage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    const sessionAdmin = sessionStorage.getItem('is_admin');
    if (sessionAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (id: string, pw: string) => {
    if (id === 'admin' && pw === '1234') {
      setIsAdmin(true);
      sessionStorage.setItem('is_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('is_admin');
  };

  const updateContent = (key: string, value: string) => {
    const newContent = { ...content, [key]: value };
    setContent(newContent);
    localStorage.setItem('site_content', JSON.stringify(newContent));
  };

  const getText = (key: string, defaultText: string) => {
    return content[key] || defaultText;
  };

  const getImage = (key: string, defaultSrc: string) => {
    return content[key] || defaultSrc;
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout, content, updateContent, getText, getImage }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
