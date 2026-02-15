import { StyleSheet, Text, View, Switch, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '@/components/ThemeContext'
import AppCard from '@/components/AppCard'
import { router } from 'expo-router'
const Settings = () => {
  ///dshds
  // --> "!" behind is make sure that the context already existed
  const { dark, toggleTheme } = useContext(ThemeContext)!;
  const [notifications, setNotifications] = useState(true);
  const styles = StyleSheet.create({
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
      fontSize: 60,
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
          <Switch value={notifications} onValueChange={setNotifications} />
        } />
      <AppCard
        title='Dark Mode'
        subtitle='Enable change Dark Mode'
        right={
          <Switch value={dark} onValueChange={toggleTheme} />
        } />
      <View style={{ flex: 1 }} />
      {/**add on press later */}
      <TouchableOpacity
        style={[styles.profile, { marginBottom: 15 }]}
        activeOpacity={0.6}

      >
        <Text style={styles.textProfile}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

