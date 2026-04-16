import AppCard from '@/components/AppCard';
import { ThemeContext } from '@/components/ThemeContext';
import * as storage from "@/lib/storage";
import { STORAGE_KEYS } from '@/lib/storage';
import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';


import { useAuth } from '@/hook/useAuth';
const Settings = () => {
  ///dshds
  // --> "!" behind is make sure that the context already existed
  const { dark, toggleTheme } = useContext(ThemeContext)!;
  const [notifications, setNotifications] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { signOut } = useAuth();
  useEffect(() => {
    setIsLoading(true);
    const loadNotifications = async () => {
      const saved = await storage.get<boolean>(STORAGE_KEYS.NOTIFICATION);
      if (saved !== null) {
        setNotifications(saved);
      }
    }
    const loadTheme = async () => {
      const saved = await storage.get<boolean>(STORAGE_KEYS.THEME);
      if (saved != null) {
        if (saved !== dark) {
          toggleTheme();
        }
      }
    }
    loadNotifications();
    loadTheme();
    setIsLoading(false);
  }, [])
  const handleToggleNotification = async (value: boolean) => {
    setNotifications(value);
    await storage.set(STORAGE_KEYS.NOTIFICATION, value);
  }
  const handleToggleTheme = async () => {
    toggleTheme();
    await storage.set(STORAGE_KEYS.THEME, !dark);
  }
  const handleSignOut = async () => {
    await signOut();
  }


  const styles = StyleSheet.create({
    loading: {
      flex: 1,
      padding: 10,
      backgroundColor: dark ? "black" : "white",
    },
    body: {
      flex: 1,

      alignItems: 'center',
      backgroundColor: dark ? "black" : 'white',
      paddingTop: StatusBar.currentHeight,
    },
    text: {
      color: dark ? "white" : 'black'
    },
    textUser: {

      width: 150,
      height: 150,
      borderRadius: 100,
      fontSize: 70,
      color: 'black',
      backgroundColor: "#49f384",
      textAlign: 'center',

      marginBottom: 15,
      paddingTop: StatusBar.currentHeight,
    },
    profile: {
      backgroundColor: dark ? "#8d9693" : "black",


      margin: 10,
      borderRadius: 15,

    },
    textProfile: {
      color: dark ? "black" : "white",
      padding: 15,
      fontWeight: "700",
    }
  })
  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.body}>
      <Text style={[styles.text, styles.textUser]}>H</Text>
      <TouchableOpacity
        style={styles.profile}
        activeOpacity={0.6}
      >
        <Text style={styles.textProfile}>Edit Profile</Text>
      </TouchableOpacity>
      <AppCard
        title='Notifications'
        subtitle='Enable app notifications '
        right={
          <Switch value={notifications} onValueChange={handleToggleNotification} />
        } />
      <AppCard
        title='Dark Mode'
        subtitle='Enable change Dark Mode'
        right={
          <Switch value={dark} onValueChange={handleToggleTheme} />
        } />
      <View style={{ flex: 1 }} />
      {/**add on press later */}
      <TouchableOpacity
        style={[styles.profile, { marginBottom: 15 }]}
        activeOpacity={0.6}
        onPress={handleSignOut}

      >
        <Text style={styles.textProfile}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

