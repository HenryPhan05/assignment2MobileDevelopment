import { Stack } from "expo-router";

export default function HomepageLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="songs/[id]"
        options={({
          headerStyle: { backgroundColor: "#fff" },
          headerTitleAlign: "center",
          headerTintColor: "#111",
        })}
      />
    </Stack>
  );
}