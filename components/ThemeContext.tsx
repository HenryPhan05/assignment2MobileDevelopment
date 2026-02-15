
import React, { createContext, useState, ReactNode } from 'react';
type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [dark, setDark] = useState<boolean>(true);
  const toggleTheme = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};