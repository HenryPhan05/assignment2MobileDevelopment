// homepage
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
const songs = [
  {
    id: "1",
    nameSong: "Moth To A Flame (with the Weeknd)",
    author: "Swedish House Mafia, The Weeknd",
    image: require("../../assets/images/spotifyImages/songs/MothToAFlame.jpg"),
  },
  {
    id: "2",
    nameSong: "Beauty And A Beat",
    author: "Justin Bieber, Nicki Minaj",
    image: require("../../assets/images/spotifyImages/songs/BeautyAndABeat.jpg"),
  },
  {
    id: "3",
    nameSong: "Flashing Lights",
    author: "Kanye West, Dwele",
    image: require("../../assets/images/spotifyImages/songs/FlashingLights.jpg"),
  }
];



export default function HomeScreen() {
  return (
    <View style={styles.body} >
      <View style={styles.header}> {/*header */}
        <Text style={[styles.textHeader, styles.backGroundButtonSelectedHeader, { marginLeft: 15, marginRight: 20, paddingRight: 10, paddingLeft: 10 }]} >H</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>All</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonNonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>Music</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonNonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>Podcasts</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonNonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>Audiobooks</Text>
      </View>
      <View> {/*Text between heading and songs */}
        <Text style={[styles.textAuthor, { marginLeft: 11, marginBottom: 5 }]} >Jump into a session based on your tastes</Text>
      </View>
      <View>
        <Text style={[styles.textHeading, { marginLeft: 11, marginBottom: 5 }]} >Start listening</Text>
        <View> {/*Songs */}
          {
            songs.map((song) => (
              <View key={song.id} style={styles.songSection}>
                <Image source={song.image} style={styles.imageSong} />
                <View style={{ flex: 1, marginLeft: 10, gap: 5 }}>
                  <Text style={styles.textNameSong}>{song.nameSong}</Text>
                  <Text style={styles.textAuthor}>{song.author}</Text>
                </View>
                <Text style={{ color: "white", marginRight: 10 }}>...</Text>
              </View>
            ))
          }
        </View>

        <View>{/* radioes */}

        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 12,
    marginBottom: 10,
  },
  textHeader: {
    color: "white",
    fontSize: 13,
  },
  backGroundButtonSelectedHeader: {
    backgroundColor: "#49f384",
    color: "black",
    padding: 5,
    borderRadius: 100,
  },
  backGroundButtonNonSelectedHeader: {
    backgroundColor: "#474747",
    color: "white",
    padding: 5,
    borderRadius: 100,
  },
  textHeading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  songSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  imageSong: {
    width: 50,
    height: 50,
    marginLeft: 11,
  },
  textNameSong: {
    color: "white",
    fontSize: 15,
  },
  textAuthor: {
    color: "#bebcbc",
    fontSize: 12,
  },
});
