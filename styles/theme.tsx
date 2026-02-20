// useTheme.ts
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

export const useTheme = () => {
  const { dark } = useContext(ThemeContext)!;
  return {
    colors: {
      bg: dark ? "#f9fafc" : "black",
      card: dark ? "#ffffff" : "#111827",
      text: dark ? "#111827" : "#f9fafc",
      muted: dark ? "#6b7280" : "#c5c5c5",
      primary: "#2563eb",
      border: dark ? "#e5e7eb" : "#374151",
    },
    spacing: {
      screen: 20,
      card: 16,
      gap: 12,
    },
    radius: {
      card: 14,
    },
  };
};
