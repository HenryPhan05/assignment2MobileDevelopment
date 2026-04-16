import * as storage from "@/lib/storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ProviderProps = {
  children: ReactNode;
};
const getThemeKey = (userId?: string) =>
  userId ? `dark_${userId}` : "dark_guest";
export const ThemeProvider = ({ children }: ProviderProps) => {
  const [dark, setDark] = useState<boolean>(false);
  const auth = useContext(AuthContext);
  const userId = auth?.user?.id;
  const toggleTheme = async () => {
    const newValue = !dark;
    setDark(newValue);
    await storage.set(getThemeKey(userId), newValue);
  }
  useEffect(() => {
    if (!userId) {
      setDark(false);
      return;
    }
    const loadTheme = async () => {
      const saved = await storage.get<boolean>(getThemeKey(userId));

      if (saved != null) {
        setDark(saved);
      } else {
        setDark(false);
      }
    };

    loadTheme();
  }, [userId]);
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};