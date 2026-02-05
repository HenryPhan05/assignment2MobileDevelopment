import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/app-example/components/haptic-tab';
import { IconSymbol } from '@/app-example/components/ui/icon-symbol.ios';
import { Colors } from '@/app-example/constants/theme';
import { useColorScheme } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="house" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Your library',
          tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
