import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '@/components/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
const Premium = () => {
  const { dark, toggleTheme } = useContext(ThemeContext)!;
  const plans = [{
    id: "1",
    name: "Individual",
    descriptions: [
      "1 Premium account",
      "15 hours/month of listening time from our audiobooks subscriber catalog",
      "Cancel anytime",
    ],
    discount: "Free for 2 months",
  },
  {
    id: "2",
    name: "Student",
    descriptions: [
      "1 verified Premium account",
      "Discount for eligible students",
      "Cancel anytime",
    ],
    discount: "Free for 1 month",
  },
  {
    id: '3',
    name: "Duo",
    descriptions: [
      "2 Premium accounts",
      "15 hours/month of listening time from our audio books subscriber catalog (plan manager only)",
      "Cancel anytime",
    ],
    discount: "null",
  },
  {
    id: "4",
    name: "Family",
    descriptions: [
      "Up to 6 Premium accounts",
      "Parental controls for the plan manager",
      "15 hours/month of listening from out audiobooks  subscriber catalog (plan manager only)",
      "Ability to create accounts for listeners under 13 (14 in Quebec)",
      "Cancel anytime",
    ],
    discount: "null",
  }];
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: dark ? "black" : 'white',
      paddingTop: StatusBar.currentHeight,

    },
    alignMarginLeft: {
      marginLeft: 11,
    },
    text: {
      color: dark ? "white" : 'black'
    },
    planCard: {
      backgroundColor: dark ? "#2c2c2e" : "#f0f0f0",
      margin: 10,
      borderRadius: 10,
    },
    discount: {
      width: 120,
      marginBottom: 15,
      backgroundColor: dark ? "#f0abdc" : "#af1684",
      color: dark ? "black" : "white",
      borderRadius: 5,
      padding: 2,
      fontWeight: '800',
    },
    planName: {
      marginLeft: 11,
      marginBottom: 10,
      color: dark ? "#8bbcee" : "#5184b8",
      fontSize: 20,
      fontWeight: '800',
    },
    planDescription: {
      marginLeft: 17,
      color: dark ? "white" : "black",
    },
  })
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.body}>
      <Text style={[styles.alignMarginLeft, styles.text, { fontSize: 15, fontWeight: "800", marginBottom: 10 }]}><MaterialIcons name="payments" size={15} color={`${dark ? "white" : "black"}`} />  Premium</Text>
      <Text style={[styles.text, styles.alignMarginLeft, { fontSize: 25, fontWeight: "800", marginBottom: 10 }]}>Get more out of your music with Premium Individual</Text>
      <Text style={[styles.alignMarginLeft, { fontSize: 12, marginBottom: 15, color: dark ? "#6b7280" : "#353333" }]} >You can't upgrade to Premium in the app. We know, it's not ideal.</Text>
      <Text style={[styles.text, styles.alignMarginLeft, { fontSize: 25, fontWeight: "800", marginBottom: 10 }]}>Available plans</Text>
      {plans.map((plan) => (
        <View key={plan.id} style={styles.planCard}>

          {plan.discount !== "null" && (
            <Text style={[styles.discount]}>{plan.discount}</Text>
          )}
          <Text style={[styles.alignMarginLeft, styles.text, { fontSize: 15, fontWeight: "800", marginBottom: 10 }]}><MaterialIcons name="payments" size={15} color={`${dark ? "white" : "black"}`} />  Premium</Text>
          <Text style={styles.planName}>{plan.name}</Text>

          {plan.descriptions?.map((desc, index) => (
            <Text key={index} style={styles.planDescription}>• {desc}</Text>
          ))}
          <Text style={[styles.alignMarginLeft, { fontSize: 12, marginTop: 10, marginBottom: 15, color: dark ? "#6b7280" : "#353333" }]} >You can't upgrade to Premium in the app. We know, it's not ideal.</Text>
        </View>
      ))}
    </ScrollView >
  )
}

export default Premium

