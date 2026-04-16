
import { AuthProvider } from "@/components/AuthContext";
import { ThemeProvider } from "@/components/ThemeContext";
import { useAuth } from "@/hook/useAuth";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";


const AuthGuard = () => {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const isAuthPage =
      segments[0] === "(auth)" &&
      (
        segments[1] === "login" ||
        segments[1] === "logup" ||
        segments[1] === "employee"
      );

    if (!session && !isAuthPage) {
      router.replace("/(auth)/login");
    } else if (session && isAuthPage) {
      router.replace("/(tabs)/homepage");
    }
  }, [session, isLoading]);

  return null
}
export default function RootLayout() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <AuthGuard />
        <Slot />

      </ThemeProvider>
    </AuthProvider>
  );
}
