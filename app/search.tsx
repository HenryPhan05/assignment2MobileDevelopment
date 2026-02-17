import { ThemeContext } from '@/components/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
const Search = () => {
  const { dark, toggleTheme } = useContext(ThemeContext)!;
  const cards = [{
    id: "1",
    name: "Music",
    bgColor: "rgb(220, 20, 140)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
  },
  {
    id: "2",
    name: "Podcasts",
    bgColor: "rgb(0, 100, 80)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf6cc0187b9ea66de1525c3cec"
  },
  {
    id: "3",
    name: "Made For You",
    bgColor: "rgb(30, 50, 100)",
    ImageSource: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/topic/pop/1McMsnEElThX1knmY4oliG/en"
  },
  {
    id: "4",
    name: "New Releases",
    bgColor: "rgb(225, 51, 0)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005cafe4faa836f99d73dccf8b1fe9"
  },
  {
    id: "5",
    name: "Hip-Hop",
    bgColor: "rgb(71, 125, 149)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf5f3752b3234e724f9cd6056f"
  },
  {
    id: "6",
    name: "Pop",
    bgColor: "rgb(71, 125, 149)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf66d545e6a69d0bfe8bd1e825"
  },
  {
    id: "7",
    name: "Country",
    bgColor: "rgb(216, 64, 0)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf8573129e9a69a7482eca7879"
  },
  {
    id: "8",
    name: "GLOW",
    bgColor: "rgb(13, 115, 236)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf50cfe3fbd3a9fb8810da45ea"
  },
  {
    id: "9",
    name: "Black History...",
    bgColor: "rgb(165, 103, 82)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005cafff02a7dc912a9d528b134920"
  },
  {
    id: "10",
    name: "Charts",
    bgColor: "rgb(141, 103, 171)",
    ImageSource: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
  },
  {
    id: "11",
    name: "Popcast Charts",
    bgColor: "rgb(13, 115, 236)",
    ImageSource: "https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"
  },
  {
    id: "12",
    name: "Educational",
    bgColor: "rgb(71, 125, 149)",
    ImageSource: "https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7"
  },
  {
    id: "13",
    name: "Documentary",
    bgColor: "rgb(80, 55, 80)",
    ImageSource: "https://i.scdn.co/image/ab6765630000ba8a2f514cde3ee9501e7ada4cf4"
  },
  {
    id: "14",
    name: "Comedy",
    bgColor: "rgb(175, 40, 150)",
    ImageSource: "https://i.scdn.co/image/ab6765630000ba8a77d267a5accb8911a92668e1"
  },
  {
    id: "15",
    name: "Mystery & Thriller",
    bgColor: "rgb(30, 50, 100)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf18c0f713c2f22918a56e4dfb"
  },
  {
    id: "16",
    name: "Self-Help",
    bgColor: "rgb(0, 100, 80)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf39ec68c1c3cffc69e3c4afea"
  },
  {
    id: "17",
    name: "French...",
    bgColor: "rgb(175, 40, 150)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf6ad70110df20bd2c437b9f15"
  },
  {
    id: "18",
    name: "Fiction &...",
    bgColor: "rgb(175, 40, 150)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005caf2365606112b84671f18abc39"
  },
  {
    id: "19",
    name: "Francophone",
    bgColor: "rgb(225, 51, 0)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005cafe408a82d268c6ec018bcaee2"
  },
  {
    id: "20",
    name: "Rock",
    bgColor: "rgb(0, 100, 80)",
    ImageSource: "https://i.scdn.co/image/ab67fb8200005cafda4c849095796a9e5d2c4ddb"
  },
  {
    id: "21",
    name: "Discover",
    bgColor: "rgb(141, 103, 171)",
    ImageSource: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/dw/cover/en"
  },
  ];
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: dark ? "black" : 'white',
      paddingTop: StatusBar.currentHeight,
    },
    header: {
      marginTop: 10,
      flexDirection: "row",
      gap: 10,
      justifyContent: "space-around",
    },
    userColor: {
      width: 30,
      height: 30,
      backgroundColor: "#49f384",
      color: "black",
      padding: 5,
      borderRadius: 100,
      fontSize: 13,
      textAlign: 'center',
      marginLeft: 11,
    },
    searchText: {
      color: dark ? "white" : 'black',
      padding: 2,
      fontSize: 18,
      fontWeight: "bold",
      marginRight: 200,
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchBar: {
      width: "90%",
      marginTop: 10,
      backgroundColor: dark ? "white" : '#bcbcbc',
      color: 'white',
      borderWidth: 0.8,
      borderRadius: 10,
      padding: 15,

    },
    text: {
      color: dark ? "white" : 'black',
      marginLeft: 20,
      marginTop: 10,
      fontSize: 16,
      fontWeight: '800',
    },
    cardSection: {
      width: "49%",
      height: 100,
      marginBottom: 10,
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textCard: {
      color: "white",
      fontWeight: '800',
    },
    image: {
      marginTop: 10,
      marginRight: 10,
      width: 55,
      height: 55,
      transform: [{ rotate: "32deg" }],
      borderRadius: 5,
    }
  })
  return (
    <ScrollView style={styles.body}>
      <View style={styles.header} > {/*header */}
        <Text style={styles.userColor}  >H</Text>
        <Text style={styles.searchText} >Search</Text>
        <Ionicons name={dark ? 'camera-outline' : 'camera'} size={30} color={dark ? "white" : "black"} />

      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder='What do you want listen to?'
        />
      </View>
      <Text style={styles.text}>Browse all</Text>
      {/**render cards */}
      <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between', margin: 10 }}>
        {cards.map((card) => (
          <View key={card.id} style={[styles.cardSection, { backgroundColor: card.bgColor }]}>
            <Text style={styles.textCard}>{card.name}</Text>
            <Image
              source={{ uri: card.ImageSource }}
              style={styles.image} />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Search

