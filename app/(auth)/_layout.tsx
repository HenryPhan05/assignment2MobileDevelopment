
import { Stack } from "expo-router";
import { ThemeContext } from "@/components/ThemeContext";
import { useContext } from "react";

const AuthLayout = () => {
  const { dark } = useContext(ThemeContext)!;
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="logup"
        options={{
          headerTitle: 'Sign Up',
          headerStyle: { backgroundColor: dark ? "black" : "#fff" },
          headerTitleAlign: "center",
          headerTintColor: dark ? "white" : "#111",
        }} />
    </Stack>
  )
}

export default AuthLayout;
