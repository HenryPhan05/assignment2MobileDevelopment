import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '@/components/ThemeContext'

const Search = () => {
  const { dark, toggleTheme } = useContext(ThemeContext)!;
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
  })
  return (
    <View style={styles.body}>
      <Text>Search</Text>
    </View >
  )
}

export default Search

