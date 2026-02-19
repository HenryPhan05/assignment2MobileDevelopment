import { ThemeContext, ThemeProvider } from '@/components/ThemeContext';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


import { Tabs } from 'expo-router';
import { Redirect } from "expo-router";
import { useContext } from 'react';
import { AuthContext } from "@/components/AuthContext";
export default function TabsLayout() {
  const { isLoggedIn } = useContext(AuthContext);
  const { dark } = useContext(ThemeContext)!;
  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: dark ? 'black' : 'white',
          borderTopColor: dark ? '#222' : '#b5b2b2',
        },
        tabBarActiveTintColor: '#1DB954',
        tabBarInactiveTintColor: dark ? '#aaa' : "#424242",
      }}
    >
      {/** homepage */}
      <Tabs.Screen
        name="homepage"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      {/**search */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      {/** library*/}
      <Tabs.Screen
        name="library"
        options={{
          title: 'Your Library',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }}
      />
      {/**premium */}
      <Tabs.Screen
        name="premium"
        options={{
          title: 'Premium',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="payments" size={size} color={color} />
          ),
        }}
      />
      {/**settings */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>

  )
}

